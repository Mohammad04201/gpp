import { Company } from './companies.schema';

export const mockCompanies: Company[] = [
  {
    id: 1,
    name: 'شركة التقنية المتقدمة',
    logo: 'AT',
    industry: 'التقنية والمعلومات',
    location: 'الرياض، السعودية',
    size: '51-200 موظف',
    founded: '2018',
    description: 'شركة رائدة في تطوير الحلول التقنية المبتكرة للشركات والمؤسسات',
    openJobs: 5,
    website: 'https://advancedtech.com',
    jobs: [
      { id: 1, title: 'مطور React الخلفي', type: 'full-time', salary: '15,000 - 25,000 ريال', posted: 'منذ يومين' },
      { id: 2, title: 'مطور Full Stack', type: 'full-time', salary: '12,000 - 20,000 ريال', posted: 'منذ 3 أيام' },
      { id: 3, title: 'مهندس DevOps', type: 'full-time', salary: '18,000 - 30,000 ريال', posted: 'منذ أسبوع' }
    ]
  },
  {
    id: 2,
    name: 'الحلول الرقمية المتحدة',
    logo: 'UD',
    industry: 'الخدمات الاستشارية',
    location: 'دبي، الإمارات',
    size: '201-500 موظف',
    founded: '2015',
    description: 'مقدمة رائدة للحلول الرقمية واستشارات التحول الرقمي',
    openJobs: 8,
    website: 'https://uniteddigital.com',
    jobs: [
      { id: 4, title: 'مطور Python', type: 'full-time', salary: '14,000 - 22,000 ريال', posted: 'منذ يوم' },
      { id: 5, title: 'محلل بيانات', type: 'full-time', salary: '16,000 - 26,000 ريال', posted: 'منذ يومين' },
      { id: 6, title: 'مطور واجهات أمامية', type: 'part-time', salary: '8,000 - 15,000 ريال', posted: 'منذ 4 أيام' }
    ]
  },
  {
    id: 3,
    name: 'مؤسسة النمو التقني',
    logo: 'TG',
    industry: 'التمويل والبنوك',
    location: 'المنامة، البحرين',
    size: '11-50 موظف',
    founded: '2020',
    description: 'شركة ناشئة متخصصة في الحلول التقنية للقطاع المالي',
    openJobs: 3,
    website: 'https://techgrowth.com',
    jobs: [
      { id: 7, title: 'مطور Flutter', type: 'contract', salary: '20,000 - 35,000 ريال', posted: 'منذ 3 أيام' },
      { id: 8, title: 'مهندس أمن سيبراني', type: 'full-time', salary: '22,000 - 40,000 ريال', posted: 'منذ أسبوع' }
    ]
  },
  {
    id: 4,
    name: 'الابتكارات الصحية',
    logo: 'HI',
    industry: 'الرعاية الصحية',
    location: 'القاهرة، مصر',
    size: '51-200 موظف',
    founded: '2017',
    description: 'تطوير حلول تقنية مبتكرة لقطاع الرعاية الصحية',
    openJobs: 6,
    website: 'https://healthinnovations.com',
    jobs: [
      { id: 9, title: 'مطور Angular', type: 'full-time', salary: '13,000 - 21,000 ريال', posted: 'منذ يومين' },
      { id: 10, title: 'مصمم تجربة المستخدم', type: 'full-time', salary: '11,000 - 18,000 ريال', posted: 'منذ 5 أيام' }
    ]
  },
  {
    id: 5,
    name: 'النقل اللوجستي الحديث',
    logo: 'ML',
    industry: 'النقل والخدمات اللوجستية',
    location: 'عمان، الأردن',
    size: '501-1000 موظف',
    founded: '2012',
    description: 'شركة رائدة في الحلول اللوجستية الرقمية وإدارة سلاسل الإمداد',
    openJobs: 4,
    website: 'https://modernlogistics.com',
    jobs: [
      { id: 11, title: 'مطور Java', type: 'full-time', salary: '14,000 - 24,000 ريال', posted: 'منذ يوم' },
      { id: 12, title: 'مطور Node.js', type: 'full-time', salary: '15,000 - 25,000 ريال', posted: 'منذ 3 أيام' }
    ]
  }
];
