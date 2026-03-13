import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import EditCompanyOverlay from './EditCompanyOverlay';
import { mergeCompanyData, calculateCompletion, getCompanyLevel } from './user/companyDataManager';
import { JobPostsList } from './PosteCompany/JobCard';

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

function CompanyDashboard() {
  const { id } = useParams();
  const companyId = id || '1';
  
  const [companyData, setCompanyData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAddJobForm, setShowAddJobForm] = useState(false);
  const [newJob, setNewJob] = useState({
    title: '',
    description: '',
    requirements: '',
    skills: '',
    salary: '',
    location: '',
    type: 'Full-time',
    urgency: 'medium'
  });

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

  // Handle adding new job
  const handleAddJob = (e) => {
    e.preventDefault();
    // Here you can add job saving logic
    console.log('New job added:', newJob);
    alert('Job added successfully!');
    setShowAddJobForm(false);
    setNewJob({
      title: '',
      description: '',
      requirements: '',
      skills: '',
      salary: '',
      location: '',
      type: 'Full-time',
      urgency: 'medium'
    });
  };

  const handleJobInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob(prev => ({
      ...prev,
      [name]: value
    }));
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

  const initials = companyData.companyName?.split(' ').map(word => word[0]).join('').substring(0, 2) || 'CO';
  const profileCompletion = calculateCompletion(companyData);
  const companyLevel = getCompanyLevel(profileCompletion);

  // Dashboard statistics
  const dashboardStats = {
    openJobs: 12,
    applicants: 48,
    activeDepartments: companyData.departments?.length || 0,
    hiringDepartments: companyData.departments?.filter(dept => dept.isHiring).length || 0,
    profileViews: companyData.stats?.views || 0,
    followers: companyData.stats?.followers || 0
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'departments', label: 'Departments', icon: '🏗️' },
    { id: 'jobs', label: 'Jobs', icon: '💼' },
    { id: 'analytics', label: 'Analytics', icon: '📈' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💼</span>
                  </div>
                  <span className="text-green-400 text-sm">+12%</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{dashboardStats.openJobs}</div>
                <div className="text-gray-400 text-sm">Open Jobs</div>
              </div>

              <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <span className="text-green-400 text-sm">+25%</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{dashboardStats.applicants}</div>
                <div className="text-gray-400 text-sm">Applicants</div>
              </div>

              <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <span className="text-blue-400 text-sm">{dashboardStats.hiringDepartments}</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{dashboardStats.activeDepartments}</div>
                <div className="text-gray-400 text-sm">Active Departments</div>
              </div>

              <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👁️</span>
                  </div>
                  <span className="text-green-400 text-sm">+8%</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{dashboardStats.profileViews}</div>
                <div className="text-gray-400 text-sm">Profile Views</div>
              </div>

              <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <span className="text-green-400 text-sm">+15%</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{companyData.stats?.likes || 0}</div>
                <div className="text-gray-400 text-sm">Likes</div>
              </div>

              <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <span className="text-green-400 text-sm">+20%</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{dashboardStats.followers}</div>
                <div className="text-gray-400 text-sm">Followers</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <button 
                  onClick={() => setActiveTab('profile')}
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-4 transition-colors"
                >
                  <div className="text-2xl mb-2">✏️</div>
                  <div className="text-sm">Edit Profile</div>
                </button>
                <button 
                  onClick={() => setShowAddJobForm(true)}
                  className="bg-green-500 hover:bg-green-600 text-white rounded-lg p-4 transition-colors"
                >
                  <div className="text-2xl mb-2">➕</div>
                  <div className="text-sm">Add Job</div>
                </button>
                <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg p-4 transition-colors">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="text-sm">View Reports</div>
                </button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-4 transition-colors">
                  <div className="text-2xl mb-2">⚙️</div>
                  <div className="text-sm">Settings</div>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-3 bg-[#1a1d23] rounded-lg">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span>👨‍💻</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white">New developer applied for Frontend position</p>
                    <p className="text-gray-400 text-sm">5 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-[#1a1d23] rounded-lg">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span>✅</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white">Software Development department updated</p>
                    <p className="text-gray-400 text-sm">15 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-[#1a1d23] rounded-lg">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span>👁️</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white">New company viewed your profile</p>
                    <p className="text-gray-400 text-sm">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-6">
            {/* Profile Header */}
            <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{initials}</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-[#282C34] rounded-full flex items-center justify-center border-2 border-[#3a4750]">
                    <span className="text-xs font-bold text-green-400">{profileCompletion}%</span>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-right">
                  <h1 className="text-3xl font-bold mb-2">{companyData.companyName}</h1>
                  <p className="text-blue-400 text-lg mb-3">{companyData.title}</p>
                  
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                      {companyData.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                      Founded {companyData.established}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                      </svg>
                      {companyData.employees} employees
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full max-w-md mx-auto md:mx-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-400">Profile Completion</span>
                      <span className={`text-sm font-bold ${companyLevel.color}`}>{companyLevel.level}</span>
                    </div>
                    <div className="w-full bg-[#3a4750] rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${companyLevel.bgColor} transition-all duration-500`}
                        style={{ width: `${profileCompletion}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <div className="text-center">
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
              >
                Edit Profile
              </button>
            </div>

            {/* Company Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Company Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Industry</span>
                    <span className="text-white text-sm">{companyData.industry || 'Not specified'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Type</span>
                    <span className="text-white text-sm">{companyData.companyType || 'Not specified'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Rating</span>
                    <span className="text-yellow-400 text-sm flex items-center gap-1">
                      ⭐ {companyData.rating || 0}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Status</span>
                    <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                      Active
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-[#1a1d23] rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">{companyData.stats?.views || 0}</div>
                    <div className="text-xs text-gray-400">Views</div>
                  </div>
                  <div className="text-center p-3 bg-[#1a1d23] rounded-lg">
                    <div className="text-2xl font-bold text-green-400">{companyData.stats?.likes || 0}</div>
                    <div className="text-xs text-gray-400">Likes</div>
                  </div>
                  <div className="text-center p-3 bg-[#1a1d23] rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">{companyData.stats?.followers || 0}</div>
                    <div className="text-xs text-gray-400">Followers</div>
                  </div>
                  <div className="text-center p-3 bg-[#1a1d23] rounded-lg">
                    <div className="text-2xl font-bold text-orange-400">{dashboardStats.hiringDepartments}</div>
                    <div className="text-xs text-gray-400">Hiring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'departments':
        return (
          <div className="space-y-6">
            <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Departments</h3>
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition-colors"
                >
                  Manage Departments
                </button>
              </div>
              
              {(companyData.departments?.length || 0) === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <p>No departments added yet</p>
                  <p className="text-sm mt-2">Click "Manage Departments" to add departments</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {companyData.departments.map((dept, index) => (
                    <div key={index} className="bg-[#1a1d23] rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-white font-medium text-lg">{dept.name}</h4>
                        {dept.isHiring ? (
                          <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-medium">
                            Hiring
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-gray-600 text-white rounded-full text-xs font-medium">
                            Complete
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 mb-3">{dept.description}</p>
                      <div className="flex items-center gap-2 text-blue-400 text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                        </svg>
                        {dept.employees} employees
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case 'jobs':
        return <JobPostsList />;

      case 'analytics':
        return (
          <div className="space-y-6">
            <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Analytics & Statistics</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Profile Views Chart */}
                <div className="bg-[#1a1d23] rounded-lg p-4">
                  <h4 className="text-white font-medium mb-4">Profile Views</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">This Week</span>
                      <span className="text-white">245</span>
                    </div>
                    <div className="w-full bg-[#3a4750] rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Last Week</span>
                      <span className="text-white">189</span>
                    </div>
                    <div className="w-full bg-[#3a4750] rounded-full h-2">
                      <div className="bg-gray-500 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                </div>

                {/* Applicants by Department */}
                <div className="bg-[#1a1d23] rounded-lg p-4">
                  <h4 className="text-white font-medium mb-4">Applicants by Department</h4>
                  <div className="space-y-2">
                    {companyData.departments?.slice(0, 4).map((dept, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-400">{dept.name}</span>
                        <span className="text-white">{Math.floor(Math.random() * 20) + 5}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Engagement Metrics */}
                <div className="bg-[#1a1d23] rounded-lg p-4">
                  <h4 className="text-white font-medium mb-4">Engagement Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">89%</div>
                      <div className="text-xs text-gray-400">Response Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">4.2</div>
                      <div className="text-xs text-gray-400">Average Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">12</div>
                      <div className="text-xs text-gray-400">Days Average</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-400">95%</div>
                      <div className="text-xs text-gray-400">Customer Satisfaction</div>
                    </div>
                  </div>
                </div>

                {/* Top Skills */}
                <div className="bg-[#1a1d23] rounded-lg p-4">
                  <h4 className="text-white font-medium mb-4">Top Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'TypeScript'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-[#3a4750] text-gray-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-vh-100 bg-[#20232A] text-white">
      {/* Header */}
      <div className="bg-[#282C34] border-b border-[#3a4750]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Company Dashboard</h1>
              <p className="text-gray-400">Manage company profile and monitor performance</p>
            </div>
            <Link 
              to="/companies" 
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              ← Back to Companies
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="bg-[#282C34] rounded-xl border border-[#3a4750] mb-6">
          <div className="flex border-b border-[#3a4750]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-400 border-b-2 border-blue-400 bg-[#1a1d23]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="ml-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {renderTabContent()}
        </div>
      </div>

      {/* Edit Overlay */}
      {isEditing && (
        <EditCompanyOverlay 
          companyData={companyData} 
          onSave={handleSave} 
          onCancel={() => setIsEditing(false)} 
        />
      )}

      {/* Add Job Form Modal */}
      {showAddJobForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Add New Job</h3>
            
            <form onSubmit={handleAddJob} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Job Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={newJob.title}
                    onChange={handleJobInputChange}
                    required
                    placeholder="e.g., Senior React Developer"
                    className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Salary</label>
                  <input
                    type="text"
                    name="salary"
                    value={newJob.salary}
                    onChange={handleJobInputChange}
                    placeholder="e.g., 15,000 - 25,000 SAR"
                    className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Job Description *</label>
                <textarea
                  name="description"
                  value={newJob.description}
                  onChange={handleJobInputChange}
                  required
                  rows="3"
                  placeholder="Describe the job and required tasks..."
                  className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:border-blue-500 focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Requirements *</label>
                <textarea
                  name="requirements"
                  value={newJob.requirements}
                  onChange={handleJobInputChange}
                  required
                  rows="3"
                  placeholder="Required skills and experience..."
                  className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:border-blue-500 focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Required Skills</label>
                <input
                  type="text"
                  name="skills"
                  value={newJob.skills}
                  onChange={handleJobInputChange}
                  placeholder="React, Node.js, TypeScript (separate skills with comma)"
                  className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={newJob.location}
                    onChange={handleJobInputChange}
                    placeholder="Remote or Riyadh"
                    className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Job Type</label>
                  <select
                    name="type"
                    value={newJob.type}
                    onChange={handleJobInputChange}
                    className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Priority</label>
                  <select
                    name="urgency"
                    value={newJob.urgency}
                    onChange={handleJobInputChange}
                    className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="high">Urgent</option>
                    <option value="medium">Medium</option>
                    <option value="low">Normal</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
                >
                  Post Job
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddJobForm(false)}
                  className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompanyDashboard;
