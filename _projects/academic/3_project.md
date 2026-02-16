---
layout: page
title: Decoder with Bit-Flipping Post-Processing for 6G wireless
description: Implementation and evaluation of a 6G wireless post-processing decoder
img: assets/img/academic_projects/6G.jpg
importance: 3
category: Academic
related_publications: false
---

## Overview

Bachelor Project completed at EPFL under the supervision of Prof. Andreas Burg (Telecommunication Circuits Laboratory).

This project focused on the design, implementation, and hardware deployment of a post-processing channel decoder targeting next-generation (6G) wireless systems.

The work consisted of developing a reliability-aware bit-flipping post-processing decoder written in C and designed to be stacked after a primary channel decoder. Its purpose is to detect and correct residual errors by exploiting soft-information metrics (LLRs) to identify unreliable bits. The algorithm selectively flips candidate bits and re-runs decoding to improve overall frame reliability.

The solution was first validated in software through BER/FER simulations across varying SNR regimes, then implemented and tested on an FPGA platform to evaluate hardware feasibility, latency, and resource usage.

Results demonstrate improved error-correction performance with limited additional complexity, particularly in challenging operating regions near the waterfall threshold.

---

## Links

- 🔗 The full implementation is available on [GitHub](https://github.com/Rodrigue2g/6G-decoder)
- 📄 PDF Report: [View Report]({{ '/assets/pdf/Bachelor_Project.pdf' | relative_url }})


---

## Collaborators

- Michel Cancalon
