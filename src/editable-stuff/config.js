// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ramesh",
  middleName: "",
  lastName: "Bhattu",
  message: "Passionate about transforming data with databases.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Rameshbhattu",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/ramesh.bhattu.5?mibextid=ZbWKwL",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/ramesh__reddy_virat/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ramesh-bhattu-a1b541304",
    },
    {
      image: "fa-twitter",
      url: "https://x.com/MrBhattu_Ramesh",
    },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/me.jpeg"),
  imageSize: 395,
  message:
    "My name is Ramesh Bhattu. I'm a graduate of 2020 from the National University of Sciences and Technology in Islamabad, with a degree in Computer Engineering. I have one year of experience in database development, specializing in MongoDB, SQL, and Node.js. I'm deeply passionate about contributing to the community through my work. My goal is to continue pursuing this passion within the field of database development. In my free time, I enjoy contributing to open-source projects.",
  resume: require('./Ramesh_bhattu.pdf'),
};


const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "RameshBattu",
  reposLength: 4,
  specificRepos: [],
  projects: [
    {
      name: 'O-connect',
      description: 'OCONNECT offers high-definition video conferencing with crystal-clear audio, ensuring seamless virtual connections. Our platform simplifies collaboration with versatile themes and templates tailored for various occasions. With features like a prompter, whiteboard, calculator, and more, OCONNECT enhances your virtual meetings effortlessly..',
      languages_url: ['MYSQL', 'MongoDB']
    },
    {
      name: 'O-Pal',
      description: 'O-PALis your go-to messaging app for sending texts, making voice and video calls, and sharing photos, videos, and documents. Connect with individuals and groups in real-time, all with just an internet connection. Say goodbye to traditional SMS services!. Simplify your purchasing and selling experience with our user-friendly platform.',
      languages_url: ['MYSQL', 'MongoDB']
    }
  ]

};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/me.jpeg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/me.jpeg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "mongoDB", value: 85 },
    { name: "SQL", value: 75 },
    { name: "postgreSql", value: 85 },
    { name: "Node.Js", value: 85 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently seeking full-time opportunities in Software Engineering or Machine Learning! If you have any relevant positions available, questions, or just want to say hi, please feel free to email me at",
  email: "mr.ramesh.bhattu@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'DataBase Developer',// Here Add Company Name
      companylogo: require('../assets/img/onpassive.png'),
      date: 'April 2023 – Present',
    }
  ]
}



export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
