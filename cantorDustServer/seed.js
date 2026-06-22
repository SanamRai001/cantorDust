import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Team from './models/Team.js';
import Services from './models/Services.js';
import PrivateWorks from './models/PrivateWorks.js';
import DevelopmentWorks from './models/DevelopmentWorks.js';

dotenv.config();

const teamData = [
  {
    name: 'Shreeansh Agrawal',
    role: 'Founder',
    bio: 'With over five years of experience delivering bespoke AI/ML solutions across sectors, including energy, climate, aviation, healthcare, and telecom, Shreeansh brings deep technical insight combined with strategic vision. He graduated summa cum laude from Amherst College with a degree in Mathematics and obtained a dual MBA/MS at MIT Sloan and MIT\'s School of Engineering. He has previously served as an economic consultant at The Brattle Group, specializing in decarbonization modeling and investment strategy. He also built ML solutions for climate mitigation and churn forecasting at Verizon. Passionate about solving real-world problems through AI, he has worked with stakeholders around the globe, deploying tailored machine learning systems that drive impact. His approach blends rigorous analytical thinking with cross-industry domain expertise — delivering outcomes that are both innovative and grounded in practical value.',
    photoUrl: 'https://placehold.co/400x400?text=Shreeansh+Agrawal',
    portfolioLink: 'https://www.linkedin.com/in/shreeansh-agrawal-67b398109/'
  },
  {
    name: 'Prijesh Sharma',
    role: 'Partner — COO',
    bio: 'A Data Scientist, AI Engineer, and Software Developer with over three years of experience in building data-driven solutions and intelligent systems. Skilled in machine learning, artificial intelligence, data analytics, and full-stack development. Holds an MSc in Information Technology and Applied Security and a BSc (Hons) in Computing from Islington College under London Metropolitan University. Experienced in developing end-to-end solutions, including stock market prediction models, recommendation systems, school management platforms, and data analytics applications. Recognized for strong analytical thinking, problem-solving skills, and the ability to design scalable and impactful technology solutions.',
    photoUrl: 'https://placehold.co/400x400?text=Prijesh+Sharma',
    portfolioLink: 'https://www.linkedin.com/in/prijesh-sharma/'
  },
  {
    name: 'Khem Raj Khadka',
    role: 'Project Manager',
    bio: 'A Project Manager with a Bachelor of Science in Computer Science from Global College, affiliated with London Metropolitan University, he specializes in steering technical teams toward high-impact delivery. He bridges the gap between complex software architecture and business objectives, utilizing Agile methodologies to streamline product roadmaps and optimize team performance. Passionate about operational excellence, he is dedicated to transforming strategic visions into scalable, real-world solutions.',
    photoUrl: 'https://placehold.co/400x400?text=Khem+Raj+Khadka',
    portfolioLink: 'https://www.linkedin.com/in/khem-raj-khadka/'
  },
  {
    name: 'Diwas Kunwar',
    role: 'Senior AI Engineer',
    bio: 'He is an AI/ML Engineer specializing in Generative AI and Large Language Models (LLMs), focused on building scalable, production-ready intelligent systems. His work includes model development, fine-tuning, and optimization for real-world use cases, along with the design of Agentic RAG pipelines and multi-agent systems. His experience spans building agent architectures using frameworks such as LangChain and LangGraph for structured orchestration, enabling persistent memory, tool use, and long-running workflows designed for reliable reasoning in real-world environments. With a strong foundation in backend engineering and system design, he develops and deploys end-to-end AI systems — covering data flow, model serving, and scaling in production using PyTorch, Hugging Face, FastAPI, and modern cloud infrastructure.',
    photoUrl: 'https://placehold.co/400x400?text=Diwas+Kunwar',
    portfolioLink: 'https://www.linkedin.com/in/diwas-kunwar/'
  },
  {
    name: 'Sagar Budal',
    role: 'Junior Analyst',
    bio: 'An ACCA student at the Certified College of Accountancy with a strong foundation in finance and data annotation, he holds a Diploma in Computer Applications and has experience teaching computer skills, video editing, and research. Passionate about leveraging technology and finance to drive impactful solutions and continuously expand his expertise.',
    photoUrl: 'https://placehold.co/400x400?text=Sagar+Budal',
    portfolioLink: 'https://www.linkedin.com/in/sagar-budal/'
  },
  {
    name: 'Roshan Khatiwada',
    role: 'Junior Analyst',
    bio: 'A Computer Engineering student interested in Data Science and Artificial Intelligence, with experience in web development, teaching, and network operations. Skilled in React, PHP, and front-end design, with a strong focus on building user-friendly applications. Detail-oriented, adaptable, and eager to grow and contribute to modern technologies.',
    photoUrl: 'https://placehold.co/400x400?text=Roshan+Khatiwada',
    portfolioLink: 'https://www.linkedin.com/in/roshan-khatiwada/'
  },
  {
    name: 'Bishal Saud',
    role: 'Junior Analyst',
    bio: 'A Computer Engineering student with experience in web development, data annotation, and project development. Skilled in React.js, Tailwind CSS, HTML, and CSS. Passionate about learning new technologies, solving problems, and creating innovative solutions in the tech industry.',
    photoUrl: 'https://placehold.co/400x400?text=Bishal+Saud',
    portfolioLink: 'https://www.linkedin.com/in/bishal-saud/'
  }
];

const serviceData = [
  {
    title: 'General Consulting',
    description: 'Analytical solutions and insights for energy, healthcare, manufacturing, and complex operational challenges.',
    link: '/generalconsulting'
  },
  {
    title: 'Physical AI',
    description: 'Curated datasets for Physical AI. Reliable video and sensor datasets for robotics, embodied AI, and real-world environment training.',
    link: '/physicalai'
  }
];

const privateSectorData = [
  { imageUrl: 'https://placehold.co/200x80?text=Private+Logo+1', link: '' },
  { imageUrl: 'https://placehold.co/200x80?text=Private+Logo+2', link: '' },
  { imageUrl: 'https://placehold.co/200x80?text=Private+Logo+3', link: '' },
  { imageUrl: 'https://placehold.co/200x80?text=Private+Logo+4', link: '' },
  { imageUrl: 'https://placehold.co/200x80?text=Private+Logo+5', link: '' },
  { imageUrl: 'https://placehold.co/200x80?text=Private+Logo+6', link: '' },
  { imageUrl: 'https://placehold.co/200x80?text=Private+Logo+7', link: '' },
  { imageUrl: 'https://placehold.co/200x80?text=Private+Logo+8', link: '' },
];

const developmentWorkData = [
  { imageUrl: 'https://placehold.co/200x80?text=Dev+Logo+1', link: '' },
  { imageUrl: 'https://placehold.co/200x80?text=Dev+Logo+2', link: '' },
  { imageUrl: 'https://placehold.co/200x80?text=Dev+Logo+3', link: '' },
  { imageUrl: 'https://placehold.co/200x80?text=Dev+Logo+4', link: '' },
];

async function seed() {
  try {
    await connectDB();
    console.log('Connected to MongoDB...');

    await Team.deleteMany();
    await Services.deleteMany();
    await PrivateWorks.deleteMany();
    await DevelopmentWorks.deleteMany();
    console.log('Cleared existing data...');

    await Team.insertMany(teamData);
    await Services.insertMany(serviceData);
    await PrivateWorks.insertMany(privateSectorData);
    await DevelopmentWorks.insertMany(developmentWorkData);
    console.log('Seeded all data successfully!');

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
    process.exit(0);
  } catch (error) {
    console.error('Seed failed:', error);
    await mongoose.disconnect();
    process.exit(1);
  }
}

seed();