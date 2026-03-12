// بيانات وهمية للمطورين
export const developersData = [
  {
    id: 1,
    name: 'أحمد محمد',
    title: 'Full Stack Developer',
    location: 'الرياض، السعودية',
    bio: 'مطور متكامل بخبرة 5 سنوات في بناء تطبيقات ويب حديثة باستخدام React و Node.js. شغوف بحل المشاكل المعقدة وتطوير حلول مبتكرة.',
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
      { id: 1, name: 'تطبيق إدارة المشاريع', tech: ['React', 'Node.js'] },
      { id: 2, name: 'منصة التجارة الإلكترونية', tech: ['Vue.js', 'Laravel'] },
      { id: 3, name: 'نظام إدارة المحتوى', tech: ['Next.js', 'PostgreSQL'] }
    ],
    stats: {
      views: 1250,
      likes: 89,
      connections: 156
    }
  },
  {
    id: 2,
    name: 'فاطمة العلي',
    title: 'Frontend Developer',
    location: 'جدة، السعودية',
    bio: 'متخصصة في تطوير واجهات المستخدم الحديثة وتجربة المستخدم. خبرة في تحويل التصاميم إلى واجهات تفاعلية وجذابة باستخدام أحدث التقنيات.',
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
      { id: 1, name: 'تطبيق التسوق الذكي', tech: ['React', 'Tailwind CSS'] },
      { id: 2, name: 'منصة التعليم الإلكتروني', tech: ['Vue.js', 'Bootstrap'] }
    ],
    stats: {
      views: 980,
      likes: 67,
      connections: 134
    }
  },
  {
    id: 3,
    name: 'محمد عبدالله',
    title: 'Backend Developer',
    location: 'الدمام، السعودية',
    bio: 'مهندس برمجيات متخصص في تطوير الأنظمة الخلفية قابلة للتوسع. خبرة في بناء REST APIs والتعامل مع قواعد البيانات الكبيرة.',
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
      { id: 1, name: 'نظام الدفع الآمن', tech: ['Python', 'Django'] },
      { id: 2, name: 'منصة التحليلات', tech: ['Node.js', 'MongoDB'] },
      { id: 3, name: 'خدمة المصادقة', tech: ['Go', 'PostgreSQL'] }
    ],
    stats: {
      views: 1450,
      likes: 112,
      connections: 189
    }
  },
  {
    id: 4,
    name: 'نورة السعيد',
    title: 'Mobile Developer',
    location: 'الرياض، السعودية',
    bio: 'مطورة تطبيقات جوال محترفة بخبرة في بناء تطبيقات iOS و Android أصلية وتطبيقات هجينة. شغوف بتجربة المستخدم والأداء.',
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
      { id: 1, name: 'تطبيق اللياقة البدنية', tech: ['React Native'] },
      { id: 2, name: 'تطبيق توصيل الطعام', tech: ['Flutter'] }
    ],
    stats: {
      views: 780,
      likes: 45,
      connections: 98
    }
  },
  {
    id: 5,
    name: 'خالد الحربي',
    title: 'DevOps Engineer',
    location: 'جدة، السعودية',
    bio: 'مهندس DevOps متخصص في أتمتة العمليات وتحسين البنية التحتية السحابية. خبرة في CI/CD والتحكم في الإصدارات والمراقبة.',
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
      { id: 1, name: 'بنية تحتية سحابية', tech: ['AWS', 'Kubernetes'] },
      { id: 2, name: 'نظام CI/CD', tech: ['Jenkins', 'Docker'] }
    ],
    stats: {
      views: 1100,
      likes: 78,
      connections: 145
    }
  },
  {
    id: 6,
    name: 'مريم أحمد',
    title: 'UI/UX Designer',
    location: 'الرياض، السعودية',
    bio: 'مصممة واجهة وتجربة مستخدم مبدعة. خبرة في تصميم واجهات جميلة وسهلة الاستخدام مع التركيز على احتياجات المستخدم.',
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
      { id: 1, name: 'تصميم تطبيق البنك', tech: ['Figma', 'Adobe XD'] },
      { id: 2, name: 'واجهة منصة التعلم', tech: ['Sketch', 'Figma'] }
    ],
    stats: {
      views: 650,
      likes: 89,
      connections: 112
    }
  }
];

// دالة للحصول على مطور معين
export const getDeveloperById = (id) => {
  return developersData.find(dev => dev.id === parseInt(id));
};

// دالة للحصول على المطورين المتاحين للعمل
export const getAvailableDevelopers = () => {
  return developersData.filter(dev => dev.available);
};

// دالة للبحث في المطورين
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

// دالة للتصفية حسب المهارات
export const filterDevelopersBySkills = (skills) => {
  return developersData.filter(dev =>
    skills.some(skill => dev.skills.some(devSkill => devSkill.name.toLowerCase() === skill.toLowerCase()))
  );
};

// دالة للتصفية حسب الموقع
export const filterDevelopersByLocation = (location) => {
  return developersData.filter(dev =>
    dev.location.toLowerCase().includes(location.toLowerCase())
  );
};

// دالة للتصفية حسب مستوى الخبرة
export const filterDevelopersByExperience = (minExperience) => {
  return developersData.filter(dev => dev.experience >= minExperience);
};

// دالة للمطورين الأكثر مشاهدة
export const getTrendingDevelopers = () => {
  return developersData
    .sort((a, b) => (b.stats.views + b.stats.likes) - (a.stats.views + a.stats.likes))
    .slice(0, 3);
};
