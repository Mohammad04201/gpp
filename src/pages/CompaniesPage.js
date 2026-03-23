import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CompanyCard from '../components/companies/CompanyCard';
import { useThemeContext } from '../components/contexts/ThemeContext';

// Sample company data
const sampleCompanies = [
  {
    id: '1',
    companyName: 'Mawhiba AI Technologies',
    title: 'Leading Tech Company in Smart Recruitment',
    description: 'We connect the best tech talent in the Arab world with leading companies through AI and real skill analysis.',
    email: 'info@mawhiba.ai',
    phone: '+966 50 123 4567',
    location: 'Riyadh, Saudi Arabia',
    website: 'https://mawhiba.ai',
    established: '2020',
    employees: '150',
    rating: 4.8,
    industry: 'Information Technology',
    companyType: 'Startup',
    departments: [
      { name: 'Software Development', description: 'Web and mobile app development', employees: '45', isHiring: true },
      { name: 'Artificial Intelligence', description: 'AI Research & Development', employees: '20', isHiring: true },
      { name: 'User Experience', description: 'UI/UX Design', employees: '15', isHiring: false },
      { name: 'Marketing', description: 'Digital Marketing', employees: '10', isHiring: true }
    ]
  },
  {
    id: '2',
    companyName: 'Tech Solutions Pro',
    title: 'Integrated Tech Solutions for Companies',
    description: 'We provide integrated software solutions for large and medium companies with focus on quality and security.',
    email: 'contact@techsolutions.com',
    phone: '+966 55 987 6543',
    location: 'Jeddah, Saudi Arabia',
    website: 'https://techsolutions.com',
    established: '2015',
    employees: '300',
    rating: 4.6,
    industry: 'Technology Services',
    companyType: 'Large Company',
    departments: [
      { name: 'Cybersecurity', description: 'System Protection', employees: '30', isHiring: true },
      { name: 'Infrastructure', description: 'DevOps and Cloud', employees: '25', isHiring: false },
      { name: 'Consulting', description: 'Tech Consulting', employees: '40', isHiring: true }
    ]
  },
  {
    id: '3',
    companyName: 'Creative Digital Agency',
    title: 'Creative Digital Agency',
    description: 'We design exceptional digital experiences for leading brands in the region.',
    email: 'hello@creative.sa',
    phone: '+966 54 456 7890',
    location: 'Dammam, Saudi Arabia',
    website: 'https://creative.sa',
    established: '2018',
    employees: '80',
    rating: 4.9,
    industry: 'Design & Development',
    companyType: 'Medium Company',
    departments: [
      { name: 'Creative Design', description: 'Graphic Design', employees: '25', isHiring: false },
      { name: 'Web Development', description: 'Web Development', employees: '20', isHiring: true },
      { name: 'Content Management', description: 'Content Creation', employees: '15', isHiring: false }
    ]
  },
  {
    id: '4',
    companyName: 'Data Insights Arabia',
    title: 'Data Analytics and Business Intelligence',
    description: 'We transform your data into smart decisions through advanced analytics and AI solutions.',
    email: 'info@datainsights.sa',
    phone: '+966 56 789 0123',
    location: 'Riyadh, Saudi Arabia',
    website: 'https://datainsights.sa',
    established: '2019',
    employees: '60',
    rating: 4.7,
    industry: 'Data Analytics',
    companyType: 'Startup',
    departments: [
      { name: 'Data Science', description: 'Data Science', employees: '15', isHiring: true },
      { name: 'Data Engineering', description: 'Data Engineering', employees: '10', isHiring: true },
      { name: 'Analytics', description: 'Business Analytics', employees: '12', isHiring: false }
    ]
  },
  {
    id: '5',
    companyName: 'Cloud First Solutions',
    title: 'Cloud Computing and Digital Transformation',
    description: 'We guide your journey to the cloud with customized AWS, Azure, and Google Cloud solutions.',
    email: 'sales@cloudfirst.com',
    phone: '+966 53 234 5678',
    location: 'Jeddah, Saudi Arabia',
    website: 'https://cloudfirst.com',
    established: '2017',
    employees: '120',
    rating: 4.5,
    industry: 'Cloud Computing',
    companyType: 'Medium Company',
    departments: [
      { name: 'Cloud Engineers', description: 'Cloud Architects', employees: '30', isHiring: true },
      { name: 'Cloud Security', description: 'Cloud Security', employees: '15', isHiring: true },
      { name: 'Integration', description: 'System Integration', employees: '20', isHiring: false }
    ]
  },
  {
    id: '6',
    companyName: 'Mobile Apps Factory',
    title: 'Mobile App Development',
    description: 'We build professional mobile apps for iOS and Android with excellent user experience.',
    email: 'apps@mobilefactory.sa',
    phone: '+966 55 876 5432',
    location: 'Khobar, Saudi Arabia',
    website: 'https://mobilefactory.sa',
    established: '2016',
    employees: '90',
    rating: 4.4,
    industry: 'Mobile Development',
    companyType: 'Medium Company',
    departments: [
      { name: 'iOS Development', description: 'Swift & Objective-C', employees: '20', isHiring: true },
      { name: 'Android Development', description: 'Kotlin & Java', employees: '25', isHiring: true },
      { name: 'Flutter', description: 'Cross-platform', employees: '15', isHiring: false }
    ]
  }
];

function CompaniesPage() {
  const { isDarkMode } = useThemeContext();
  const [companies, setCompanies] = useState(sampleCompanies);

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDarkMode ? 'bg-[#20232A] text-white' : 'bg-[#f9f9f9] text-gray-800'
    }`}>
      {/* Header */}
      <div className={`border-b transition-all duration-300 ${
        isDarkMode ? 'bg-[#282C34] border-[#3a4750]' : 'bg-white border-gray-200'
      }`}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Companies</h1>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                Discover the best tech companies and connect with them
              </p>
            </div>
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              ← Back to Home
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
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${
              isDarkMode ? 'bg-[#282C34]' : 'bg-gray-100'
            }`}>
              <svg className={`w-10 h-10 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>No Companies Available</h3>
            <p className={isDarkMode ? 'text-gray-500' : 'text-gray-500'}>
              Companies will be added soon
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CompaniesPage;

