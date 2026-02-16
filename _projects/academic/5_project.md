---
layout: page
title: Stand-Alone Controller for Electroacoustic Resonators
description: Embedded impedance synthesis controller for active acoustic absorption
img: assets/img/academic_projects/EAR.png
importance: 1
category: Academic
related_publications: false
---

## Overview

Semester project at EPFL (Laboratory of Wave Engineering) in collaboration with LG Electronics.

This project focused on migrating an impedance synthesis control architecture for electroacoustic absorbers from a laboratory-grade Speedgoat real-time system to a stand-alone embedded solution based on the STM32F767ZI microcontroller.

The goal was to implement a second-order impedance control law derived from the physical loudspeaker model, enabling active low-frequency acoustic absorption in a compact and cost-effective system.

The continuous-time controller was discretized using the bilinear (Tustin) transform and implemented as a real-time biquad filter running at 20 kHz on an ARM Cortex-M7 MCU with hardware FPU support.

---

## Technical Highlights

- Derived and discretized a second-order impedance synthesis controller  
- Implemented deterministic timer-driven real-time control (interrupt-based architecture)  
- Integrated CMSIS-DSP to leverage hardware floating-point acceleration  
- Designed full ADC/DAC signal chain with DC bias handling and output conditioning  
- Validated transfer function using hardware-in-the-loop measurements  
- Benchmarked embedded implementation against Speedgoat reference system  

The final MCU-based controller successfully reproduced the qualitative behavior of the reference system, demonstrating that a low-cost microcontroller architecture can replace high-end rapid-prototyping hardware for this application.

---

## Custom Tooling

To streamline experimentation, I developed a Python-based GUI that:

- Computes continuous and discrete filter coefficients  
- Generates firmware parameters automatically  
- Builds and flashes the MCU firmware  
- Provides transfer-function validation before deployment  

The GUI is distributed through a GitHub Actions CI pipeline generating standalone installers.

---

## Links

- 🔗 The full implementation is available on [GitHub](https://github.com/Rodrigue2g/embedded-electroacoustic-controller)
- 📄 PDF Report: [View Report]({{ '/assets/pdf/MSc_Semester_Project.pdf' | relative_url }})

---

## Supervisor

- Dr. Hervé Lissek
