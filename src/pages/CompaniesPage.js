import { Link } from 'react-router-dom';
import CompanyCard from '../components/companies/CompanyCard';

// بيانات شركات تجريبية
const sampleCompanies = [
  {
    id: '1',
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
    industry: 'تقنية المعلومات',
    companyType: 'شركة ناشئة',
    departments: [
      { name: 'تطوير البرمجيات', description: 'تطوير تطبيقات الويب والموبايل', employees: '45', isHiring: true },
      { name: 'الذكاء الاصطناعي', description: 'بحث وتطوير AI', employees: '20', isHiring: true },
      { name: 'تجربة المستخدم', description: 'UI/UX Design', employees: '15', isHiring: false },
      { name: 'التسويق', description: 'التسويق الرقمي', employees: '10', isHiring: true }
    ]
  },
  {
    id: '2',
    companyName: 'Tech Solutions Pro',
    title: 'حلول تقنية متكاملة للشركات',
    description: 'نقدم حلول برمجية متكاملة للشركات الكبيرة والمتوسطة مع التركيز على الجودة والأمان.',
    email: 'contact@techsolutions.com',
    phone: '+966 55 987 6543',
    location: 'جدة، السعودية',
    website: 'https://techsolutions.com',
    established: '2015',
    employees: '300',
    rating: 4.6,
    industry: 'خدمات تقنية',
    companyType: 'شركة كبيرة',
    departments: [
      { name: 'الأمن السيبراني', description: 'حماية الأنظمة', employees: '30', isHiring: true },
      { name: 'البنية التحتية', description: 'DevOps والسحابة', employees: '25', isHiring: false },
      { name: 'الاستشارات', description: 'استشارات تقنية', employees: '40', isHiring: true }
    ]
  },
  {
    id: '3',
    companyName: 'Creative Digital Agency',
    title: 'وكالة رقمية إبداعية',
    description: 'نصمم تجارب رقمية استثنائية للعلامات التجارية الرائدة في المنطقة.',
    email: 'hello@creative.sa',
    phone: '+966 54 456 7890',
    location: 'الدمام، السعودية',
    website: 'https://creative.sa',
    established: '2018',
    employees: '80',
    rating: 4.9,
    industry: 'تصميم وتطوير',
    companyType: 'شركة متوسطة',
    departments: [
      { name: 'التصميم الإبداعي', description: 'Graphic Design', employees: '25', isHiring: false },
      { name: 'تطوير المواقع', description: 'Web Development', employees: '20', isHiring: true },
      { name: 'إدارة المحتوى', description: 'Content Creation', employees: '15', isHiring: false }
    ]
  },
  {
    id: '4',
    companyName: 'Data Insights Arabia',
    title: 'تحليل البيانات والذكاء التجاري',
    description: 'نحول بياناتك إلى قرارات ذكية من خلال حلول التحليل المتقدمة والذكاء الاصطناعي.',
    email: 'info@datainsights.sa',
    phone: '+966 56 789 0123',
    location: 'الرياض، السعودية',
    website: 'https://datainsights.sa',
    established: '2019',
    employees: '60',
    rating: 4.7,
    industry: 'تحليل البيانات',
    companyType: 'شركة ناشئة',
    departments: [
      { name: 'علم البيانات', description: 'Data Science', employees: '15', isHiring: true },
      { name: 'هندسة البيانات', description: 'Data Engineering', employees: '10', isHiring: true },
      { name: 'التحليلات', description: 'Business Analytics', employees: '12', isHiring: false }
    ]
  },
  {
    id: '5',
    companyName: 'Cloud First Solutions',
    title: 'الحوسبة السحابية والتحول الرقمي',
    description: 'نقود رحلتك نحو السحابة مع حلول AWS و Azure و Google Cloud المخصصة.',
    email: 'sales@cloudfirst.com',
    phone: '+966 53 234 5678',
    location: 'جدة، السعودية',
    website: 'https://cloudfirst.com',
    established: '2017',
    employees: '120',
    rating: 4.5,
    industry: 'الحوسبة السحابية',
    companyType: 'شركة متوسطة',
    departments: [
      { name: 'مهندسو السحابة', description: 'Cloud Architects', employees: '30', isHiring: true },
      { name: 'الأمان السحابي', description: 'Cloud Security', employees: '15', isHiring: true },
      { name: 'التكامل', description: 'System Integration', employees: '20', isHiring: false }
    ]
  },
  {
    id: '6',
    companyName: 'Mobile Apps Factory',
    title: 'تطوير تطبيقات الموبايل',
    description: 'نبني تطبيقات موبايل احترافية لـ iOS و Android مع تجربة مستخدم ممتازة.',
    email: 'apps@mobilefactory.sa',
    phone: '+966 55 876 5432',
    location: 'الخبر، السعودية',
    website: 'https://mobilefactory.sa',
    established: '2016',
    employees: '90',
    rating: 4.4,
    industry: 'تطوير الموبايل',
    companyType: 'شركة متوسطة',
    departments: [
      { name: 'iOS Development', description: 'Swift & Objective-C', employees: '20', isHiring: true },
      { name: 'Android Development', description: 'Kotlin & Java', employees: '25', isHiring: true },
      { name: 'Flutter', description: 'Cross-platform', employees: '15', isHiring: false }
    ]
  }
];

function CompaniesPage() {
  return (
    <div className="min-h-screen bg-[#20232A] text-white">
      {/* Header */}
      <div className="bg-[#282C34] border-b border-[#3a4750]">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">الشركات</h1>
              <p className="text-gray-400">اكتشف أفضل الشركات التقنية وتواصل معها</p>
            </div>
            <Link 
              to="/" 
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              ← العودة للرئيسية
            </Link>
          </div>
        </div>
      </div>

      {/* Companies Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>

        {/* Empty State (if no companies) */}
        {sampleCompanies.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-[#282C34] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-400 mb-2">لا توجد شركات</h3>
            <p className="text-gray-500">سيتم إضافة الشركات قريباً</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CompaniesPage;

