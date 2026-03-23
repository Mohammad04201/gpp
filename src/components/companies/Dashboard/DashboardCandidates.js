import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useThemeContext';

const DashboardCandidates = () => {
  const { isDarkMode } = useTheme();
  const [savedCandidates, setSavedCandidates] = useState([]);

  useEffect(() => {
    // Load saved candidates from localStorage
    const savedCandidatesData = localStorage.getItem('savedCandidates');
    if (savedCandidatesData) {
      setSavedCandidates(JSON.parse(savedCandidatesData));
    } else {
      // Mock data for demonstration
      const mockCandidates = [
        {
          id: 1,
          name: "Sara Ahmed",
          avatar: "SA",
          position: "UI Designer",
          skills: ["Figma", "UI/UX", "Prototyping"],
          experience: "3 years",
          location: "Riyadh, Saudi Arabia",
          savedDate: "2 days ago"
        },
        {
          id: 2,
          name: "Mohammed Ali",
          avatar: "MA",
          position: "Frontend Developer",
          skills: ["React", "JavaScript", "CSS", "TypeScript"],
          experience: "5 years",
          location: "Dubai, UAE",
          savedDate: "1 week ago"
        },
        {
          id: 3,
          name: "Fatima Hassan",
          avatar: "FH",
          position: "Backend Developer",
          skills: ["Node.js", "Python", "MongoDB", "Docker"],
          experience: "4 years",
          location: "Jeddah, Saudi Arabia",
          savedDate: "2 weeks ago"
        },
        {
          id: 4,
          name: "Khalid Omar",
          avatar: "KO",
          position: "Full Stack Developer",
          skills: ["React", "Node.js", "Express", "MongoDB"],
          experience: "6 years",
          location: "Dammam, Saudi Arabia",
          savedDate: "3 weeks ago"
        }
      ];
      setSavedCandidates(mockCandidates);
      localStorage.setItem('savedCandidates', JSON.stringify(mockCandidates));
    }
  }, []);

  const handleContactCandidate = (candidateId) => {
    // In a real application, this would open a contact modal or navigate to candidate profile
    console.log(`Contact candidate ${candidateId}`);
  };

  const handleRemoveCandidate = (candidateId) => {
    const updatedCandidates = savedCandidates.filter(candidate => candidate.id !== candidateId);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  return (
    <div className={`min-h-screen p-6 transition-all duration-300 ${
      isDarkMode ? 'bg-[#20232A] text-white' : 'bg-gray-50 text-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold mb-2 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Saved Candidates
          </h1>
          <p className={`text-lg ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Manage your saved candidate profiles
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className={`rounded-xl p-6 transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-lg' 
              : 'bg-white border border-gray-200 shadow-lg'
          }`}>
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-teal-500 to-cyan-600' 
                  : 'bg-gradient-to-br from-teal-500 to-cyan-600'
              }`}>
                <span className="text-2xl">💾</span>
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {savedCandidates.length}
                </h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Total Saved
                </p>
              </div>
            </div>
          </div>

          <div className={`rounded-xl p-6 transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-lg' 
              : 'bg-white border border-gray-200 shadow-lg'
          }`}>
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                  : 'bg-gradient-to-br from-blue-500 to-blue-600'
              }`}>
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {savedCandidates.filter(c => c.skills.includes('React')).length}
                </h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  React Developers
                </p>
              </div>
            </div>
          </div>

          <div className={`rounded-xl p-6 transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-lg' 
              : 'bg-white border border-gray-200 shadow-lg'
          }`}>
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-purple-500 to-purple-600' 
                  : 'bg-gradient-to-br from-purple-500 to-purple-600'
              }`}>
                <span className="text-2xl">⭐</span>
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {savedCandidates.filter(c => c.experience.includes('5') || c.experience.includes('6')).length}
                </h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Senior Level
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Candidates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedCandidates.map((candidate) => (
            <div key={candidate.id} className={`rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-lg hover:shadow-xl hover:shadow-teal-500/20' 
                : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:shadow-teal-400/20'
            }`}>
              {/* Candidate Header */}
              <div className={`p-6 border-b ${
                isDarkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-3 text-white font-bold ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-teal-500 to-cyan-600' 
                        : 'bg-gradient-to-br from-teal-500 to-cyan-600'
                    }`}>
                      {candidate.avatar}
                    </div>
                    <div>
                      <h4 className={`font-bold text-lg ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {candidate.name}
                      </h4>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {candidate.position}
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    isDarkMode 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-green-100 text-green-700 border border-green-200'
                  }`}>
                    {candidate.experience}
                  </span>
                </div>
                
                <div className={`flex items-center text-sm space-x-4 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    {candidate.location}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                    {candidate.savedDate}
                  </span>
                </div>
              </div>

              {/* Skills */}
              <div className="p-6">
                <div className="mb-4">
                  <h5 className={`text-sm font-semibold mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Skills
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {candidate.skills.map((skill, index) => (
                      <span key={index} className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30 hover:bg-teal-500/30' 
                          : 'bg-teal-100 text-teal-700 border border-teal-200 hover:bg-teal-200'
                      }`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button 
                    className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-lg hover:shadow-teal-500/30' 
                        : 'bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-lg hover:shadow-teal-400/30'
                    }`}
                    onClick={() => handleContactCandidate(candidate.id)}
                  >
                    Contact
                  </button>
                  <button 
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                      isDarkMode 
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30' 
                        : 'bg-red-100 text-red-700 border border-red-200 hover:bg-red-200'
                    }`}
                    onClick={() => handleRemoveCandidate(candidate.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {savedCandidates.length === 0 && (
          <div className="text-center py-16">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
              isDarkMode 
                ? 'bg-gray-800/50' 
                : 'bg-gray-100'
            }`}>
              <span className="text-4xl opacity-50">👥</span>
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              No saved candidates yet
            </h3>
            <p className={`text-sm ${
              isDarkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              Start exploring and saving candidate profiles
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardCandidates;
