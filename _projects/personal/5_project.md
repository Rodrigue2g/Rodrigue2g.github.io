---
layout: page
title: Connected Light Switch # IoT Smart Light Switch (Matter & Swift)
description: A connected light switch implementation using an ESP32-C6, Embedded Swift and the Matter protocol. # custom smart switch
img: assets/img/personal_projects/matter-logo.png
importance: 1
category: Personal
---

## Project Overview

Frustrated by a light switch located inconveniently "far" from my bed, I decided to put my engineering skills toegether and build a custom solution rather than purchasing a commercial off-the-shelf product. Utilizing an **ESP32-C6** microcontroller and Arduino relay shield I already had,I developed a fully functional connected light switch.

The core innovation of this project lies in the modern software stack: it is written in [**Embedded Swift**](https://www.swift.org/get-started/embedded/) and implements the [**Matter**](https://en.wikipedia.org/wiki/Matter_(standard)) protocol, ensuring native, secure, and seamless integration into a broader smart home ecosystem.

[Check out the GitHub Repository](https://github.com/Rodrigue2g/matter-smart-light)

---

## Hardware & Architecture

The system is designed to act as a bridge between the existing electrical wiring and the networked control (e.g. Apple HomeKit).

* **Logic:** An ESP32-C6 handles the network stack (Wi-Fi/Thread) and Matter cluster logic.
* **Actuation:** An Arduino relay shield provides NO/NC interfaces that control the high current AC load.

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/personal_projects/connected_switch.HEIC" title="ESP32 Matter Switch Prototype" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption text-center">
The prototype setup: ESP32-C6 logic board interfaced with a multi-channel relay shield for AC load switching.
</div>

---

### Software Implementation: Embedded Swift
Choosing **Swift** for an embedded project allows for high-level memory safety and modern syntax while maintaining the performance required for real-time hardware control. This project explores the **Embedded Swift** evolution, utilizing its "no-runtime" subset to fit within the constraints of the ESP32 MCU. 

The build pipeline leverages the nighlty **Swift toolchain** (since Embedded Swift is now part of the main branch, one could potentially also use the lts) in conjunction with the **esp-idf CLI** flash the binary on the board.


### The Matter Protocol
By implementing the [**Matter protocol**](https://en.wikipedia.org/wiki/Matter_(standard)), the switch bypasses the need for proprietary hubs and can be used directly into Apple HomeKit or Google Home.

---

## Future Roadmap
The next evolution of this project involves:
1.  **Custom PCB Design:** Transitioning from the breadboard prototype to a compact PCB that could fit inside a standard European wall box.
2.  **Energy Monitoring:** Integrating a current sensor to report real-time energy consumption back to the Matter controller.
3.  **Low-Power Optimization:** Refining the Deep Sleep cycles of the ESP32-C6 to improve efficiency when the light is off.
