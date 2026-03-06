import { useState } from 'react';

function AdditionalCompanyInfo() {
  const [additionalData, setAdditionalData] = useState({
    website: '',
    foundedYear: '',
    employeesCount: '',
    industry: '',
    workingHours: '',
    slogan: '',
    coverImage: null
  });

  const handleInputChange = (field, value) => {
    setAdditionalData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (field, file) => {
    setAdditionalData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  return (
    <div className="glass-card">
      <div className="p-4">
        <h3 className="h5 mb-4">📝 معلومات إضافية</h3>
        
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label small">الموقع الإلكتروني</label>
            <input
              type="url"
              className="form-control"
              value={additionalData.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
              placeholder="https://www.company.com"
            />
          </div>
          
          <div className="col-md-6">
            <label className="form-label small">سنة التأسيس</label>
            <input
              type="number"
              className="form-control"
              value={additionalData.foundedYear}
              onChange={(e) => handleInputChange('foundedYear', e.target.value)}
              placeholder="2020"
              min="1900"
              max={new Date().getFullYear()}
            />
          </div>
          
          <div className="col-md-6">
            <label className="form-label small">عدد الموظفين</label>
            <input
              type="number"
              className="form-control"
              value={additionalData.employeesCount}
              onChange={(e) => handleInputChange('employeesCount', e.target.value)}
              placeholder="50"
              min="1"
            />
          </div>
          
          <div className="col-md-6">
            <label className="form-label small">مجال العمل</label>
            <select
              className="form-select"
              value={additionalData.industry}
              onChange={(e) => handleInputChange('industry', e.target.value)}
            >
              <option value="">اختر المجال</option>
              <option value="technology">التقنية</option>
              <option value="finance">التمويل والبنوك</option>
              <option value="healthcare">الرعاية الصحية</option>
              <option value="education">التعليم</option>
              <option value="retail">التجزئة</option>
              <option value="manufacturing">التصنيع</option>
              <option value="consulting">الاستشارات</option>
              <option value="media">الإعلام والتسويق</option>
              <option value="real-estate">العقارات</option>
              <option value="transportation">النقل والخدمات اللوجستية</option>
              <option value="energy">الطاقة</option>
              <option value="agriculture">الزراعة</option>
              <option value="other">أخرى</option>
            </select>
          </div>
          
          <div className="col-md-6">
            <label className="form-label small">ساعات العمل</label>
            <input
              type="text"
              className="form-control"
              value={additionalData.workingHours}
              onChange={(e) => handleInputChange('workingHours', e.target.value)}
              placeholder="9:00 - 17:00"
            />
          </div>
          
          <div className="col-md-6">
            <label className="form-label small">الشعار المختصر</label>
            <input
              type="text"
              className="form-control"
              value={additionalData.slogan}
              onChange={(e) => handleInputChange('slogan', e.target.value)}
              placeholder="شعار شركتك المميز"
            />
          </div>
          
          <div className="col-12">
            <label className="form-label small">صورة الغلاف</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => handleFileChange('coverImage', e.target.files[0])}
            />
            <small className="text-white-50">صورة غلاف للشركة (اختياري)</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdditionalCompanyInfo;
