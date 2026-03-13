// Mock data for company profile
export const companyData = {
  name: "Tech Solutions Inc.",
  industry: "Software Development",
  founded: "2015",
  employees: 250,
  revenue: "$5.2M",
  description: "Leading technology company specializing in innovative software solutions and digital transformation services.",
  location: "San Francisco, CA",
  website: "www.techsolutions.com",
  departments: [
    {
      name: "Engineering",
      description: "Responsible for product development, software architecture, and technical innovation. Our engineering team builds scalable solutions using cutting-edge technologies.",
      employees: 85,
      projects: 12
    },
    {
      name: "Design",
      description: "Creative team focused on user experience, interface design, and brand identity. We create beautiful and intuitive digital experiences.",
      employees: 25,
      projects: 8
    },
    {
      name: "Marketing",
      description: "Driving brand awareness, customer acquisition, and market growth through strategic marketing campaigns and digital initiatives.",
      employees: 30,
      projects: 6
    },
    {
      name: "Sales",
      description: "Building relationships with clients and driving revenue growth through strategic partnerships and customer-focused solutions.",
      employees: 45,
      projects: 4
    },
    {
      name: "Human Resources",
      description: "Managing talent acquisition, employee development, and organizational culture to foster a productive work environment.",
      employees: 20,
      projects: 3
    },
    {
      name: "Finance",
      description: "Overseeing financial planning, budgeting, and compliance to ensure sustainable business growth and financial stability.",
      employees: 15,
      projects: 2
    }
  ],
  quickStats: {
    totalProjects: 35,
    activeProjects: 12,
    completedProjects: 23,
    clientSatisfaction: "96%"
  },
  stats: {
    views: 15420,
    likes: 892,
    followers: 3247
  },
  projects: [
    {
      id: 1,
      name: "AI Recruitment Platform",
      status: "active"
    },
    {
      id: 2,
      name: "Mobile App Development",
      status: "active"
    },
    {
      id: 3,
      name: "Data Analytics Dashboard",
      status: "completed"
    }
  ]
};

export default companyData;