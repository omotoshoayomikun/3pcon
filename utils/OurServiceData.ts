export const OurServiceData = [
  {
    img: "/images/services/service1.png",
    img_text: "",
    title: "Software Development",
    icon: "/images/solution/x1.svg",
    url: "/service/software-development",
    showText: {
      icon: "/images/solution/sd.png",
      text: "Software Development",
      list: [
        "Software Product Development",
        "UX/ UI Design",
        "UX/ UI Review & Improvement",
        "Mobile App Development",
        "Microsoft O365 Development",
      ],
    },
  },
  {
    img: "/images/services/service2.png",
    img_text: "",
    title: "Data & Automation",
    icon: "/images/solution/x2.svg",
    url: "/service/data-automation",
    showText: {
      icon: "/images/solution/da.png",
      text: "Data & Automation",
      list: [
        "Business Intelligence & Data Analytics",
        "Business Process/ Workflow Automation",
        "Robotics & Artificial Intelligence",
      ],
    },
  },
  {
    img: "/images/services/service3.png",
    img_text: "",
    title: "Agile/ Digital Transformation",
    icon: "/images/solution/x3.svg",
    url: "/service/agile",
    showText: {
      icon: "/images/solution/ad.png",
      text: "Agile/ Digital Transformation",
      list: [
        "Agile Consultancy – Business Transformation",
        "Agile Teams – Technology",
        "Training",
        "Business Analysis",
        "Product Delivery & Change Management",
      ],
    },
  },
  {
    img: "/images/services/service4.png",
    img_text: "",
    title: "Consultancy & Advisory",
    icon: "/images/solution/x4.svg",
    url: "/service/consultancy",
    showText: {
      icon: "/images/solution/ca.png",
      text: "Consultancy & Advisory",
      list: [
        "Internal Innovation Hub",
        "B2Business Partnership",
        "B2Government Partnership",
        "Technology Incubation",
      ],
    },
  },
  {
    img: "/images/services/service5.png",
    img_text: "",
    title: "Innovation Management",
    icon: "/images/solution/x5.svg",
    url: "/service/innovation",
    showText: {
      icon: "/images/solution/sdd.png",
      text: "Innovation Management",
      list: [
        "Internal Innovation Hub",
        "B2Business Partnership",
        "B2Government Partnership",
        "Technology Incubation",
      ],
    },
  },
  {
    img: "/images/services/service6.png",
    img_text: "",
    title: "Managed Workforce/ IT Workforce",
    icon: "/images/solution/x6.svg",
    url: "/service/it-workforce",
    showText: {
      icon: "/images/solution/mw.png",
      text: "Managed Workforce/IT Workforce",
      list: [
        "Agile Teams/ Coaches",
        "Business Analysts",
        "Data Analysts",
        "Software Developers",
        "IT Engineers & End User Support",
      ],
    },
  },
];

export const OurValuesData = [
  {
    icon: "/images/solution/x9.svg",
    title: "Customer Centricity",
    des: "We value our customers and the problems we solve for them. By viewing every challenge through their lens, we shape innovative solutions through active listening from start to finish.",
  },
  {
    icon: "/images/solution/x10.svg",
    title: "Courage",
    des: "We are bold and we understand the need for organisations to be bold; in delivering irresistible products and services to their consumers, and to outpace and outperform competition. We take audacious but guided steps to help our customers win.",
  },
  {
    icon: "/images/solution/x12.svg",
    title: "Respect",
    des: "We value respect, not just because it’s the right thing to do but because it helps to bring out the best in people across our delivery value chain and the result of fine creativity. We respect divergent views, backgrounds, race, ethnicity, gender, and harness the strength in diversity.",
  },
  {
    icon: "/images/solution/x13.svg",
    title: "Collaboration",
    des: "Strong internal and customer partnership is at the core of what we do. We take ideas to the best form through our approach of engagement and inclusion.",
  },
];

export const FooterData = {
  section2: [
    { title: "Software Development", link: "/service/software-development" },
    { title: "Data & Automation", link: "/service/data-automation" },
    { title: "Agile/ Digital Transformation", link: "/service/agile" },
    { title: "Consultancy & Advisory", link: "/service/consultancy" },
    { title: "Innovation Management", link: "/service/innovation" },
    { title: "Managed Workforce/ IT Workforce", link: "/service/it-workforce" },
  ],
  section3: [
    { title: "About 3PCON", link: "/about" },
    { title: "Our Services", link: "/service" },
    { title: "Contact Us", link: "/contact" },
  ],
};

export const AboutData = [
  {
    icon: "/images/solution/mission.svg",
    title: "Our Mission",
    des: "To be the trusted enabler of success, leveraging our global reach, industry expertise, and passion for innovation to help our partners achieve their ambitions and make a lasting impact.",
  },
  {
    icon: "/images/solution/vission.svg",
    title: "Our Vision",
    des: "To become the No.1 strategic partner for success, globally.",
  },
];

export const WhyData = [
  "Deep industry expertise and technical proficiency.",
  "Strong business/ organisational acumen.",
  "Personalized approach to client engagement and solution delivery.",
  "Proven track record of successful project implementations and client satisfaction.",
  "Forward-thinking mindset, constantly adapting to emerging technologies and market trends.",
];

export interface ServicesInterface {
  heading: string;
  main_content: {
    image: string;
    title: string;
    des: string;
    listTitle: string;
    list: string[];
  }[];
}

export const SoftwareDevData: ServicesInterface = {
  heading: ` In today’s fast-paced digital landscape, custom software solutions can
          be a key differentiator for businesses. At 3PCON, we specialize in
          providing top-notch software development services that cater to the
          unique needs of our clients. Our team of experts leverages
          cutting-edge technologies, agile methodologies, and industry best
          practices to design, develop, and deploy scalable, secure, and
          efficient software solutions.`,
  main_content: [
    {
      image: "/images/solution/man1.png",
      title: "Software Product Development",
      des: `
      We help businesses transform ideas into successful software products. From concept to deployment, 
      our development services ensure a scalable, high-quality solution tailored to your needs.
      `,
      listTitle: "Benefits With Our Service",
      list: [
        "Requirements Analysis – Define goals, features, and technical needs.",
        "Architecture & Prototyping – Design a solid foundation for development.",
        "Development & Testing – Build, refine, and ensure performance.",
        "Continuous Improvement – Adapt and scale as your business grows.",
      ],
    },
    {
      image: "/images/solution/xc1.png",
      title:
        "UX/UI Design Services: Creating Intuitive and Engaging Digital Experiences",
      des: `
      A well-designed user experience is essential for software adoption and 
      customer satisfaction. Our UX/UI design services focus on crafting intuitive, 
      visually appealing, and user-centered interfaces 
      that align with your business goals and enhance usability.
      `,
      listTitle: "What We Offer:",
      list: [
        "User Research & Personas",
        "UX Strategy & Planning",
        "Visual Design & Branding",
        "Usability Testing & Iteration",
      ],
    },
    {
      image: "/images/solution/paper.png",
      title: "UX/UI Review & Improvement",
      des: `
      If your software isn’t meeting user expectations, we identify problem areas and implement data-driven design improvements.
      `,
      listTitle: "Our Approach:",
      list: [
        "Heuristic Evaluation & Usability Testing – Detect usability issues.",
        "User Feedback Analysis – Gather insights to guide improvements.",
        "Design Enhancements & Implementation – Optimize user experience.",
        "Ongoing UX Optimization – Keep your product evolving with user needs.",
      ],
    },
    {
      image: "/images/solution/paper2.png",
      title: "Mobile App Development",
      des: `
      We design and develop mobile apps that are fast, secure, and scalable. Our mobile app development services include.
      `,
      listTitle: "Our Approach:",
      list: [
        "Native app development for iOS and Android",
        "Cross-platform app development",
        "Mobile app design and prototyping",
        "Testing and deployment",
        "Ongoing maintenance and updates",
      ],
    },
    {
      image: "/images/solution/paper3.png",
      title: "Microsoft O365 Development",
      des: `
      We specialize in developing custom solutions on the Microsoft O365 platform. Our services include:
      `,
      listTitle: "Our Approach:",
      list: [
        "Custom application development for productivity & automation",
        "User feedback analysis and reporting",
        "Microsoft Teams integration and development",
        "Power BI and Power Apps development",
      ],
    },
  ],
};

export const DataAutomationData: ServicesInterface = {
  heading: `
  In today’s fast-paced digital landscape, data-driven insights and automation are crucial for businesses to stay ahead of the curve. At 3PCON, we empower organisations to make informed decisions, streamline operations, and drive innovation through our Data & Automation services.`,
  main_content: [
    {
      image: "/images/solution/data1.jpg",
      title: "Business Intelligence & Data Analytics",
      des: `
      Unlock the full potential of your data with our Business Intelligence & Data Analytics services:
      `,
      listTitle: "Benefits With Our Service",
      list: [
        "Data Visualization – Interactive dashboards and reports to simplify complex data",
        "Predictive Analytics – Machine learning and statistical models to forecast future trends",
        "Data Mining – Discover hidden patterns and insights in your data",
        "Data Warehousing – Centralized data management for improved decision-making",
      ],
    },
    {
      image: "/images/solution/data2.jpg",
      title:
        "Business Process/Workflow Automation",
      des: `
      Streamline your operations and boost efficiency with our Business Process/Workflow Automation services
      `,
      listTitle: "What We Offer:",
      list: [
        "Process Mapping – Identify areas for improvement in your workflows",
        "Automation – Implement tailored solutions to automate repetitive tasks",
        "Integration – Seamlessly connect with existing systems and tools",
        "Optimizationn – Continuously monitor and refine your workflows",
      ],
    },
    {
      image: "/images/solution/data3.jpg",
      title: "Robotics & Artificial Intelligence",
      des: `
      Harness the power of Robotics & Artificial Intelligence to drive innovation and transformation.
      `,
      listTitle: "Our Approach:",
      list: [
        "AI-Powered Chatbots – Engage with customers and employees through intelligent virtual assistants",
        "Machine Learning – Develop predictive models to drive business outcomes",
        "RPA (Robotic Process Automation) – Automate repetitive tasks with software robots",
        "Computer Vision – Analyze and interpret visual data from images and videos",
      ],
    },
  ],
};

export const AgileData: ServicesInterface = {
  heading: `
  In today’s fast-paced digital landscape, businesses need to be agile and adaptable to stay ahead of the curve. At 3PCON, we help organisations navigate the complexities of digital transformation and adopt agile methodologies to drive innovation, improve efficiency, and enhance customer satisfaction.Our team of experts specializes in providing tailored Agile/Digital Transformation services that meet the unique needs of our clients.`,
  main_content: [
    {
      image: "/images/solution/agile1.jpg",
      title: "Agile Consultancy - Business Transformation",
      des: `
      We help businesses transform their operations and culture to become more agile and responsive
      `,
      listTitle: "Benefits With Our Service",
      list: [
        "Agile Strategy Development – Align your business goals with agile principles",
        "Organizational Design – Restructure your teams for optimal agility",
        "Change Management – Navigate the complexities of cultural transformation",
        "Coaching and Mentoring – Develop agile leadership and talent",
      ],
    },
    {
      image: "/images/solution/agile2.jpg",
      title:
        "Agile Teams - Technology",
      des: `
      We help businesses build high-performing agile teams that deliver cutting-edge technology solutions
      `,
      listTitle: "What We Offer:",
      list: [
        "Team Formation and Coaching – Build and develop agile teams",
        "Scrum and Kanban Implementation – Adopt agile methodologies",
        "Technical Excellence – Develop technical skills and expertise",
        "DevOps and Continuous Delivery – Streamline development and deployment",
      ],
    },
    {
      image: "/images/solution/agile3.jpg",
      title: "Training",
      des: `
      We provide comprehensive training programs to help businesses develop the skills and knowledge needed to succeed in an agile environment
      `,
      listTitle: "What we Offer:",
      list: [
        "Agile Fundamentals – Introduction to agile principles and practices",
        "Technical Skills Training – Develop technical skills and expertise",
        "RPA (Robotic Process Automation) – Automate repetitive tasks with software robots",
        "Computer Vision – Analyze and interpret visual data from images and videos",
      ],
    },
    {
      image: "/images/solution/agile4.jpg",
      title: "Business Analysis",
      des: `
      We help businesses develop a deep understanding of their customers, markets, and operations to inform agile decision-making
      `,
      listTitle: "Our Approach:",
      list: [
        "Business Analysis – Develop business cases and requirements",
        "Market Research – Conduct market research and analysis",
        "Customer Journey Mapping – Develop customer journey maps",
        "Process Analysis – Analyze and optimize business processes",
      ],
    },
  ],
};

export const ItWorkforceData: ServicesInterface = {
  heading: `
 In today’s fast-paced digital landscape, businesses need to be agile and adaptable to stay ahead of the curve. At 3PCON, we provide a Managed IT Workforce whether you want to augment your in-house IT resources or total outsource your IT organisation. We help you bridge the gap between current capabilities and future goals. Helping you to focus on the core of your business. Our team of experts specializes in providing tailored workforce augmentation solutions that meet the unique needs of our clients.`,
  main_content: [
    {
      image: "/images/solution/it1.jpg",
      title: "Agile Teams Members and Coaches",
      des: `
      We provide experienced agile team members and coaches to help businesses adopt agile methodologies and improve team performance
      `,
      listTitle: "Benefits With Our Service",
      list: [
        "Scrum Masters – Facilitate agile teams and ensure Scrum principles are followed.",
        "Product Owners – Develop and prioritize product backlogs.",
        "Agile Coaches – Coach teams on agile principles and practices.",
        "Agile Team Members – Augment existing teams with experienced agile professionals.",
      ],
    },
    {
      image: "/images/solution/it2.jpg",
      title:
        "Business Analysts",
      des: `
      Our business analysts help businesses develop a deep understanding of their customers, markets, and operations to inform strategic decision-making
      `,
      listTitle: "Our Approach:",
      list: [
        "Requirements Gathering, Analysis & Documentation",
        "Business Case Development",
        "Technical ExACustomer Journey Mappingcellence",
        "Process Analysis – Analyze and optimize business processes.",
        "Functional Specification & Delivery",
      ],
    },
    {
      image: "/images/solution/it3.jpg",
      title: "Data Analysts",
      des: `
      We provide experienced data analysts to help businesses unlock insights from their data
      `,
      listTitle: "Our Approach:",
      list: [
        "Data Visualization – Develop interactive dashboards and reports.",
        "Predictive Analytics – Develop predictive models to drive business outcomes",
        "Data Mining – Discover hidden patterns and insights in data.",
        "Data Governance – Develop data governance policies and procedures.",
      ],
    },
    {
      image: "/images/solution/it4.jpg",
      title: "Software Developers",
      des: `
      Our software developers design and develop high-quality software solutions that meet customer needs and expectations:
      `,
      listTitle: "Benefits With Our Service",
      list: [
        "Custom Software Development – Develop tailored software solutions.",
        "Mobile App Development – Develop mobile apps for iOS and Android.",
        "Web Development – Develop responsive and scalable web applications.",
        "Cloud Development – Develop cloud-based software solutions.",
      ],
    },
    {
      image: "/images/solution/data6.jpg",
      title: "IT Engineers",
      des: `
      We provide experienced IT engineers to help businesses design, implement, and maintain their IT infrastructure
      `,
      listTitle: "Benefits With Our Service",
      list: [
        "Network Engineering – Design and implement network infrastructure.",
        "Cloud Engineering – Design and implement cloud-based infrastructure.",
        "Cybersecurity – Develop and implement cybersecurity policies and procedures.",
        "IT Service Management – IT Service Management.",
      ],
    },
    {
      image: "/images/solution/paper2.png",
      title: "End User Support",
      des: `
      Our end-user support team provides timely and effective support to help businesses resolve technical issues and improve productivity
      `,
      listTitle: "Benefits With Our Service",
      list: [
        "Help Desk Support – Provide level 1 and level 2 technical support.",
        "Desktop Support – Provide desktop support and troubleshooting.",
        "Mobile Device Support – Provide mobile device support and troubleshooting.",
        "Training and Adoption – Provide training and support for new technology adoption.",
      ],
    },
    // {
    //   image: "/images/solution/paper3.png",
    //   title: "Microsoft O365 Development",
    //   des: `
    //   We specialize in developing custom solutions on the Microsoft O365 platform. Our services include:
    //   `,
    //   listTitle: "Our Approach:",
    //   list: [
    //     "Custom application development for productivity & automation",
    //     "User feedback analysis and reporting",
    //     "Microsoft Teams integration and development",
    //     "Power BI and Power Apps development",
    //   ],
    // },
  ],
};

export const InnovationData: ServicesInterface = {
  heading: `
  n today’s fast-paced digital landscape, businesses need to be agile and adaptable to stay ahead of the curve. At 3PCON, we provide a Managed IT Workforce whether you want to augment your in-house IT resources or total outsource your IT organisation. We help you bridge the gap between current capabilities and future goals. Helping you to focus on the core of your business. Our team of experts specializes in providing tailored workforce augmentation solutions that meet the unique needs of our clients.`,
  main_content: [
    {
      image: "/images/solution/in1.jpg",
      title: "Innovation Hub",
      des: `
      Our Innovation Hub is a collaborative space where businesses, startups, and experts come together to drive innovation:
      `,
      listTitle: "Benefits With Our Service",
      list: [
        "Incubation and Acceleration – Support for startups and scale-ups",
        "Innovation Workshops – Collaborative workshops to drive innovation",
        "Mentorship Programs – Guidance from experienced innovators",
        "Networking Events – Opportunities to connect with innovators and industry experts",
      ],
    },
    {
      image: "/images/solution/in2.jpg",
      title:
        "B2Business Partnership",
      des: `
      We partner with businesses to drive innovation and growth through collaborative initiatives:
      `,
      listTitle: "What We Offer:",
      list: [
        "Joint Innovation Projects – Collaborative projects to drive innovation",
        "Technology Transfer – Transfer of technology and expertise Technology Transfer",
        "Co-Creation – Collaborative development of new products and services",
        "Innovation Consulting – Expert advice on innovation strategy",
      ],
    },
    {
      image: "/images/solution/in3.jpg",
      title: "B2Government Partnership",
      des: `
      We partner with government agencies to drive innovation and growth through collaborative initiatives:
      `,
      listTitle: "Benefits With Our Service:",
      list: [
        "Grant Writing and Management – Support for grant applications and management",
        "Innovation Policy Development – Development of innovation policies and strategies",
        "Public-Private Partnerships – Collaboration on innovation projects",
        "Innovation Capacity Building – Development of innovation capacity in government agencies",
      ],
    },
    {
      image: "/images/solution/in4.jpg",
      title: "Technology Innovation",
      des: `
      We help businesses drive technology innovation through our expertise in emerging technologies:
      `,
      listTitle: "What We Offer:",
      list: [
        "Artificial Intelligence and Machine Learning – Development of AI and ML solutions",
        "Internet of Things (IoT) – Development of IoT solutions",
        "Cybersecurity – Development of cybersecurity solutions"
      ],
    }
  ],
};


export const ConsultancyData: ServicesInterface = {
  heading: `
  In today’s fast-paced digital landscape, businesses need expert guidance to stay ahead of the curve. At 3PCON, we provide Consultancy & Advisory services to help organizations navigate complex challenges and achieve their goals. Our team of experts specialises in providing tailored consultancy and advisory services that meet the unique needs of our clients.
`,
  main_content: [
    {
      image: "/images/solution/in8.jpg",
      title: "Technology Strategy/Business Alignment",
      des: `
      We help businesses align their technology strategy with their overall business goals:
      `,
      listTitle: "Benefits With Our Service",
      list: [
        "Technology Roadmap Development – Develop a tailored technology roadmap",
        "IT Strategy Alignment – Align IT strategy with business objectives",
        "Digital Transformation – Develop a digital transformation strategy",
        "Technology Assessment – Assess current technology infrastructure",
      ],
    },
    {
      image: "/images/solution/in2.jpg",
      title:
        "Business Transformation",
      des: `We help businesses transform their operations and culture to stay competitive:`,
      listTitle: "What We Offer:",
      list: [
        "Change Management – Develop a change management strategy",
        "Process Improvement – Identify areas for process improvement",
        "Organizational Design – Develop an optimal organizational design",
        "Culture Transformation – Develop a culture transformation strategy",
      ],
    },
    {
      image: "/images/solution/in7.jpg",
      title: "Digital Marketing Strategy & Delivery",
      des: `
      We help businesses develop and implement effective digital marketing strategies:
      `,
      listTitle: "What We Offer:",
      list: [
        "Digital Marketing Strategy – Develop a tailored digital marketing strategy",
        "Content Creation – Create high-quality, engaging content",
        "Social Media Management – Manage social media presence",
        "Search Engine Optimization (SEO) – Optimize website for search engines",
      ],
    },
    {
      image: "/images/solution/in6.jpg",
      title: "Business Start-ups Tech Advisory",
      des: `
      We provide technical advisory services to start-ups:
      `,
      listTitle: "Our Approach:",
      list: [
        "Technical Due Diligence – Conduct technical due diligence",
        "Technology Roadmap Development – Develop a tailored technology roadmap",
        "Product Development – Provide guidance on product development",
        "Fundraising Support – Provide support for fundraising efforts",
        "Ongoing maintenance and updates",
      ],
    },
  ],
};