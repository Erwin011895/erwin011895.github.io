/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false,
};

//Home Page
const greeting = {
  title: "Erwin",
  logo_name: "Erwin",
  nickname: "Erwin",
  subTitle:
    "Hi, I'm Erwin, a Full Stack Developer from Jakarta, Indonesia. Currently, I'm working at Shopee Indonesia as Backend Engineer and working on quite a few personal projects.",
  resumeLink:
    "https://drive.google.com/file/d/1c9cWzu-cHib0477baSvMm3iEbVdFWb01/view?usp=sharing",
  portfolio_repository: "https://github.com/Dantusaikamal/Portfolio-react",
};

const socialMediaLinks = [
  //  Your Social Media Link,
  //  github: "https://github.com/Dantusaikamal/",
  //  linkedin: "https://www.linkedin.com/in/dantu-sai-kamal/",
  //  gmail: "dantusaikamal@gmail.com",
  //  twitter: "https://twitter.com/saikamaldantu/",
  //  instagram: "https://www.instagram.com/sai_kamal7/"

  // {
  //   name: "Github",
  //   link: "https://github.com/dantusaikamal/",
  //   fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
  //   backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  // },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/erwin011895/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  // {
  //   name: "Gmail",
  //   link: "mailto:dantusaikamal@gmail.com",
  //   fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
  //   backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  // },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/saikamaldantu/",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },

  {
    name: "Instagram",
    link: "https://www.instagram.com/erwin011895/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React, Bootstrap.",
        // "⚡ Developing mobile applications using Flutter, React Native ",
        "⚡ Creating application backend in PHP, Laravel, Golang",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "simple-icons:node-dot-js",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2E20",
          },
        },
        {
          skillName: "Golang",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#67D0DE",
          },
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/erwin011895",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FBC02D",
      },
      profileLink: "https://leetcode.com/winfall/",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1E92CF",
      },
      profileLink: "https://codeforces.com/profile/NekuSakuraba",
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/dantusaikamal",
    // },

    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/dantusaikamal",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Binus University",
      subtitle: "S.Kom., S.Si., in Computer Science and Statistic",
      logo_path: "logo_binus.png", //https://binus.ac.id/wp-content/uploads/2019/04/logo-binus.svg
      alt_name: "Binus University",
      duration: "2013 - 2018",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, AI etc.",
        "⚡ Apart from this, I joined student organizations and participated on Binus events",
        "⚡ I participated on 1 programming contest and secured top 50 position.",
      ],
      website_link: "http://binus.ac.id",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Algo Expert",
      subtitle: "AlgoExpert.com",
      logo_path: "algoexpert.png",
      certificate_link: "https://www.hackerrank.com/certificates/26886285672c",
      alt_name: "Algo Expert",
      color_code: "#00000099",
    },
    {
      title: "System Expert",
      subtitle: "AlgoExpert.com",
      logo_path: "algoexpert.png",
      certificate_link: "https://www.hackerrank.com/certificates/26886285672c",
      alt_name: "System Expert",
      color_code: "#00000099",
    },
    {
      title: "Problem Solving (Intermediate) Certificate",
      subtitle: "HackerRank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/26886285672c",
      alt_name: "Problem Solving (Intermediate) Certificate",
      color_code: "#00000099",
    },
    {
      title: "Problem Solving (Basic) Certificate",
      subtitle: "HackerRank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/4207f8c394e8",
      alt_name: "Problem Solving (Basic) Certificate",
      color_code: "#00000099",
    },
    {
      title: "Rest API (Intermediate) Certificate",
      subtitle: "HackerRank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/67e5c2c5115f",
      alt_name: "Rest API (Intermediate) Certificate",
      color_code: "#00000099",
    },
    {
      title: "JavaScript (Basic) Certificate",
      subtitle: "HackerRank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/c224c3112f5b",
      alt_name: "JavaScript (Basic) Certificate",
      color_code: "#00000099",
    },
    // {
    //   title: "Structuring Machine Learning Projects",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/YQPW7MRUBVAB",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Convolution Neural Networks",
    //   subtitle: "- DeepLearning.AI",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/972f79d557642e036ecb58173d9fa6ce",
    //   alt_name: "Deeplearning.AI",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/DTGAXLXP9WCC",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },

    // {
    //   title: "SQL for Data Science",
    //   subtitle: "- University of California, Davis",
    //   logo_path: "UC_Davis_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/aceb208e4869b4cddb2b4b05e9bd1d5e",
    //   alt_name: "UC Davis",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Data Visualization",
    //   subtitle: "- John Hart",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/14adc28b47253bdcf02f77800194fd61",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    //   subtitle: "- The Hong Kong University of Science and Technology",
    //   logo_path: "HKU.jpg",
    //   certificate_link:
    //     "https://coursera.org/share/6aca47adece3f7840564929e9528cd70",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Linux for Developers",
    //   subtitle: "- The Linux Foundation",
    //   logo_path: "Tlf_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/b1d12afb0f897fb2706a5ae3389c02fb",
    //   alt_name: "The Linux Foundation",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Programming for Web with JavaScript",
    //   subtitle: "- Chris Murphy",
    //   logo_path: "penn_logo.png",
    //   certificate_link:
    //     "https://courses.edx.org/certificates/a87191b5c0124260bfa135c3a1cf0bf2",
    //   alt_name: "edX",
    //   color_code: "#FFBB0099",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have completed various Internships in the field of Full Stack Development that gave me industry exposure on both Front End and Back End development. Apart from Developing Web and Mobile applications, I love teaching and writing about Tech. Hence I actively contribute to Open Source Communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Backend Engineer",
          company: "Shopee",
          company_url: "https://shopee.co.id/",
          logo_path: "",
          duration: "3 Feb 2020 - PRESENT",
          location: "Jakarta, Indonesia",
          description:
            "I am working on Shopee Bubble and Arisan games in Shopee",
          color: "#FB5830",
        },
        {
          title: "Backend Engineer",
          company: "Ralali",
          company_url: "https://www.ralali.com/",
          logo_path: "",
          duration: "Feb 2018 - Jan 2020",
          location: "Jakarta, Indonesia",
          description: "I worked on various features in Ralali",
          color: "#FB5830",
        },
      ],
    },
    {
      title: "Parttime & Internships",
      experiences: [
        {
          title: "Parttime Backend Developer",
          company: "Ralali",
          company_url: "https://www.ralali.com/",
          logo_path: "",
          duration: "Nov 2017 - Jan 2018",
          location: "Jakarta, Indonesia",
          description:
            "With 1 of my connection referral, I joined Ralali as parttimer. I developed RFQ (Request for Quotation) product during this period.",
          color: "#FB5830",
        },
        {
          title: "IT Developer",
          company: "PT MNC KAPITAL INDONESIA TBK",
          company_url:
            "https://www.mncgroup.com/microsite/mnc-financial-services",
          logo_path: "",
          duration: "Mar 2017 - Aug 2017",
          location: "Jakarta, Indonesia",
          description:
            "I have worked on project of designing and developing a Mobile Web application prototypes for Personal Finance Product. I'm designing wireframes using Balsamic and I'm developing the applications using PWA and Firebase.",
          color: "#213E7B",
        },
        {
          title: "Android Dev to Backend Engineer",
          company: "Lazato Indonesia",
          company_url: "https://www.instagram.com/lazato/",
          logo_path: "",
          duration: "Mar 2016 - Nov 2016",
          location: "Jakarta, Indonesia",
          description:
            "This is my first working experience. Starting as Android Dev and shifted to Backend Engineer. I learnt much about mobile and API development using Java & Laravel.",
          color: "#3FA7D2",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC BIET",
    //       company_url:
    //         "",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2020 - Present",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating peoper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Web Design and Development projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "erwin.jpg",
    description:
      "You can message me, I will try to reply within 24 hours. I can help you with Web Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@dantusaikamal",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Sukabumi Selatan, Kebon Jeruk, Jakarta Barat",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MrWkeWdGNXXo7ozW8",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+62 82210480625",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};

// isi projects.json

/*

{
  "data": [
    {
      "id": "1",
      "name": "vaksinasi.orgg",
      "createdAt": "2020-09-21T08:49:13Z",
      "url": "https://github.com/Dantusaikamal/Network-visualization",
      "description": "This repository contains my graphic visualization project that I've submitted as my final project for Data visualization course by University of Illinois. Feel free to use this visualization. It would be helpful if you provide credits to me :)",
      "isFork": false,
      "languages": [
        {
          "name": "HTML",
          "iconifyClass": "logos-html-5"
        },
        {
          "name": "JavaScript",
          "iconifyClass": "logos-javascript"
        },
        {
          "name": "CSS",
          "iconifyClass": "logos-css-3"
        }
      ]
    },
    {
      "id": "2=",
      "name": "eswecha-os",
      "createdAt": "2020-07-31T17:20:28Z",
      "url": "https://github.com/Dantusaikamal/eswecha-os",
      "description": "A quintessential Operating System for every Engineer which comes pre-loaded with all the softwares an Engineer of any domain would require.",
      "isFork": false,
      "languages": []
    },
    {
      "id": "3",
      "name": "Desktop-Assistant",
      "createdAt": "2020-07-28T14:08:25Z",
      "url": "https://github.com/Dantusaikamal/Desktop-Assistant",
      "description": "I've created a desktop assistant and named it J.A.R.V.I.S which makes our day to day task much easier. It is capable of doing various tasks and I'll be adding more functions soon :)",
      "isFork": false,
      "languages": [
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        }
      ]
    },
    // {
    //   "id": "4",
    //   "name": "Basic-banking-system",
    //   "createdAt": "2020-10-01T12:18:19Z",
    //   "url": "https://github.com/Dantusaikamal/Basic-banking-system",
    //   "description": "Basic banking application made with PHP and MySQL and hosted in Heroku with JawsDB which allows you to transfer amount in pre-existing users.   ",
    //   "isFork": false,
    //   "languages": [
    //     {
    //       "name": "CSS",
    //       "iconifyClass": "logos-css-3"
    //     }
    //   ]
    // },
    // {
    //   "id": "5",
    //   "name": "CovidAssistance",
    //   "createdAt": "2020-05-20T19:51:29Z",
    //   "url": "https://github.com/Dantusaikamal/CovidAssistance",
    //   "description": "A chatbot developed by Team Introspectors which is capable of answering over 40 queries regarding Covid-19!",
    //   "isFork": false,
    //   "languages": [
    //     {
    //       "name": "HTML",
    //       "iconifyClass": "logos-html-5"
    //     },
    //     {
    //       "name": "CSS",
    //       "iconifyClass": "logos-css-3"
    //     }
    //   ]
    // },
    // {
    //   "id": "6",
    //   "name": "Weather-translation",
    //   "createdAt": "2020-07-10T07:11:59Z",
    //   "url": "https://github.com/Dantusaikamal/Weather-translation",
    //   "description": "A website to demonstrate our Farmer Assistance chatbot which is capable of assisting farmers in various ways. We call it the farming revolution. ",
    //   "isFork": false,
    //   "languages": [
    //     {
    //       "name": "CSS",
    //       "iconifyClass": "logos-css-3"
    //     },
    //     {
    //       "name": "HTML",
    //       "iconifyClass": "logos-html-5"
    //     }
    //   ]
    // }
  ]
}

*/
