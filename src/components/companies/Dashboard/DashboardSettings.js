import React from 'react';

const DashboardSettings = () => {
  return (
    <div className="dashboard-settings">
      <h2>Company Settings</h2>
      <div className="settings-form">
        <div className="form-group">
          <label>Company Name</label>
          <input type="text" defaultValue="Advanced Tech Company" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea rows="4" defaultValue="Leading technology company..." />
        </div>
        <div className="form-group">
          <label>Website</label>
          <input type="url" defaultValue="https://company.com" />
        </div>
        <div className="form-group">
          <label>Company Size</label>
          <select>
            <option>50-100 employees</option>
            <option>100-500 employees</option>
            <option>500+ employees</option>
          </select>
        </div>
        <button className="btn-save">Save Changes</button>
      </div>
    </div>
  );
};

export default DashboardSettings;
