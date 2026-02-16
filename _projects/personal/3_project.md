---
layout: page
title: Dishwasher Hardware Repair
description: Component-level diagnosis and repair of a catastrophic electrical failure.
img: assets/img/personal_projects/dishwasher.jpg
importance: 3
category: Personal
---

## Project Overview
Dishwashers, along with many home appliances are often cheaper to change rather than to repair. This is a direct consequence of our over-consumption based culture and has a tremendous environnemental impact. This article hence aims to be an **incentive for sustainable engineering**, preivailing repairement over replacement. 

When a second-hand Siemens dishwasher suffered a total power failure, that tripped the apartment's main circuit breaker, I performed a full teardown to locate the fault. This project highlights the practical application of electrical engineering to extend the lifecycle of home appliances.

---

## Failure Analysis
After disassembling the chassis, I managed to find the culprit: the **Anti-parasite capacitor (EMI Filter)** had suffered a catastrophic dielectric breakdown. The internal short-circuit resulted in carbonized housing and a low-impedance path to ground. *This could have actually turned out way worse than a power break (potential fire hazard). For the main circuit breaker to trip, the component must have experienced a significant current leak.*


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/personal_projects/burnt_capacitor1.HEIC" title="Damaged EMI Filter" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/personal_projects/burnt_capacitor2.HEIC" title="Carbonized Housing" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
The catastrophic failure of the original Anti-parasite capacitor.
</div>

---


## Technical Context: Induction Motors

During the teardown, I looked further into the dishwasher's design, notably the circulation pump. It uses a **single-phase AC induction motor**, which requires a start capacitor to create the necessary phase shift in the auxiliary winding to initiate rotation. 

This was a interesting real-world application of concepts from my [Lab in Energy Conversion](https://edu.epfl.ch/coursebook/en/lab-in-energy-conversion-EE-390-B) and [Electrical Machines](https://edu.epfl.ch/coursebook/en/electrical-machines-for-el-EE-361) courses at EPFL that I followed during my BSc.



<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/personal_projects/induction_motor.HEIC" title="Induction Motor" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/personal_projects/induction_motor_schematic.png" title="Induction Motor Schematic" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
The AC induction motor and its corresponding wiring schematic.
</div>

---

## Resolution

For approximately **20 CHF**, I found an original Anti-parasite capacitor (standard for Bosch/Siemens/Gaggenau):

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/personal_projects/original-antiparasitic-capacitor.png" title="Replacement Component" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption text-center">
    Standard Bosch/Siemens Anti-parasite capacitor.
</div>

**Outcome:** After reassembling the unit, the dishwasher turned on again without tripping the breaker. This "simple" repair put into practice engineering concepts learned during lectures in order to prevent electronic waste.
