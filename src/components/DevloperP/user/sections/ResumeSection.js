import React, { useState } from 'react';

function ResumeSection({ cvFile, onChange }) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileSelect = (file) => {
    if (!file) return;
    
    // Check file type (PDF, DOC, DOCX)
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      alert('Please upload PDF or Word files only');
      return;
    }
    
    // Check file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    // Simulate file upload
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Save file as Base64
          const reader = new FileReader();
          reader.onload = (e) => {
            onChange({
              name: file.name,
              size: file.size,
              type: file.type,
              data: e.target.result,
              uploadedAt: new Date().toISOString()
            });
          };
          reader.readAsDataURL(file);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const removeCV = () => {
    onChange(null);
    setUploadProgress(0);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white mb-4">Resume (CV)</h3>
      
      {/* Upload new file */}
      {!cvFile && (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
            isDragging 
              ? 'border-blue-500 bg-blue-500/10' 
              : 'border-[#3a4750] hover:border-gray-500'
          }`}
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-[#3a4750] rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <p className="text-white font-medium mb-2">Drag CV file here or click to choose</p>
          <p className="text-gray-400 text-sm mb-4">PDF, DOC, DOCX (up to 5MB)</p>
          <input
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(e) => handleFileSelect(e.target.files[0])}
            className="hidden"
            id="cv-upload"
          />
          <label
            htmlFor="cv-upload"
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer transition-colors inline-block"
          >
            Choose File
          </label>

          {/* Progress bar */}
          {uploadProgress > 0 && uploadProgress < 100 && (
            <div className="mt-4">
              <div className="w-full bg-[#3a4750] rounded-full h-2">
                <div 
                  className="h-2 rounded-full bg-blue-500 transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">Uploading... {uploadProgress}%</p>
            </div>
          )}
        </div>
      )}

      {/* Display uploaded file */}
      {cvFile && (
        <div className="bg-[#1a1d23] rounded-xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white font-medium truncate">{cvFile.name}</h4>
              <p className="text-gray-400 text-sm">{formatFileSize(cvFile.size)} • Uploaded {new Date(cvFile.uploadedAt).toLocaleDateString('en-US')}</p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={cvFile.data}
                download={cvFile.name}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-sm"
              >
                Download
              </a>
              <button
                onClick={removeCV}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors text-sm"
              >
                Delete
              </button>
            </div>
          </div>

          {/* PDF preview */}
          {cvFile.type === 'application/pdf' && (
            <div className="border border-[#3a4750] rounded-lg overflow-hidden">
              <div className="bg-[#282C34] p-3 border-b border-[#3a4750]">
                <span className="text-sm text-gray-400">File Preview</span>
              </div>
              <iframe
                src={cvFile.data}
                className="w-full h-64 bg-white"
                title="CV Preview"
              />
            </div>
          )}

          {/* For non-PDF files */}
          {cvFile.type !== 'application/pdf' && (
            <div className="border border-[#3a4750] rounded-lg p-6 text-center">
              <p className="text-gray-400 mb-2">Preview not available for Word files</p>
              <a
                href={cvFile.data}
                download={cvFile.name}
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Download file to preview
              </a>
            </div>
          )}
        </div>
      )}

      {/* Tips */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
        <h5 className="text-blue-400 font-medium mb-2 flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
          </svg>
          Tips for a successful resume
        </h5>
        <ul className="text-gray-400 text-sm space-y-1 mr-5">
          <li>• Use PDF format to preserve formatting</li>
          <li>• Keep the file under two pages</li>
          <li>• Use keywords related to your field</li>
          <li>• Proofread the file before uploading</li>
        </ul>
      </div>
    </div>
  );
}

export default ResumeSection;
