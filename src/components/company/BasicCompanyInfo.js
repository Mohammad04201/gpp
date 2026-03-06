import { useState } from 'react';
import '../../styles/CompanyDashboard.css';
import CompanyProfileView from './CompanyProfileView';

function BasicCompanyInfo() {
  const [companyData, setCompanyData] = useState({
    companyName: '',
    companyLogo: null,
    description: '',
    companyType: '',
    country: '',
    city: '',
    address: '',
    email: '',
    phoneNumber: ''
  });

  const [isSaved, setIsSaved] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleInputChange = (field, value) => {
    setCompanyData(prev => ({
      ...prev,
      [field]: value
    }));
    setIsSaved(false);
  };

  const handleFileChange = (field, file) => {
    setCompanyData(prev => ({
      ...prev,
      [field]: file
    }));
    setIsSaved(false);
  };

  const handleSave = () => {
    // Save data to localStorage (simulated backend)
    localStorage.setItem('companyBasicInfo', JSON.stringify(companyData));
    setIsSaved(true);
    
    // Show success message
    setTimeout(() => {
      setIsSaved(false);
    }, 3000);
  };

  const handleViewProfile = () => {
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  return (
    <div className="glass-card">
      <div className="p-4">
        <h3 className="h5 mb-4">📋 المعلومات الأساسية</h3>
        
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label small">اسم الشركة *</label>
            <input
              type="text"
              className="form-control"
              value={companyData.companyName}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
              placeholder="أدخل اسم الشركة الرسمي"
            />
          </div>
          
          <div className="col-md-6">
            <label className="form-label small">شعار الشركة</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => handleFileChange('companyLogo', e.target.files[0])}
            />
          </div>
          
          <div className="col-12">
            <label className="form-label small">وصف الشركة *</label>
            <textarea
              className="form-control"
              rows={3}
              value={companyData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="اكتب وصف مختصر لنشاط الشركة"
            />
          </div>
          
          <div className="col-md-6">
            <label className="form-label small">نوع الشركة *</label>
            <select
              className="form-select"
              value={companyData.companyType}
              onChange={(e) => handleInputChange('companyType', e.target.value)}
            >
              <option value="">اختر نوع الشركة</option>
              <option value="startup">ناشئة</option>
              <option value="enterprise">مؤسسة كبيرة</option>
              <option value="sme">مؤسسة صغيرة ومتوسطة</option>
              <option value="freelance">عمل حر</option>
            </select>
          </div>
          
          <div className="col-md-6">
            <label className="form-label small">الدولة *</label>
            <select
              className="form-select"
              value={companyData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
            >
              <option value="">اختر الدولة</option>
              <option value="sa">السعودية</option>
              <option value="ae">الإمارات</option>
              <option value="eg">مصر</option>
              <option value="jo">الأردن</option>
              <option value="qa">قطر</option>
              <option value="bh">البحرين</option>
              <option value="kw">الكويت</option>
              <option value="om">عمان</option>
              <option value="lb">لبنان</option>
              <option value="tn">تونس</option>
              <option value="ma">المغرب</option>
              <option value="dz">الجزائر</option>
              <option value="iq">العراق</option>
              <option value="ye">اليمن</option>
              <option value="sd">السودان</option>
              <option value="ly">ليبيا</option>
              <option value="ps">فلسطين</option>
            </select>
          </div>
          
          <div className="col-md-6">
            <label className="form-label small">المدينة *</label>
            <input
              type="text"
              className="form-control"
              value={companyData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              placeholder="أدخل المدينة"
            />
          </div>
          
          <div className="col-md-6">
            <label className="form-label small">البريد الإلكتروني *</label>
            <input
              type="email"
              className="form-control"
              value={companyData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="example@company.com"
            />
          </div>
          
          <div className="col-md-6">
            <label className="form-label small">رقم الهاتف *</label>
            <input
              type="tel"
              className="form-control"
              value={companyData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              placeholder="+966 5x xxx xxxx"
            />
          </div>
          
          <div className="col-12">
            <label className="form-label small">العنوان التفصيلي *</label>
            <input
              type="text"
              className="form-control"
              value={companyData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              placeholder="أدخل العنوان الكامل للشركة"
            />
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="action-buttons d-flex gap-3 mt-4">
          <button 
            className="btn btn-primary"
            onClick={handleSave}
          >
            💾 حفظ البيانات
          </button>
          <button 
            className="btn btn-outline-primary"
            onClick={handleViewProfile}
          >
            👁️ عرض البروفايل
          </button>
        </div>

        {/* Success Message */}
        {isSaved && (
          <div className="alert alert-success mt-3">
            ✅ تم حفظ البيانات بنجاح!
          </div>
        )}

        {/* Profile Modal */}
        {showProfile && (
          <div className="profile-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">🏢 بروفايل الشركة</h4>
                <button 
                  className="btn-close"
                  onClick={handleCloseProfile}
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <CompanyProfileView />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BasicCompanyInfo;
