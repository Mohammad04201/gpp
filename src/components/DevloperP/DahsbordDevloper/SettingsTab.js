import React from 'react';

function SettingsTab({ currentDeveloper }) {
  return (
    <div className="dashboard-settings">
      <h2>Developer Settings</h2>
      {currentDeveloper && (
        <div className="settings-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" defaultValue={currentDeveloper.name} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" defaultValue={`${currentDeveloper.name.toLowerCase().replace(' ', '.')}@example.com`} />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" defaultValue="+966 50 123 4567" />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input type="text" defaultValue={currentDeveloper.location} />
          </div>
          <div className="form-group">
            <label>Bio</label>
            <textarea rows="4" defaultValue={currentDeveloper.bio} />
          </div>
          <div className="form-group">
            <label>Job Preferences</label>
            <select>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Freelance</option>
            </select>
          </div>
          <button className="btn-save">Save Changes</button>
        </div>
      )}
    </div>
  );
}

export default SettingsTab;
