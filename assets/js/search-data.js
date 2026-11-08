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
  },{id: "nav-publications",
          title: "publications",
          description: "* denotes equal contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Download the PDF version using the icon on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-joined-huawei-munich-research-center-as-a-research-intern",
          title: 'Joined Huawei Munich Research Center as a research intern.',
          description: "",
          section: "News",},{id: "news-started-my-phd-at-institut-polytechnique-de-paris-ip-paris-tada",
          title: 'Started my PhD at Institut Polytechnique de Paris (IP Paris)! :tada:',
          description: "",
          section: "News",},{id: "news-our-paper-refree-s2v-the-outcome-of-my-master-s-thesis-at-mpi-informatics-has-been-accepted-to-neurips-2026-sparkles-project-page-arxiv",
          title: 'Our paper ReFree-S2V, the outcome of my Master’s thesis at MPI Informatics, has...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_Salaheldin_Mohamed.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%61%6C%61%68%65%6C%64%69%6E.%79.%6D%6F%68%61%6D%65%64@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Salaheldinyoussry", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/salaheldinmohamed", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=WuqU98IAAAAJ", "_blank");
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
