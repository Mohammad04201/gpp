import React, { useState } from 'react';

export const useCompanyData = () => {
  const [companyData, setCompanyData] = useState({
    companyName: 'Mawhiba AI Technologies',
    title: 'Leading technology company in smart recruitment',
    description: 'We connect the best tech talents in the Arab world with leading companies through artificial intelligence and real skill analysis.',
    email: 'info@mawhiba.ai',
    phone: '+966 50 123 4567',
    location: 'Riyadh, Saudi Arabia',
    website: 'https://mawhiba.ai',
    established: '2020',
    employees: '150',
    rating: 4.8,
    social: {
      github: 'https://github.com/mawhiba',
      linkedin: 'https://linkedin.com/company/mawhiba'
    },
    skills: [
      {
        name: 'Platform Development',
        description: 'Integrated smart recruitment platforms with data analytics and artificial intelligence',
        level: 'Advanced',
        experience: '5 years',
        dots: 5
      },
      {
        name: 'Skill Analysis',
        description: 'Deep analysis of technical skills through GitHub and previous projects',
        level: 'Advanced',
        experience: '4 years',
        dots: 5
      },
      {
        name: 'Artificial Intelligence',
        description: 'Smart matching algorithms between talents and jobs',
        level: 'Advanced',
        experience: '3 years',
        dots: 4
      }
    ],
    projects: [
      {
        name: 'Mawhiba AI Platform',
        description: 'Smart recruitment platform connecting developers with companies using artificial intelligence',
        level: 'Completed',
        experience: '2024',
        dots: 5,
        tech: ['React', 'Node.js', 'AI/ML', 'PostgreSQL']
      },
      {
        name: 'Skill Analysis System',
        description: 'Advanced system for analyzing developer skills from GitHub and open source projects',
        level: 'Completed',
        experience: '2023',
        dots: 5,
        tech: ['Python', 'TensorFlow', 'API', 'Data Analysis']
      },
      {
        name: 'Talent App',
        description: 'Mobile app for developers to manage their profile and projects',
        level: 'In Development',
        experience: '2024',
        dots: 3,
        tech: ['React Native', 'Firebase', 'Redux', 'UI/UX']
      }
    ]
  });

  return { companyData, setCompanyData };
};