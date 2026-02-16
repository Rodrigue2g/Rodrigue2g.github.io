---
layout: page
title: IoT Washing Machine Hardware Exploit Analysis
description: A case study in bypassing centralized payment controller through logic-level and physical-layer vulnerabilities.
img: assets/img/personal_projects/connected_washer.png
importance: 4
category: Personal
---

## ❗️ Disclaimer

**\*Ethical Conduct:** This article is provided strictly for educational purposes and as a case study in embedded systems security. The researcher does not condone or encourage the unauthorized bypassing of payment systems or the tampering of utility hardware. In no mean should this be held accountable for the actions of someone trying to bypass such system.\*

**\*Safety Warning:** This project involves high-voltage alternative current (AC). Manipulating powered hardware carries a significant risk of electric shock, fire, or hazard. All physical analysis were conducted on de-energized hardware in a controlled environment.\*

## Project Overview

In modern residential complexes, you often find communal appliances (washing machines/dryers) connected via a centralized payment and control system. This research explores vulnerabilities in the communication protocol between a "Master Controller" and distributed "Appliance Nodes", demonstrating how architectural oversights can lead to unauthorized service access.

To frame this analysis, we define the objective: activating $n$ appliances, $n$ being as great as possible, with low overhead and high reproducability.

The intended way to do unlock a washing machine is by entering your personal code in the Master Controller interface, which will let you unlock an available washer for a given price, fixed by the residence.

To solve this game, one should first get an understanding of the system.

### System Architecture

The environment consists of $n$ appliances connected (wireless) to a central Master Controller and each powered by a dedicated alimentation (with an accessible switch).

1. **Authentication:** Users authenticate via a localized keypad or mobile API.
2. **Authorization:** The Master Controller validates credentials (personal code) and available credits via a remote backend server (out of scope for this research).
3. **Actuation:** Upon validation, the Master Controller sends a signal to a given "Appliance Node" (an MCU-controlled relay) to close the power circuit (basically a fancy conected switch). At the end of the laundry cycle, the Master node sends a Turn off signal to the Appliance Node.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/personal_projects/vesta_architecture.png" title="System Architecture Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    High-level architecture of the centralized controller communicating with distributed appliance units.
</div>

<!-- Now lets say you have done a machine, come back later and your laundry is still in the drier. Your laundry will be stuck in it as the washer is no longer activated (the wahser is off and locked). Fortunaetly, the washer as a a mechanical switch to open the washer even if it is unplugged, but it is not very handy/accessible. Presumably to address this, a software feature has been implemented, the main controller lets you unlock any (available, not currently in use) washer for 30 seconds so that you can easily open it in case it is locked; it basically turns on the washer for 30 seconds. -->

In high-traffic residential laundry rooms, a common friction point occurs when a cycle completes and the user is not present to immediately retrieve their items. Once the paid session expires, the appliance deactivates, often leaving the electronic door latch engaged and the laundry inaccessible.

While the appliances include a manual mechanical override to release the latch, it is often recessed within the chassis and inaccessible to the average user. To solve this UX challenge, the developers implemented a "Maintenance Unlock" feature. This software-driven bypass allows any user to trigger a 30-second power-up signal to an available machine, temporarily re-energizing the door latch for item retrieval.

From a security perspective, this feature creates a transient privileged state. It assumes that 30 seconds of power is insufficient for a full laundry cycle, but as investigated in the following sections, this assumption fails to account for state-persistence errors during controller resets.

With this overview in mind, we can move on to the exploit part.

---

_First, an obvious solution one could try, is brutforcing the code verification. But it could be time consuming based on the length of the code, a bit barbaric and not very fair to your neighbours, as it would imply using the account of someone else (whom may eventually find out, with increasing n)._

## Vulnerability 1: State-Sync Race Condition (Logic Bypass)

Remember the system features a "maintenance unlock" intended to allow users to retrieve laundry if a cycle ends and the door remains locked. This feature triggers a 30-second power-on signal. Well what if you could prevent the main controller from sending this second turn off signal?

**The Flaw:**
The "Turn Off" command is queued to fire 30 seconds after the "Turn On" command. If the Master Controller undergoes a hard reset immediately after the "Turn On" command is sent, the volatile memory clears the scheduled "Turn Off" instruction.

**The Exploit:**
By triggering a hardware reset on the Master Controller during the 30-second window, the Appliance Node remains in a "latched" ON state. While the system attempts a corrective "Heartbeat" check every 10 minutes to sync states, this remains a viable window for unauthorized use.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/personal_projects/vesta_main_controller.jpg" title="Main Controller" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Illustration of a main controller.
</div>

This is a first successfull solution to our "game", but it lacks feasability with growing $n$, as you have to send all the "Unlock" commands and reset the Master node before the first 30 second time out (launched by the first Unlock).

---

## Vulnerability 2: Hardware Actuation Bypass

**\*DISCLAIMER REMINDER**: Manipulating high voltage hardware can be extremly dangerous and lead to fire or death. This is not an insentive to do so. One should never touch live cable and manipulate ee hadrware without proper knowledge and awarness of the risks!\*

To find a more persistent and reliable exploit, a deep dive into the Appliance Node PCB was conducted.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/personal_projects/washer_controller_board.HEIC" title="Controller PCB Inspection" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Internal view of the appliance controller PCB used for architectural analysis.
</div>

**Analysis of the Actuator:**
The relay serves as the final gate for the high-voltage line. While the PCB includes a **CSE187L-P current transformer** for load monitoring, the primary switching is purely mechanical-magnetic.

In the introduction, we mentioned that the washer controller was essentially a fancy connected switch. How did we come to this conlclusion? When you unlock a washer, you can here a very clear "click", alike an elcetromagnet. This led us to look further into the washer's controller After turing off the current and unpluging the the controller, we can have a closer look at it. As expected, we find a prominent `Finder 16A 250V Power relay`.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/personal_projects/F2452504.png" title="Finder 16A 250V Power relay" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Finder 16A 250V Power relay
</div>

**The Hardware Exploit:**
Among the components we also find an `MRF24J40MD RF module` and an `STM32F302 MCU`, along with an AC/DC converter to power the board. A first thought could have been to simply plug the washer directly to the supply, but after carefull inspection the board, we found that it also regulates the power thanks to a `CSE187L-P current transformer`, so bypassing this might damage the washer or cause electircal hazards.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/personal_projects/vesta_power_supply.heic" title="Appliance Node Power Supply" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Appliance Node Power Supply
</div>

During the visual inspection of the PCB, some jumpers were identified in proximity to the STM32F302 MCU. These likely serve as JTAG or SWD interfaces for factory programming. If it was indeed a JTAG interface, we could have probably dumped the firmware in order to find a triggarable bug, but this required working under live current condtition so we did not explore this further given the voltage levels and risk of haszards.

A more coarse method is to focus on the power relay.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/personal_projects/power_relay_exploit.HEIC" title="Finder 16A 250V Power relay exploit" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Board's Finder 16A 250V Power relay with its cover off
</div>

It is essentially a magnetic swicth, so by removing the plastic housing of the power relay (while de-energized), the "Normally Open" (NO) contact can be mechanically forced into a permanent "Closed" state by removing the return spring and securing the metallic strip to the connector. Upon re-assembly, the appliance bypasses the MCU’s logic entirely.

---

This research serves as a case study in the security of centralized IoT appliance controllers. By analyzing the system through both software and hardware, we demonstrated that even systems with cloud-based authentication can be undermined if the local execution layer lacks state persistence or physical hardening.

## Security Recommendations

To harden the system against these vectors, the following improvements are recommended:

1. **State Persistence:** Differentiate between Turn On command and Unlock command, and keep track of the time with an on-board timer to avoid relying on a turn off command that can be intercepted.
2. **Physical Integrity:** Seal the chassis to avoid intrusions and lock the power switch to only let authorised personal turn off the current.

3. **Synchronization:** Increase the frequency of randomized polling between the Master and Node to ensure state alignment could be a solution but one could spoof the network in order to programatically intercept Turn off commands so this is not a reliable fix.

_The findings documented here are for educational and research purposes only. This analysis is intended to provide manufacturers and security engineers with data to improve the resilience of smart building infrastructure. The researcher does not condone the unauthorized use of services or the tampering of utility hardware._
