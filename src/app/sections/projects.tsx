import { ProjectCard } from "../local ui/project-card";

export function Projects() {
  return (
    <>
      <section id="projects" className="mt-[60px] w-[90%] justify-center items-center">
        <div className="font-subtitle font-bold text-[40px] md:text-[50px] text-center mb-[20px]">PROJECTS</div>
        <ProjectCard cards={cards}/>
      </section>
    </>
    
  )

}

const cards = [
  {title: "Planescaper",
    src: "/img/projects/planescaper/planescaper-cover.png",
    role: "UI/UX Designer, Fullstack Developer",
    content: [
      {
        title: "Planescaper",
        project: "Mobile Programming Final Project",
        description: "An android-based application to help user plan their trips, search for tour tickets, book trips, and explore destinations effortlessly",
        timeline: "December 2024",
        role: "UI/UX Designer, Fullstack Developer",
        tech: "Figma, Android Studio, Firebase",
        link: "https://github.com/samanthacel/planescaper"
      },
      {
        problem: "Users often need to visit multiple websites or apps to book flights, tour guides, hotels, and activities separately. This fragmented experience leads to confusion, cluterred booking tickets, and wasted time.",
        solution: "Planescaper provide all-in-one experience to plan your trip seamlessly in one simple, interactive interface. From booking flights, hotels, tour guides, to all the destination ticketing on the spot.",
        features: "The key features covered in this app are curated tour packages by destination type, search and filter tours with keyword, complete package information, and smart price calculator.",
        development: "Constructing this application utilize Android Studio and Java and its power to create an interactive mobile application. Exploring the implementation of RecyclerView, Firebase Authentication, and Firebase Realtime Database."
      },
    ]
  },
  {title: "Hearmony",
    src: "/img/projects/hearmony/hearmony-cover.png",
    role: "Fullstack Developer",
    content: [
      {
        title: "Hearmony",
        project: "Undergraduate Pre Thesis",
        description: "An Android-based  mobile application designed to make music learning accessible to blind users with intuitive sound feedback and simplified interface",
        timeline: "May 2025",
        role: "Fullstack Developer",
        tech: "Android Studio, Firebase",
        link: "https://github.com/samanthacel/hearmony.git"
      },
      {
        problem: "For many people, music is a language of emotion and expression. But for individuals with visual impairments, learning the basics of music can be an overwhelming challenge. Most music education tools rely heavily on visual content, leaving blind users behind — even though many of them possess remarkable auditory skills.",
        solution: "Hearmony provides a mobile application solution designed specifically to blind users. Combining intuitive sound feedback and specific hand gestures, with a simplified user interface, allowing users to easily navigate and interact with the app seamlessly.",
        features: "Core features in this application include Braille Music Notation reading & writing through braille pattern hand gestures, simple piano simulator, and instant sound feedback to help navigate the application.",
        development: "This app integrates Android's TalkBack for screen reading and customizes gesture behaviors to support effortless navigation, like drawing braille pattern to create a note."
      },
    ]
  },
  {title: "C-Link",
    src: "/img/projects/c-link/clink-cover.png",
    role: "UI/UX Designer, Fullstack Developer",
    content: [
      {
        title: "C-Link",
        project: "iOS Foundation Cohort 19",
        description: "The ultimate hub for music lovers or musician to connect and collaborate on inspiring projects and showcase their creations in one harmonious platform",
        timeline: "July 2023",
        role: "UI/UX Designer, Fullstack Developer",
        tech: "Figma, XCode, Swift, SwiftUI",
        link: "https://github.com/samanthacel/c-link.git",
      },
      {
        problem: "In the world of classical music, inspiration thrives on connection — but too often, musicians find themselves isolated, without a platform to share their work, discover collaborators, or co-create meaningful projects.",
        solution: "C-Link creates a way for musicians, composers, and enthusiasts to connect in one harmonious platform. From sharing your latest music projects, explore other's music portfolios, or even co-create a project using GarageBand, C-Link makes it easy to collaborate, communicate, and create all together.",
        features: "This application covers your needs to expand your connection with other musicians. You can showcase your music portfolios and see other's, getting insight and updates from music industries. You can also collaborate a project together via GarageBand in real time, stored in your iCloud.",
        development: "Built with XCode, using SwiftUI and Swift, C-Link offers a smooth and elegant user experience. Designed in Figma for optimal usability, the app integrates Apple’s GarageBand for real-time collaboration and uses cloud storage to keep your creations safe and accessible anytime, anywhere."
      },
    ]
  },
  {title: "Inventory Management System",
    src: "/img/projects/ims/ims-cover.png",
    role: "Fullstack Developer",
    content: [
      {
        title: "Inventory Management System",
        project: "",
        description: "A web-based application to help automize the export mock-up forms process, reducing human error and cutting down on approval waiting times.",
        timeline: "March 2024",
        role: "Fullstack Developer",
        tech: "React.js, CSS, Firebase",
        link: "https://mayora-e3140.web.app",
      },
      {
        problem: "In many organizations, managing mock-up forms still requires manual handwritten inputs, cross-checking complex product codes, and long waits for multi-level approvals. This leads to frequent human errors, especially with SKUs and expiration dates, and slows down operations.",
        solution: "This application simplifies the workflow by allowing users to generate complete product details with just a SKU input, and auto-validates date entries to minimize mistakes. No more messy forms or delayed approvals — just smooth, fast, and reliable processing.",
        features: "This application allows role-based access to approve each mock-up form that has been submitted, input the mock-up form with automatic product info based on SKU, multi-level approval, and smart date entry.",
        development: "Developed using React.js for a responsive front-end and styled with CSS, this app delivers a clean, modern, and simple user experience. Data is stored and synced in real time using Firebase Firestore Database, ensuring your inventory and approval process stays up-to-date and accessible across users."
      },
    ]
  },
  {title: "DOOIT",
    src: "/img/projects/dooit/dooit-cover.png",
    role: "UI/UX Designer, Fullstack Developer",
    content: [
      {
        title: "DOOIT",
        project: "Software Engineering Final Project",
        description: "A web-based platform built to empower students and young adults with practical financial knowledge through structured learning modules created by real financial experts",
        timeline: "April-May 2024",
        role: "UI/UX Designer, Fullstack Developer",
        tech: "Figma, React.js, CSS, Firebase",
        link: "https://github.com/RaevenV/Final-Project-SE.git",
      },
      {
        problem: "Many students lack access to practical, reliable financial education. They don’t know where to begin, whom to trust, or how to take their first step in managing and growing their money.",
        solution: "DOOIT presents a structured yet simple module created by financial expert to help students start their financial management journey without being overwhelmed with difficult terms in finance.",
        features: "This web-app provides an all-in-one learning environment with modules created by experts with simple and student-friendly language, a digital library of recommended books and financial materials, and a discussion forums.",
        development: "The overall application is built using React.js for a simple, responsive front-end and styled with CSS for a clean and engaging interface. It also utilizes Firebase for real-time data storage using Firebase Firestore Database, and Firebase Authentication for secure logins and personalized user experiences."
      },
    ]
  },
  {title: "Dialert",
    src: "/img/projects/dialert/dialert-cover.png",
    role: "UI/UX Designer",
    content: [
      {
        title: "Dialert",
        project: "Artificial Intelligence Final Project",
        description: "Amobile app designed to help users pre-diagnose diabetes by analyzing daily habits and recent health records using the power of machine learning",
        timeline: "January 2024",
        role: "UI/UX Designer",
        tech: "Figma, Python",
        link: "https://www.figma.com/proto/FTMI91VztmJs7rqIHRgICH/DIALERT?page-id=0%3A1&node-id=44-534&node-type=canvas&viewport=530%2C514%2C0.44&t=FEBDHyJxqbddlr1Y-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=14%3A2",
        report: "https://docs.google.com/document/d/1f6frd03Gcu0JbN4xPz5nPIh-vT6LZ3DG/edit?usp=sharing&ouid=105364606665168273882&rtpof=true&sd=true",
      },
      {
        problem: "People with a genetic risk for diabetes often lack tools to predict or detect early signs of the disease. Diagnosis typically happens after symptoms appear — when proactive lifestyle changes could have made a major difference.",
        solution: "Dialert uses advanced XGBoost machine learning algorithms to evaluate users' lifestyle data and health history, providing early warnings and actionable advice. It’s like having a smart health advisor in your pocket.",
        features: "The application have a habit and health record form as input for the prediction model, an AI-Based Pre-Diagnosis powered by XGBoost to provide personalized diabetes risk score, and diet goals and recommendations to help manage your sugar intake.",
        development: "The application was prototyped and design using Figma, to create an intuitive, user-friendly mobile interface design. For model training and health prediction, this app uses Python and XGBoost, unlocking its maximum potential to produce accurate predictions."
      },
    ]
  },
  {title: "COMET",
    src: "/img/projects/comet/comet-cover.png",
    role: "UI/UX Designer",
    content: [
      {
        title: "COMET",
        project: "Intuitiva UI/UX Competition",
        description: "A dynamic mobile app designed to make learning math fun and exciting for kids! Packed with a space-themed, game-based experience, this app inspires young learners to unlock their true potential and reach for the stars",
        timeline: "April 2024",
        role: "UI/UX Designer",
        tech: "Figma",
        link: "https://www.figma.com/proto/TjeO3oOZf49znxmaMHVcmS/Comet?page-id=0%3A1&node-id=111-265&node-type=canvas&viewport=1188%2C-49%2C0.48&t=eGPLDfUKSaaMR8TG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=111%3A265",
        report: "https://docs.google.com/document/d/12NXa5tAkZD-QC3nheN9aFOhfpedrWO-_7aFuO3GXrfA/edit?usp=sharing",
      },
      {
        problem: "Many children find math boring or difficult — yet they love playing games. Traditional learning methods often fail to capture their attention or adapt to their personal pace and strengths.",
        solution: "COMET turns math into a game. Using a space exploration theme, kids complete math challenges to travel across planets and unlock cosmic levels. The app uses a machine learning algorithm to personalize each child’s journey, detecting their weaknesses and turning them into exciting, manageable quests.",
        features: "Starting the journey with a smart placement test to asses the current level in various math topics, continue on a game-based learning journey with adaptive difficulty powered by ML, community & leaderboard, and create your very own profile.",
        development: "Designing the gamified application requires an engaging, child-friendly, and interactive front-end interface which can be achieved using Figma."
      },
    ]
  },
];
