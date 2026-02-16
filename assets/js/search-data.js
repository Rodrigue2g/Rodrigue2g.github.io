// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "An overview of both my academics and personnal projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-pokerstar-nds",
          title: 'PokerStar-nds',
          description: "A Texas Hold&#39;em homebrew game for the Nintendo DS",
          section: "Projects",handler: () => {
              window.location.href = "/projects/academic/1_project/";
            },},{id: "projects-power-electronics-dc-dc-converter",
          title: 'Power Electronics DC-DC converter',
          description: "An LLC Half-Bridge 45/24V 50W resonant converter",
          section: "Projects",handler: () => {
              window.location.href = "/projects/academic/2_project/";
            },},{id: "projects-decoder-with-bit-flipping-post-processing-for-6g-wireless",
          title: 'Decoder with Bit-Flipping Post-Processing for 6G wireless',
          description: "Implementation and evaluation of a 6G wireless post-processing decoder",
          section: "Projects",handler: () => {
              window.location.href = "/projects/academic/3_project/";
            },},{id: "projects-advanced-fuzzing-amp-vulnerability-research",
          title: 'Advanced Fuzzing &amp;amp; Vulnerability Research',
          description: "Hardening libpng through OSS-Fuzz harness engineering and crash triaging",
          section: "Projects",handler: () => {
              window.location.href = "/projects/academic/4_project/";
            },},{id: "projects-stand-alone-controller-for-electroacoustic-resonators",
          title: 'Stand-Alone Controller for Electroacoustic Resonators',
          description: "Embedded impedance synthesis controller for active acoustic absorption",
          section: "Projects",handler: () => {
              window.location.href = "/projects/academic/5_project/";
            },},{id: "projects-diy-camera-timelapse-switch",
          title: 'DIY Camera Timelapse Switch',
          description: "My first engineering project a custom intervalometer for long-exposure photography.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/personal/1_project/";
            },},{id: "projects-iot-washing-machine-hardware-exploit-analysis",
          title: 'IoT Washing Machine Hardware Exploit Analysis',
          description: "A case study in bypassing centralized payment controller through logic-level and physical-layer vulnerabilities.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/personal/2_project/";
            },},{id: "projects-dishwasher-hardware-repair",
          title: 'Dishwasher Hardware Repair',
          description: "Component-level diagnosis and repair of a catastrophic electrical failure.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/personal/3_project/";
            },},{id: "projects-countryside-house-electrical-renovation",
          title: 'Countryside House Electrical Renovation',
          description: "FExtending power to a garden terrace through trenching, masonry work, and panel integration.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/personal/4_project/";
            },},{id: "projects-connected-light-switch",
          title: 'Connected Light Switch',
          description: "A connected light switch implementation using an ESP32-C6, Embedded Swift and the Matter protocol.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/personal/5_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%6F%64%72%69%67%75%65.%64%65.%67%75%65%72%72%65@%67%6D%61%69%6C.%63%6F%6D.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Rodrigue2g", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/Rodrigue2g", "_blank");
        },
      },{
        id: 'social-stackoverflow',
        title: 'Stackoverflow',
        section: 'Socials',
        handler: () => {
          window.open("https://stackoverflow.com/users/22700631/rodrigue2g", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
