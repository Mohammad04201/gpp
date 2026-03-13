// Mock data for developers
export const developersData = [
  {
    id: 1,
    name: 'Ahmed Mohammed',
    title: 'Full Stack Developer',
    location: 'Riyadh, Saudi Arabia',
    bio: 'Full stack developer with 5 years of experience in building modern web applications using React and Node.js. Passionate about solving complex problems and developing innovative solutions.',
    experience: 5,
    available: true,
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'Node.js', level: 'Advanced' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'AWS', level: 'Beginner' }
    ],
    projects: [
      { id: 1, name: 'Project Management App', tech: ['React', 'Node.js'] },
      { id: 2, name: 'E-commerce Platform', tech: ['Vue.js', 'Laravel'] },
      { id: 3, name: 'Content Management System', tech: ['Next.js', 'PostgreSQL'] }
    ],
    stats: {
      views: 1250,
      likes: 89,
      connections: 156
    }
  },
  {
    id: 2,
    name: 'Fatima Al Ali',
    title: 'Frontend Developer',
    location: 'Jeddah, Saudi Arabia',
    bio: 'Specialized in modern frontend development and user experience. Expert in transforming designs into interactive and attractive interfaces using latest technologies.',
    experience: 3,
    available: true,
    skills: [
      { name: 'React', level: 'Expert' },
      { name: 'Vue.js', level: 'Advanced' },
      { name: 'CSS/Sass', level: 'Expert' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'Figma', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Advanced' }
    ],
    projects: [
      { id: 1, name: 'Smart Shopping App', tech: ['React', 'Tailwind CSS'] },
      { id: 2, name: 'E-learning Platform', tech: ['Vue.js', 'Bootstrap'] }
    ],
    stats: {
      views: 980,
      likes: 67,
      connections: 134
    }
  },
  {
    id: 3,
    name: 'Mohammed Abdullah',
    title: 'Backend Developer',
    location: 'Dammam, Saudi Arabia',
    bio: 'Software engineer specialized in developing scalable backend systems. Expert in building REST APIs and handling large databases.',
    experience: 7,
    available: false,
    skills: [
      { name: 'Python', level: 'Expert' },
      { name: 'Django', level: 'Expert' },
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'Redis', level: 'Advanced' },
      { name: 'Kubernetes', level: 'Intermediate' },
      { name: 'GraphQL', level: 'Advanced' }
    ],
    projects: [
      { id: 1, name: 'Secure Payment System', tech: ['Python', 'Django'] },
      { id: 2, name: 'Analytics Platform', tech: ['Node.js', 'MongoDB'] },
      { id: 3, name: 'Authentication Service', tech: ['Go', 'PostgreSQL'] }
    ],
    stats: {
      views: 1450,
      likes: 112,
      connections: 189
    }
  },
  {
    id: 4,
    name: 'Nora Al Said',
    title: 'Mobile Developer',
    location: 'Riyadh, Saudi Arabia',
    bio: 'Professional mobile app developer with experience in building native iOS and Android apps and hybrid applications. Passionate about user experience and performance.',
    experience: 4,
    available: true,
    skills: [
      { name: 'React Native', level: 'Advanced' },
      { name: 'Flutter', level: 'Intermediate' },
      { name: 'Swift', level: 'Advanced' },
      { name: 'Kotlin', level: 'Intermediate' },
      { name: 'Firebase', level: 'Advanced' },
      { name: 'GraphQL', level: 'Beginner' }
    ],
    projects: [
      { id: 1, name: 'Fitness App', tech: ['React Native'] },
      { id: 2, name: 'Food Delivery App', tech: ['Flutter'] }
    ],
    stats: {
      views: 780,
      likes: 45,
      connections: 98
    }
  },
  {
    id: 5,
    name: 'Khaled Al Harbi',
    title: 'DevOps Engineer',
    location: 'Jeddah, Saudi Arabia',
    bio: 'DevOps engineer specialized in process automation and cloud infrastructure optimization. Expert in CI/CD, version control, and monitoring.',
    experience: 6,
    available: true,
    skills: [
      { name: 'Docker', level: 'Expert' },
      { name: 'Kubernetes', level: 'Expert' },
      { name: 'AWS', level: 'Advanced' },
      { name: 'Terraform', level: 'Advanced' },
      { name: 'Jenkins', level: 'Intermediate' },
      { name: 'Linux', level: 'Expert' }
    ],
    projects: [
      { id: 1, name: 'Cloud Infrastructure', tech: ['AWS', 'Kubernetes'] },
      { id: 2, name: 'CI/CD System', tech: ['Jenkins', 'Docker'] }
    ],
    stats: {
      views: 1100,
      likes: 78,
      connections: 145
    }
  },
  {
    id: 6,
    name: 'Mariam Ahmed',
    title: 'UI/UX Designer',
    location: 'Riyadh, Saudi Arabia',
    bio: 'Creative UI/UX designer with expertise in designing beautiful and user-friendly interfaces with focus on user needs.',
    experience: 4,
    available: true,
    skills: [
      { name: 'Figma', level: 'Expert' },
      { name: 'Adobe XD', level: 'Advanced' },
      { name: 'Sketch', level: 'Intermediate' },
      { name: 'Prototyping', level: 'Expert' },
      { name: 'User Research', level: 'Advanced' },
      { name: 'HTML/CSS', level: 'Intermediate' }
    ],
    projects: [
      { id: 1, name: 'Bank App Design', tech: ['Figma', 'Adobe XD'] },
      { id: 2, name: 'Learning Platform Interface', tech: ['Sketch', 'Figma'] }
    ],
    stats: {
      views: 650,
      likes: 89,
      connections: 112
    }
  }
];

// Function to get a specific developer
export const getDeveloperById = (id) => {
  return developersData.find(dev => dev.id === parseInt(id));
};

// Function to get available developers for work
export const getAvailableDevelopers = () => {
  return developersData.filter(dev => dev.available);
};

// Function to search developers
export const searchDevelopers = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return developersData.filter(dev => 
    dev.name.toLowerCase().includes(lowercaseQuery) ||
    dev.title.toLowerCase().includes(lowercaseQuery) ||
    dev.bio.toLowerCase().includes(lowercaseQuery) ||
    dev.skills.some(skill => skill.name.toLowerCase().includes(lowercaseQuery)) ||
    dev.location.toLowerCase().includes(lowercaseQuery)
  );
};

// Function to filter by skills
export const filterDevelopersBySkills = (skills) => {
  return developersData.filter(dev =>
    skills.some(skill => dev.skills.some(devSkill => devSkill.name.toLowerCase() === skill.toLowerCase()))
  );
};

// Function to filter by location
export const filterDevelopersByLocation = (location) => {
  return developersData.filter(dev =>
    dev.location.toLowerCase().includes(location.toLowerCase())
  );
};

// Function to filter by experience level
export const filterDevelopersByExperience = (minExperience) => {
  return developersData.filter(dev => dev.experience >= minExperience);
};

// Function for most viewed developers
export const getTrendingDevelopers = () => {
  return developersData
    .sort((a, b) => (b.stats.views + b.stats.likes) - (a.stats.views + a.stats.likes))
    .slice(0, 3);
};
