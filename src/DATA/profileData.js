import React, { useState } from 'react';

export const useCompanyData = () => {
  const [companyData, setCompanyData] = useState({
    companyName: 'Mawhiba AI Technologies',
    title: 'شركة تقنية رائدة في التوظيف الذكي',
    description: 'نقوم بتوصيل أفضل المواهب التقنية في العالم العربي بالشركات الرائدة من خلال الذكاء الاصطناعي وتحليل المهارات الحقيقية.',
    email: 'info@mawhiba.ai',
    phone: '+966 50 123 4567',
    location: 'الرياض، السعودية',
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
        name: 'تطوير المنصات',
        description: 'منصات توظيف ذكية متكاملة مع تحليل البيانات والذكاء الاصطناعي',
        level: 'متقدم',
        experience: '5 سنوات',
        dots: 5
      },
      {
        name: 'تحليل المهارات',
        description: 'تحليل عميق للمهارات التقنية من خلال GitHub والمشاريع السابقة',
        level: 'متقدم',
        experience: '4 سنوات',
        dots: 5
      },
      {
        name: 'الذكاء الاصطناعي',
        description: 'خوارزميات مطابقة ذكية بين المواهب والوظائف',
        level: 'متقدم',
        experience: '3 سنوات',
        dots: 4
      }
    ],
    projects: [
      {
        name: 'منصة Mawhiba AI',
        description: 'منصة توظيف ذكية تربط المطورين بالشركات باستخدام الذكاء الاصطناعي',
        level: 'مكتمل',
        experience: '2024',
        dots: 5,
        tech: ['React', 'Node.js', 'AI/ML', 'PostgreSQL']
      },
      {
        name: 'نظام تحليل المهارات',
        description: 'نظام متطور لتحليل مهارات المطورين من GitHub والمشاريع المفتوحة',
        level: 'مكتمل',
        experience: '2023',
        dots: 5,
        tech: ['Python', 'TensorFlow', 'API', 'Data Analysis']
      },
      {
        name: 'تطبيق المواهب',
        description: 'تطبيق موبايل للمطورين لإدارة ملفهم الشخصي والمشاريع',
        level: 'قيد التطوير',
        experience: '2024',
        dots: 3,
        tech: ['React Native', 'Firebase', 'Redux', 'UI/UX']
      }
    ]
  });

  return { companyData, setCompanyData };
};