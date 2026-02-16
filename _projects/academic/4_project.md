---
layout: page
title: Advanced Fuzzing & Vulnerability Research
description: Hardening libpng through OSS-Fuzz harness engineering and crash triaging
img: assets/img/academic_projects/libpng.png
importance: 2
category: Academic
---

## Overview

Project completed as part of the CS412 Software Security lab at EPFL.

This project focused on improving the fuzzing infrastructure of libpng by engineering new OSS-Fuzz harnesses, expanding seed corpora, and triaging discovered crashes.

We first evaluated the existing read-only fuzzing setup and demonstrated the critical impact of high-quality seed inputs on coverage. Using OSS-Fuzz Introspector, we identified major blind spots in ICC profile handling and the entire PNG writing API.

To address this, we:

- Designed and implemented a new write harness targeting png_write_* functions  
- Enhanced the existing read harness to exercise previously ignored getter and transformation logic  
- Expanded the seed corpus with diverse, structured PNG samples  

These improvements significantly increased code coverage (notably +28% in write-related components) and enabled the discovery and analysis of multiple memory-safety vulnerabilities.

Our work included full crash triage, root-cause analysis, proof-of-concept development, and proposing concrete fixes for identified heap-buffer-overflow issues.

---

## Links

- 🔗 The updated fuzzing harness is available on [GitHub](https://github.com/Rodrigue2g/libpng)
- 📄 PDF Report: [View Report]({{ '/assets/pdf/Fuzzing_Project.pdf' | relative_url }})

---

## Collaborators

- Iman Attia
- Ahyoung Seo
- Nadine Alfadelraad
