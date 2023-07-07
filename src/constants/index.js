import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    python,
    html,
    css,
    reactjs,
    c,
    aws,
    java,
    mysql,
    git,
    swift,
    r,
    allrent,
    ATL,
    purdue,
    kbr,
    connectMarketplace,
    jl_beauty,
    majormatch,
    mine,
    tableau,
    javid,
    aykhan,
    aytaj,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const services = [
    {
      title: "AI Engineering",
      icon: web,
    },
    {
      title: "IOS Development",
      icon: mobile,
    },
    {
      title: "Data Science",
      icon: backend,
    },
    {
      title: "Software Development",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "c Toolkit",
      icon: c,
    },
    {
      name: "aws CSS",
      icon: aws,
    },
    {
      name: "Node JS",
      icon: java,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "tableau",
      icon: tableau,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "swift",
      icon: swift,
    },
    {
      name: "r",
      icon: r,
    },
  ];
  
  const experiences = [
    {
      title: "Data Analytics Intern",
      company_name: "ATL Group",
      icon: ATL,
      iconBg: "#4db05b",
      date: "May 2021 - October 2021",
      points: [
        "Revamped the contract system by implementing an innovative Excel-based solution, resulting in a 52% reduction in time wastage.",
        "Employed Excel tables and leveraged machine learning techniques to conduct data analysis, uncovering valuable opportunities for clients.",
        "Performed an extensive audit of financial data for a prominent telecommunications enterprise.",
      ],
    },
    {
      title: "Undergraduate Researcher",
      company_name: "Purdue University",
      icon: purdue,
      iconBg: "#000000",
      date: "January 2023 - March 2023",
      points: [
        "Contributed to the development of a fine-grained object labeling system to enhance robot grasp generation capabilities.",
        "Provided detailed annotations for objects, enabling the robot to identify specific parts for optimal grasping.",
        "Utilized a comprehensive large-scale benchmark to gain a deep understanding of Hierarchical Part-Level 3D objects.",
        "Implemented training of a Neural Network to enable reliable performance in real-world testing scenarios.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "AllRent - startup - remote",
      icon: allrent,
      iconBg: "#fb4444",
      date: "May 2023 - July 2023",
      points: [
        "Utilized TensorFlow and Keras, training Convolutional Neural Networks to accurately detect and classify objects in images, enhancing computer vision capabilities.",
        "Developed an AI model that intelligently identifies and removes duplicate images while ensuring correct rotation, optimizing image processing workflows.",
        "Implemented a tailored GPT model for precise AI-based trip planning, considering budget constraints and delivering personalized recommendations.",
      ],
    },
    {
      title: "Data Engineering Intern",
      company_name: "KBR, Inc.",
      icon: kbr,
      iconBg: "#ffffff",
      date: "May 2023 - August 2023",
      points: [
        "Engineered a Python algorithm for efficient detection and classification of unique product tags.",
        "Implemented Oracle APEX to seamlessly deploy web applications on Oracle databases, enhancing data accessibility and usability.",
        "Designed and fine-tuned PL/SQL stored procedures to execute intricate data manipulations with utmost efficiency.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "As a friend and classmate of Javad, I have seen firsthand his ability to lead and inspire others.",
      name: "Aykhan Mustafayev",
      designation: "Student",
      company: "KU Leuven",
      image: aykhan,
    },
    {
      testimonial:
        "Javad's team work skills have been instrumental in fostering a collaborative environment.",
      name: "Javid Dovlatov",
      designation: "Web Developer",
      company: "AZESA",
      image: javid,
    },
    {
      testimonial:
        "Javad demonstrated unwavering dedication to fostering an inclusive community for all members.",
      name: "Aytaj Aslanli",
      designation: "VP",
      company: "E@P",
      image: aytaj,
    },
  ];
  
  const projects = [
    {
      name: "MajorMatch",
      description:
        "Created an AI-powered social media app using SwiftUI, integrating a customized chatbot powered by the LangChain API and a machine learning model for accurate major recommendations Added firebase database for storing posts and user data.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "SwuiftUI",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: majormatch,
      source_code_link: "https://github.com/",
    },
    {
      name: "ConnectMarketplace",
      description:
        "Concurrent chatting application between sellers and customers with a user-friendly GUI. Implemented a robust database to store user information and chat history, allowing for operations such as deletion, editing, and invisibility as needed.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "git",
          color: "green-text-gradient",
        },
        {
          name: "OOP",
          color: "pink-text-gradient",
        },
      ],
      image: connectMarketplace,
      source_code_link: "https://github.com/jjafarovs/connectMarketplace",
    },
    // {
    //   name: "JL Beauty",
    //   description:
    //     "A traditional devilery application for fast and convenient beauty services. Customers can book and have beauty services at home, at work, or at the hotel. Market research and data analytics for data-driven decisions.",
    //   tags: [
    //     {
    //       name: "Python",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "MySQL",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "PM",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jl_beauty,
    //   source_code_link: "https://github.com/",
    // },
    {
      name: "Mine Detector",
      description:
        "Designed an Arduino-based semi-autonomous robotics project specifically aimed at mine detection. Developed a prototype of a mine detector that can detect mines and send the location of the mine to the user.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Arduino",
          color: "green-text-gradient",
        },
        {
          name: "Prototype-Design",
          color: "pink-text-gradient",
        },
      ],
      image: mine,
      // source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };