import React from 'react';

const EditCompanyHeader = ({ completion, onSave, onCancel }) => {
  return (
    <div className="p-6 border-b border-[#3a4750] flex items-center justify-between bg-[#1a1d23]">
      <div>
        <h2 className="text-2xl font-bold text-white">Edit Company Profile</h2>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm text-gray-400">Completion Rate:</span>
          <div className="w-24 bg-[#3a4750] rounded-full h-2">
            <div 
              className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500"
              style={{ width: `${completion}%` }}
            ></div>
          </div>
          <span className="text-sm font-bold text-green-400">{completion}%</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button 
          onClick={onSave}
          className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
        >
          Save ✓
        </button>
        <button 
          onClick={onCancel}
          className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
        >
          Cancel ✕
        </button>
      </div>
    </div>
  );
};

export default EditCompanyHeader;
