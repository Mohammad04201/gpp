import React from 'react';

const ContactFormModal = ({ show, post, contactData, onClose, onSubmit, onInputChange }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800/95 rounded-xl border border-gray-700 p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold text-white mb-4">Apply for Job: {post.title}</h3>
        
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 text-sm mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={contactData.name}
              onChange={onInputChange}
              required
              className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-teal-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={contactData.email}
              onChange={onInputChange}
              required
              className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-teal-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={contactData.phone}
              onChange={onInputChange}
              required
              className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-teal-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">Cover Letter</label>
            <textarea
              name="message"
              value={contactData.message}
              onChange={onInputChange}
              rows="3"
              placeholder="Tell us why you want to join our team..."
              className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-teal-500 focus:outline-none resize-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">Resume (CV) *</label>
            <input
              type="file"
              name="cv"
              onChange={onInputChange}
              accept=".pdf,.doc,.docx"
              required
              className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-teal-500 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-500 file:text-white hover:file:bg-teal-600 transition-colors"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Submit Application
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
