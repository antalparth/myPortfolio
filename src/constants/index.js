import {bijak, lr, truebalance } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
   
    {
        imageUrl: mongodb,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: redux,
        name: "SpringBoot",
        type: "backend",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "Bijak",
        icon: bijak,
        iconBg: "#FFFFFF",
        date: "May 2022 - August 2023",
        points: [
            "Conducted API load testing using Apache JMeter, identifying performance bottlenecks and improving system efficiency.",
            "Collaborated with backend engineers to debug and enhance RESTful APIs, ensuring optimized response times.",
            "Worked with Spring Boot microservices to validate API responses and optimize request handling."
        ],
    },
    {
        title: "Software Engineer",
        company_name: "TrueBalance",
        icon: truebalance,
        iconBg: "#fbc3bc",
        date: "March 2021 - May 2022",
        points: [
            "Designed and implemented Java-based API testing frameworks, increasing test coverage by 50%",
            "Assisted in backend development by analyzing API response times and debugging REST endpoints.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Monitored API performance using New Relic & Android Studio, identifying inefficiencies and working with developers to fix them.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "LimeRoad",
        icon: lr,
        iconBg: "#b7e4c7",
        date: "Oct 2019 - March 2021",
        points: [
            "Developed and maintained Java-based API validation scripts, improving test accuracy and coverage by 50%.",
            "Developed Java-based API automation frameworks with JUnit & RestAssured, reducing manual testing by 40%.",
            "Automated backend deployments using Jenkins, reducing manual interventions and deployment failures.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/antalparth',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/parth-antal-923b73108/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Comparing different LP formulations for the Steiner Tree Problem',
        description: 'The main idea of this dissertation is to employ the flow-based Bidirected Cut Relaxation (BCR) to find the fractional cost of a graph and examine the integrality gap.',
        link: 'https://github.com/antalparth/Dissertation_SteinerTree',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Development of Language Models(LMs)',
        description: 'The application’s architecture illustrates a classic example of Java’s object-oriented principles in action.',
        link: 'https://github.com/antalparth/DevelopmentOfLanguageModels-LMs-',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Making objects and scenes look less pristine in Computer Graphics',
        description: 'This research is the field between 2D texture synthesis to 3D geometry generation,I endeavoured to understand different techniques and implement one of the techniques to increase the realism of rendered scenes by making the scenes “less pristine”',
        link: 'https://github.com/antalparth/3DComputerGraphics',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Facebook Security Project using SpringBoot',
        description: 'Developed a end to end backend logic for Facebook security using SpringBoot.',
        link: 'https://github.com/antalparth/Facebook_SecurityProject',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'The Intelligent Web',
        description: 'A plant exploration platform where users can add, filter, and view plant sightings based on location and characteristics. Users can contribute details, suggest names, and engage in discussions, with offline support for seamless data syncing.',
        link: 'https://github.com/Intelligent-Web-PROJECT/Team-Project',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'eWaste Hub',
        description: 'This project addresses the prevalent issue of electronic waste (eWaste) accumulation. To implement this, To implement this, a web-based hub waste was developed.',
        link: 'https://github.com/antalparth/eWaste-Management/tree/main/project-main',
    }
];