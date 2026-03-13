import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import EditCompanyOverlay from './EditCompany/EditCompanyOverlay';
import { mergeCompanyData, calculateCompletion, getCompanyLevel } from './user/companyDataManager';
import ProfileHeader from './profileCompany/ProfileHeader';
import EditButton from './profileCompany/EditButton';
import Departments from './profileCompany/Departments';
import JobProfile from './profileCompany/jobProfile';

// Default company data
const defaultCompanyData = {
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
  social: {
    github: 'https://github.com/mawhiba',
    linkedin: 'https://linkedin.com/company/mawhiba',
    twitter: '',
    facebook: ''
  },
  departments: [],
  stats: {
    views: 0,
    likes: 0,
    followers: 0
  }
};

function CompanyProfileView() {
  const { id } = useParams();
  const companyId = id || '1';
  
  const [companyData, setCompanyData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('departments');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data when page starts
  useEffect(() => {
    const merged = mergeCompanyData(companyId, defaultCompanyData);
    setCompanyData(merged);
    setIsLoaded(true);
  }, [companyId]);

  // Update data after editing
  const handleSave = (newData) => {
    setCompanyData(newData);
    setIsEditing(false);
  };

  if (!isLoaded || !companyData) {
    return (
      <div className="min-vh-100 bg-[#20232A] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const profileCompletion = calculateCompletion(companyData);
  const companyLevel = getCompanyLevel(profileCompletion);

  return (
    <div className="min-vh-100 bg-[#20232A] text-white relative">
      {/* Floating edit button */}
      <EditButton onClick={() => setIsEditing(true)} />

      {/* Edit modal popup */}
      {isEditing && (
        <EditCompanyOverlay 
          companyData={companyData} 
          onSave={handleSave} 
          onCancel={() => setIsEditing(false)} 
        />
      )}

      <div className="container mx-auto px-4 py-8">
        
        <ProfileHeader 
          companyData={companyData}
          profileCompletion={profileCompletion}
          companyLevel={companyLevel}
        />
        
        <Departments />
        
        <JobProfile />
        
      

     
     

        <div className="text-center mt-8">
          <Link 
            to="/companies"
            className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Back to Companies
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfileView;
