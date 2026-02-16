---
layout: page
title: DIY Camera Timelapse Switch
description: My first engineering project a custom intervalometer for long-exposure photography.
img: assets/img/personal_projects/timelapse.jpg
importance: 6
category: Personal
---

## Project Overview

Created as part of my application to engineering studies in 2020, this was my first experience bridging software logic with physical hardware. The goal was to build a low-cost, reliable timelapse switch (intervalometer) for a digital camera.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/personal_projects/first_project.jpg" title="The 2020 Prototype" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The original prototype that started it all, built in February 2020 to automate camera shutter releases.
</div>

## Early Engineering Milestones

- **Control Logic**: Developed the foundational timing loop required to trigger the camera shutter at precise intervals.
- **Hardware Interfacing**: Learned to interface a microcontroller output with a camera's remote shutter port, handling the electrical signal requirements to mimic a physical button press.
- **Problem Solving**: This project was born from a need to avoid the high cost of professional photography equipment, a classic engineering motivation.

## Reflection

Looking back, this project was the catalyst for my interest in **embedded systems**. It taught me the importance of timing precision and hardware reliability—principles that I later applied to complex projects like the **STM32 Electroacoustic Controller**.
