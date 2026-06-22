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
    bio: 'With over 5 years of experience delivering bespoke AI/ML solutions across sectors including energy, climate, aviation, healthcare, and telecom. Graduated summa cum laude from Amherst College in Mathematics, dual MBA/MS from MIT Sloan and MIT School of Engineering. Previously economic consultant at The Brattle Group specializing in decarbonization modeling and investment strategy. Built ML solutions at Verizon for climate mitigation and churn forecasting.',
    photoUrl: 'https://placehold.co/400x400?text=Shreeansh+Agrawal',
    portfolioLink: 'https://www.linkedin.com/in/shreeansh-agrawal-67b398109/'
  },
  {
    name: 'Bibek Raj Kandel',
    role: 'Partner — Energy Policy Advisor',
    bio: 'Strategic advisor and energy policy expert with over 15 years of experience in energy transition, utilities reform, infrastructure development, and climate resilience in frontier and emerging markets. Advises governments and multilateral institutions including UNDP, World Bank, IRENA, and Enabel. Work spans national utilities, regulatory reform, and infrastructure across Nepal, East Africa, and Asia. Asia Global Fellow at the University of Hong Kong. Graduate of Harvard Kennedy School and University of Twente.',
    photoUrl: 'https://placehold.co/400x400?text=Bibek+Raj+Kandel',
    portfolioLink: ''
  },
  {
    name: 'Hem Chaudhary',
    role: 'Partner — AI & Engineering',
    bio: 'Holds a double degree in Mathematics and Chemical-Biological Engineering from MIT with five years of experience applying mechanistic models, AI algorithms, and software solutions across manufacturing, energy, agriculture, and climate. 2x founder — built Nepal\'s first multispectral drone with ML algorithms to diagnose citrus greening, and a RAG system for large-knowledge-base institutions. Recently advised Nepal\'s Minister of Industry and Minister of Energy on AI readiness and database efficiency.',
    photoUrl: 'https://placehold.co/400x400?text=Hem+Chaudhary',
    portfolioLink: ''
  },
  {
    name: 'Prijesh Sharma',
    role: 'Data Scientist & AI Engineer',
    bio: 'Data scientist, AI engineer, and software developer with over three years of experience building data-driven solutions and intelligent systems. Skilled in machine learning, AI, data analytics, and full-stack development. Holds an MSc in Information Technology and Applied Security and a BSc in Computing from Islington College under London Metropolitan University. Built stock market prediction models, recommendation systems, school management platforms, and data analytics solutions.',
    photoUrl: 'https://placehold.co/400x400?text=Prijesh+Sharma',
    portfolioLink: ''
  }
];

const serviceData = [
  {
    title: 'Physical-AI',
    link: '/physicalai'
  },
  {
    title: 'General Consulting',
    link: '/generalconsulting'
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
    // Connect to MongoDB using the connectDB function
    await connectDB();
    console.log('Connected to MongoDB...');

    // Clear existing data
    await Team.deleteMany();
    await Services.deleteMany();
    await PrivateWorks.deleteMany();
    await DevelopmentWorks.deleteMany();
    console.log('Cleared existing data...');

    // Insert new data
    await Team.insertMany(teamData);
    await Services.insertMany(serviceData);
    await PrivateWorks.insertMany(privateSectorData);
    await DevelopmentWorks.insertMany(developmentWorkData);
    console.log('Seeded all data successfully!');

    // Disconnect
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