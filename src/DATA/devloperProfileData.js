import React, { useState } from 'react';

export const useDeveloperProfile = () => {
  const [profile, setProfile] = useState({
    fullName: 'Ahmed Mohammed',
    title: 'Frontend Developer',
    bio: 'Specialized developer in React and JavaScript with 3 years of experience in building modern and responsive web applications',
    email: 'ahmed@example.com',
    phone: '+966 50 123 4567',
    location: 'Riyadh, Saudi Arabia',
    github: 'github.com/ahmeddev',
    linkedin: 'linkedin.com/in/ahmeddev'
  });

  const [skills, setSkills] = useState([
    { 
      id: 1, 
      name: 'React', 
      level: 'Advanced', 
      description: 'Deep expertise in React Hooks, Context API, and state management',
      years: 3
    },
    { 
      id: 2, 
      name: 'JavaScript', 
      level: 'Advanced', 
      description: 'ES6+, asynchronous programming, and design patterns',
      years: 4
    },
    { 
      id: 3, 
      name: 'CSS/Tailwind', 
      level: 'Advanced', 
      description: 'Responsive design, animations, and user experience',
      years: 3
    },
    { 
      id: 4, 
      name: 'Node.js', 
      level: 'Intermediate', 
      description: 'REST APIs, Express, and working with databases',
      years: 2
    }
  ]);

  return { profile, setProfile, skills, setSkills };
};