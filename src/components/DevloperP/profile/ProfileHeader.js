import React from 'react';
import { getDeveloperInitials } from '../helpers';
import { calculateCompletion } from '../user/userDataManager';

const ProfileHeader = ({ userData }) => {
  const initials = getDeveloperInitials(userData.name);
  const profileCompletion = calculateCompletion(userData);
    const socialAccounts = [
    { 
      name: 'LinkedIn', 
      url: userData.linkedin || `https://linkedin.com/in/${userData.name?.toLowerCase().replace(/\s+/g, '-')}`,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
        </svg>
      ),
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    { 
      name: 'GitHub', 
      url: userData.github || `https://github.com/${userData.name?.toLowerCase().replace(/\s+/g, '')}`,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 2.836c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
        </svg>
      ),
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    { 
      name: 'Email', 
      url: userData.email ? `mailto:${userData.email}` : '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
        </svg>
      ),
      color: 'bg-red-500 hover:bg-red-600'
    },
    { 
      name: 'Phone', 
      url: userData.phone ? `tel:${userData.phone}` : '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
        </svg>
      ),
      color: 'bg-green-500 hover:bg-green-600'
    }
  ];

  const handleCVDownload = () => {
    if (userData.cvFile) {
      // Create a download link for the CV file
      const link = document.createElement('a');
      link.href = userData.cvFile.url || '#';
      link.download = userData.cvFile.name || 'CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };


  return (
    <div className="max-w-6xl mx-auto">
      {/* Main Profile Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 p-6 md:p-8">
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
            {/* Profile Image and Completion Badge */}
            <div className="relative mx-auto lg:mx-0">
              <div className="w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl md:text-4xl font-bold text-white">{initials}</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-full flex items-center justify-center border-2 border-teal-500 shadow-lg">
                <span className="text-xs font-bold text-teal-400">{profileCompletion}%</span>
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {userData.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-4">{userData.title}</p>
              
              {/* Bio Section */}
              {userData.bio && (
                <div className="mb-6 p-4 bg-gray-800/50 rounded-xl border border-gray-600">
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">{userData.bio}</p>
                </div>
              )}
              
              {/* Profile Completion Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
                  <span>Profile Completion</span>
                  <span className="text-teal-400 font-semibold">{profileCompletion}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 md:h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-500 shadow-lg shadow-teal-500/50"
                    style={{ width: `${profileCompletion}%` }}
                  ></div>
                </div>
              </div>

              {/* Location */}
              {userData.location && (
                <div className="flex items-center gap-2 text-sm md:text-base text-gray-300 mb-6">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{userData.location}</span>
                </div>
              )}

              {/* Contact Links Section */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                {/* LinkedIn */}
                {(userData.linkedin || true) && (
                  <div className="flex flex-col items-center gap-2">
                    <a 
                      href={userData.linkedin || 'https://linkedin.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                      </svg>
                    </a>
                    <span className="text-xs text-gray-400">LinkedIn</span>
                  </div>
                )}

                {/* GitHub */}
                {(userData.github || true) && (
                  <div className="flex flex-col items-center gap-2">
                    <a 
                      href={userData.github || 'https://github.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800 hover:bg-gray-900 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 2.836c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                      </svg>
                    </a>
                    <span className="text-xs text-gray-400">GitHub</span>
                  </div>
                )}

                {/* CV */}
                {(userData.cvFile || true) && (
                  <div className="flex flex-col items-center gap-2">
                    <button 
                      onClick={handleCVDownload}
                      className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-2m0 0l8 8m0 0l8-8" clipRule="evenodd"/>
                      </svg>
                    </button>
                    <span className="text-xs text-gray-400">Download CV</span>
                  </div>
                )}
              </div>

              {/* Email and Phone */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                {/* Email */}
                {(userData.email || true) && (
                  <div className="group relative">
                    <a 
                      href={`mailto:${userData.email || 'mohammedbzoor777@gmail.com'}`}
                      className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </a>
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                      {userData.email || 'mohammedbzoor777@gmail.com'} 
                    </span>
                  </div>
                )}

                {/* Phone */}
                {(userData.phone || true) && (
                  <div className="group relative">
                    <a 
                      href={`tel:${userData.phone || '+96650000000'}`}
                      className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </a>
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                      {userData.phone || '+966 50 000 0000'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
    
  );
};

export default ProfileHeader;
