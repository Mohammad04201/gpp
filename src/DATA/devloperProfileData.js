import React, { useState } from 'react';

export const useDeveloperProfile = () => {
  const [profile, setProfile] = useState({
    fullName: 'أحمد محمد',
    title: 'مطور واجهات أمامية',
    bio: 'مطور متخصص في React و JavaScript مع خبرة 3 سنوات في بناء تطبيقات ويب حديثة وسريعة الاستجابة',
    email: 'ahmed@example.com',
    phone: '+966 50 123 4567',
    location: 'الرياض، المملكة العربية السعودية',
    github: 'github.com/ahmeddev',
    linkedin: 'linkedin.com/in/ahmeddev'
  });

  const [skills, setSkills] = useState([
    { 
      id: 1, 
      name: 'React', 
      level: 'متقدم', 
      description: 'خبرة عميقة في React Hooks، Context API، وإدارة الحالة',
      years: 3
    },
    { 
      id: 2, 
      name: 'JavaScript', 
      level: 'متقدم', 
      description: 'ES6+، asynchronous programming، وتصميم الأنماط',
      years: 4
    },
    { 
      id: 3, 
      name: 'CSS/Tailwind', 
      level: 'متقدم', 
      description: 'تصميم متجاوب، animations، وتجربة المستخدم',
      years: 3
    },
    { 
      id: 4, 
      name: 'Node.js', 
      level: 'متوسط', 
      description: 'REST APIs، Express، والعمل مع قواعد البيانات',
      years: 2
    }
  ]);

  return { profile, setProfile, skills, setSkills };
};