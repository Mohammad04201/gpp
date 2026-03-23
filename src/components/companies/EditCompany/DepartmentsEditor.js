import React, { useState } from 'react';
import { useTheme } from '../../hooks/useThemeContext';

const DepartmentsEditor = ({ departments, onChange }) => {
  const { isDarkMode } = useTheme();
  const [newDepartment, setNewDepartment] = useState({ 
    name: '', 
    description: '', 
    employees: '',
    isHiring: false
  });

  const addDepartment = () => {
    if (newDepartment.name.trim()) {
      onChange([...departments, { 
        ...newDepartment, 
        name: newDepartment.name.trim()
      }]);
      setNewDepartment({ name: '', description: '', employees: '', isHiring: false });
    }
  };

  const removeDepartment = (index) => {
    onChange(departments.filter((_, i) => i !== index));
  };

  const toggleHiring = (index) => {
    const updated = [...departments];
    updated[index].isHiring = !updated[index].isHiring;
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={newDepartment.name}
        onChange={(e) => setNewDepartment({ ...newDepartment, name: e.target.value })}
        placeholder="Department name (e.g., Software Development)..."
        className={`w-full px-4 py-2 rounded-lg focus:outline-none transition-colors ${
          isDarkMode 
            ? 'bg-[#1a1d23] border-[#3a4750] text-white focus:border-[#11a3a3]' 
            : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
        }`}
        onKeyPress={(e) => e.key === 'Enter' && addDepartment()}
      />
      <textarea
        value={newDepartment.description}
        onChange={(e) => setNewDepartment({ ...newDepartment, description: e.target.value })}
        placeholder="Department description and main tasks..."
        rows="2"
        className={`w-full px-4 py-2 rounded-lg focus:outline-none resize-none transition-colors ${
          isDarkMode 
            ? 'bg-[#1a1d23] border-[#3a4750] text-white focus:border-[#11a3a3]' 
            : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
        }`}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          type="text"
          value={newDepartment.employees}
          onChange={(e) => setNewDepartment({ ...newDepartment, employees: e.target.value })}
          placeholder="Number of employees (e.g., 25)..."
          className={`px-4 py-2 rounded-lg focus:outline-none transition-colors ${
            isDarkMode 
              ? 'bg-[#1a1d23] border-[#3a4750] text-white focus:border-[#11a3a3]' 
              : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
          }`}
        />
        <label className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
          isDarkMode 
            ? 'bg-[#1a1d23] border-[#3a4750]' 
            : 'bg-white border-gray-200 shadow-sm'
        }`}>
          <input
            type="checkbox"
            checked={newDepartment.isHiring}
            onChange={(e) => setNewDepartment({ ...newDepartment, isHiring: e.target.checked })}
            className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Accepting Applications</span>
        </label>
      </div>
      <button
        onClick={addDepartment}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 w-full ${
          isDarkMode 
            ? 'bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-lg hover:shadow-teal-500/30' 
            : 'bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-lg hover:shadow-teal-400/30'
        }`}
      >
        Add Department +
      </button>

      <div className="space-y-2 mt-4">
        {departments.map((dept, index) => (
          <div key={index} className={`p-4 rounded-lg transition-all duration-300 ${
            isDarkMode 
              ? 'bg-[#1a1d23] border border-[#3a4750]' 
              : 'bg-white border border-gray-200 shadow-sm'
          }`}>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className={`font-medium text-lg ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{dept.name}</span>
                {dept.isHiring && (
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    isDarkMode 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-green-100 text-green-700 border border-green-200'
                  }`}>
                    Hiring
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleHiring(index)}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all duration-300 ${
                    dept.isHiring 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-gray-600 hover:bg-gray-700 text-white'
                  }`}
                >
                  {dept.isHiring ? 'Stop' : 'Hire'}
                </button>
                <button
                  onClick={() => removeDepartment(index)}
                  className={`px-2 py-1 rounded text-xs font-medium transition-all duration-300 ${
                    isDarkMode 
                      ? 'text-red-400 hover:text-red-300' 
                      : 'text-red-600 hover:text-red-700'
                  }`}
                >
                  Delete
                </button>
              </div>
            </div>
            <p className={`text-sm mb-2 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>{dept.description}</p>
            <div className={`flex items-center gap-2 text-sm ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
              </svg>
              {dept.employees} employees
            </div>
          </div>
        ))}
        {departments.length === 0 && (
          <p className={`text-center py-4 ${
            isDarkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>No departments added yet</p>
        )}
      </div>
    </div>
  );
};

export default DepartmentsEditor;
