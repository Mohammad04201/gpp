// بيانات وهمية لمنشورات الشركات
export const postsData = [
  {
    id: 1,
    companyId: 'tech-solutions',
    companyName: 'Tech Solutions Arabia',
    companyLogo: 'TS',
    companyLocation: 'الرياض، السعودية',
    companySize: '100-500 موظف',
    companyIndustry: 'تقنية المعلومات',
    publishedAt: '2024-03-15T10:30:00Z',
    title: 'مطور React Senior مطلوب للعمل عن بعد',
    type: 'job',
    urgency: 'high',
    description: 'نبحث عن مطور React محترف للانضمام إلى فريقنا المبتكر. ستعمل على مشاريع رائدة في المنطقة.',
    requirements: [
      'خبرة 5+ سنوات في React',
      'إتقان JavaScript و TypeScript',
      'خبرة في Redux و State Management',
      'القدرة على العمل بفريق'
    ],
    benefits: [
      'راتب تنافسي يبدأ من 15,000 ريال',
      'عمل عن بعد بالكامل',
      'تأمين صحي شامل',
      'إجازات سنوية مدفوعة',
      'تدريب وتطوير مهني'
    ],
    skills: ['React', 'TypeScript', 'Redux', 'Node.js', 'Git'],
    experienceLevel: 'Senior',
    employmentType: 'Full-time',
    location: 'عن بعد',
    salary: '15,000 - 25,000 ريال',
    applicants: 45,
    views: 1234,
    likes: 89,
    isActive: true,
    tags: ['React', 'Frontend', 'Remote', 'Senior']
  },
  {
    id: 2,
    companyId: 'digital-agency',
    companyName: 'Digital Creative Agency',
    companyLogo: 'DC',
    companyLocation: 'جدة، السعودية',
    companySize: '50-100 موظف',
    companyIndustry: 'التصميم والإعلان',
    publishedAt: '2024-03-14T14:20:00Z',
    title: 'مصمم UI/UX للعمل على مشاريع إبداعية',
    type: 'job',
    urgency: 'medium',
    description: 'نبحث عن مصمم مبدع لديه شغف بتجربة المستخدم والتصميم الجذاب. ستعمل مع علامات تجارية كبرى.',
    requirements: [
      'خبرة 3+ سنوات في UI/UX',
      'إتقان Figma و Adobe Creative Suite',
      'فهم عميق لتجربة المستخدم',
      'معرض أعمال قوي'
    ],
    benefits: [
      'بيئة عمل إبداعية',
      'مشاريع متنوعة مع كبرى الشركات',
      'تطوير مهني مستمر',
      'ساعات عمل مرنة'
    ],
    skills: ['UI/UX', 'Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    experienceLevel: 'Mid-level',
    employmentType: 'Full-time',
    location: 'جدة',
    salary: '10,000 - 15,000 ريال',
    applicants: 28,
    views: 856,
    likes: 67,
    isActive: true,
    tags: ['Design', 'UI/UX', 'Creative', 'Figma']
  },
  {
    id: 3,
    companyId: 'fintech-startup',
    companyName: 'FinTech Innovations',
    companyLogo: 'FI',
    companyLocation: 'الدمام، السعودية',
    companySize: '20-50 موظف',
    companyIndustry: 'التقنية المالية',
    publishedAt: '2024-03-13T09:15:00Z',
    title: 'Backend Engineer Python/Django',
    type: 'job',
    urgency: 'high',
    description: 'شركة ناشئة في مجال FinTech تبحث عن مهندس Backend لبناء وتطوير أنظمة الدفع الآمنة.',
    requirements: [
      'خبرة 4+ سنوات في Python/Django',
      'خبرة في REST APIs و Microservices',
      'معرفة بقواعد البيانات (PostgreSQL, Redis)',
      'فهم لمبادئ الأمان السيبراني'
    ],
    benefits: [
      'أسهم في الشركة',
      'راتب تنافسي',
      'عمل في بيئة startup ديناميكية',
      'تأثير مباشر على المنتج'
    ],
    skills: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    experienceLevel: 'Mid-level',
    employmentType: 'Full-time',
    location: 'الدمام',
    salary: '12,000 - 18,000 ريال',
    applicants: 67,
    views: 1456,
    likes: 112,
    isActive: true,
    tags: ['Backend', 'Python', 'Django', 'FinTech', 'Startup']
  },
  {
    id: 4,
    companyId: 'ecommerce-giant',
    companyName: 'Gulf E-Commerce',
    companyLogo: 'GE',
    companyLocation: 'دبي، الإمارات',
    companySize: '500+ موظف',
    companyIndustry: 'التجارة الإلكترونية',
    publishedAt: '2024-03-12T16:45:00Z',
    title: 'DevOps Engineer لتوسيع البنية التحتية',
    type: 'job',
    urgency: 'medium',
    description: 'نحن ننمو بسرعة ونحتاج إلى DevOps Engineer لإدارة وتحسين بنيتنا التحتية السحابية.',
    requirements: [
      'خبرة 3+ سنوات في DevOps',
      'إتقان Kubernetes و Docker',
      'خبرة مع AWS أو Azure',
      'أتمتة CI/CD pipelines'
    ],
    benefits: [
      'عمل مع أحدث التقنيات',
      'ميزات تكنولوجية ممتازة',
      'تأمين صحي شامل',
      'فرص نمو مهني'
    ],
    skills: ['DevOps', 'Kubernetes', 'Docker', 'AWS', 'CI/CD', 'Terraform'],
    experienceLevel: 'Mid-level',
    employmentType: 'Full-time',
    location: 'دبي',
    salary: '14,000 - 22,000 ريال',
    applicants: 34,
    views: 987,
    likes: 78,
    isActive: true,
    tags: ['DevOps', 'Cloud', 'Kubernetes', 'AWS']
  },
  {
    id: 5,
    companyId: 'mobile-apps-co',
    companyName: 'Mobile Apps Company',
    companyLogo: 'MA',
    companyLocation: 'الرياض، السعودية',
    companySize: '30-50 موظف',
    companyIndustry: 'تطوير تطبيقات الجوال',
    publishedAt: '2024-03-11T11:30:00Z',
    title: 'مطور Flutter للعمل على تطبيقات iOS و Android',
    type: 'job',
    urgency: 'high',
    description: 'نبحث عن مطور Flutter محترف لتطوير تطبيقات جوال مبتكرة لعملائنا في المنطقة.',
    requirements: [
      'خبرة 3+ سنوات في Flutter',
      'فهم عميق لـ Dart',
      'خبرة في تطوير iOS و Android',
      'معرفة بـ REST APIs'
    ],
    benefits: [
      'عمل على مشاريع متنوعة',
      'ساعات عمل مرنة',
      'تدريب على أحدث التقنيات',
      'راتب تنافسي'
    ],
    skills: ['Flutter', 'Dart', 'iOS', 'Android', 'Firebase', 'REST APIs'],
    experienceLevel: 'Mid-level',
    employmentType: 'Full-time',
    location: 'الرياض',
    salary: '11,000 - 17,000 ريال',
    applicants: 52,
    views: 1123,
    likes: 94,
    isActive: true,
    tags: ['Mobile', 'Flutter', 'Dart', 'iOS', 'Android']
  },
  {
    id: 6,
    companyId: 'data-analytics',
    companyName: 'Data Analytics Pro',
    companyLogo: 'DA',
    companyLocation: 'الرياض، السعودية',
    companySize: '40-80 موظف',
    companyIndustry: 'تحليل البيانات',
    publishedAt: '2024-03-10T13:20:00Z',
    title: 'Data Scientist للعمل على مشاريع الذكاء الاصطناعي',
    type: 'job',
    urgency: 'medium',
    description: 'نبحث عن Data Scientist لمساعدتنا في بناء نماذج ذكاء اصطناعي مبتكرة للعملاء.',
    requirements: [
      'خبرة 3+ سنوات في Data Science',
      'إتقان Python و R',
      'خبرة في Machine Learning',
      'معرفة بالإحصاء والرياضيات'
    ],
    benefits: [
      'عمل على مشاريع AI متقدمة',
      'فرص التطوير المهني',
      'بيئة عمل أكاديمية',
      'مشاركة في المؤتمرات الدولية'
    ],
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'Pandas', 'R', 'SQL'],
    experienceLevel: 'Mid-level',
    employmentType: 'Full-time',
    location: 'الرياض',
    salary: '13,000 - 20,000 ريال',
    applicants: 41,
    views: 789,
    likes: 71,
    isActive: true,
    tags: ['Data Science', 'AI', 'Machine Learning', 'Python']
  }
];

// دالة للحصول على منشورات شركة معينة
export const getCompanyPosts = (companyId) => {
  return postsData.filter(post => post.companyId === companyId);
};

// دالة للحصول على المنشورات الأكثر تفاعلاً
export const getTrendingPosts = () => {
  return postsData
    .sort((a, b) => (b.likes + b.applicants) - (a.likes + a.applicants))
    .slice(0, 5);
};

// دالة للبحث في المنشورات
export const searchPosts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return postsData.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.description.toLowerCase().includes(lowercaseQuery) ||
    post.skills.some(skill => skill.toLowerCase().includes(lowercaseQuery)) ||
    post.companyName.toLowerCase().includes(lowercaseQuery)
  );
};

// دالة للتصفية حسب المهارات
export const filterPostsBySkills = (skills) => {
  return postsData.filter(post =>
    skills.some(skill => post.skills.includes(skill))
  );
};

// دالة للتصفية حسب الموقع
export const filterPostsByLocation = (location) => {
  return postsData.filter(post =>
    post.location.toLowerCase().includes(location.toLowerCase())
  );
};

// دالة للتصفية حسب مستوى الخبرة
export const filterPostsByExperience = (level) => {
  return postsData.filter(post => post.experienceLevel === level);
};