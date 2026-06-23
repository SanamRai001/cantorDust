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
    name: 'Khem Raj Khadka',
    role: 'Project Manager',
    bio: 'A Project Manager with a Bachelor of Science in Computer Science from Global College, London University, he specializes in steering technical teams toward high-impact delivery. He bridges the gap between complex software architecture and business objectives, utilizing Agile methodologies to streamline product roadmaps and optimize team performance. Passionate about operational excellence, he is dedicated to transforming strategic visions into scalable, real-world solutions.',
    photoUrl: 'https://placehold.co/400x400?text=Khem+Raj+Khadka',
    portfolioLink: 'https://www.linkedin.com/in/khem-raj-khadka/',
    order: 1
  },
  {
    name: 'Diwas Kunwar',
    role: 'Senior AI Engineer',
    bio: 'A full-stack developer passionate about building production-ready AI systems and scalable applications. Experienced in Generative AI, Agentic RAG pipelines, FastAPI, PyTorch, LangChain, and modern backend infrastructure. Skilled in developing intelligent solutions, deploying machine learning systems, and creating impactful technology products with a strong focus on innovation, performance, and real-world problem-solving.',
    photoUrl: 'https://placehold.co/400x400?text=Diwas+Kunwar',
    portfolioLink: 'https://www.linkedin.com/in/diwas-kunwar/',
    order: 2
  },
  {
    name: 'Sagar Budal',
    role: 'Junior Analyst',
    bio: 'An ACCA student at the Certified College of Accountancy with a strong foundation in finance, data annotation, holds a Diploma in Computer Applications and has experience in computer teaching, video editing, and research. Passionate about leveraging technology and finance to drive impactful solutions and continuously expand my expertise.',
    photoUrl: 'https://placehold.co/400x400?text=Sagar+Budal',
    portfolioLink: 'https://www.linkedin.com/in/sagar-budal/',
    order: 3
  },
  {
    name: 'Roshan Khatiwada',
    role: 'Junior Analyst',
    bio: 'A Computer Engineering student interested in Data Science and Artificial Intelligence, with experience in web development, teaching, and network operations. Skilled in React, PHP, and frontend design, with a strong focus on building user-friendly applications. Detail-oriented, adaptable, and eager to grow and contribute in modern technologies.',
    photoUrl: 'https://placehold.co/400x400?text=Roshan+Khatiwada',
    portfolioLink: 'https://www.linkedin.com/in/roshan-khatiwada/',
    order: 4
  },
  {
    name: 'Bishal Saud',
    role: 'Junior Analyst',
    bio: 'A Computer Engineering student with experience in web development, data annotation, and project development. Skilled in React.js, Tailwind CSS, HTML, and CSS. Passionate about learning new technologies, solving problems, and creating innovative solutions in the tech industry.',
    photoUrl: 'https://placehold.co/400x400?text=Bishal+Saud',
    portfolioLink: 'https://www.linkedin.com/in/bishal-saud/',
    order: 5
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