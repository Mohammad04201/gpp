import { useState } from 'react';
import MainNavbar from '../layout/MainNavbar';

function CompanyProfileForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    companyLogo: '',
    description: '',
    country: '',
    city: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    industry: '',
    employees: '',
    foundedYear: '',
    socialMedia: {
      linkedin: '',
      twitter: '',
      facebook: '',
      instagram: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('socialMedia.')) {
      const socialField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        socialMedia: {
          ...prev.socialMedia,
          [socialField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Company Profile Data:', formData);
    // Add form submission logic here
  };

  const industries = [
    'التقنية والمعلومات',
    'التمويل والبنوك',
    'الرعاية الصحية',
    'التعليم',
    'التجارة الإلكترونية',
    'التصنيع',
    'الخدمات الاستشارية',
    'الطاقة',
    'النقل والخدمات اللوجستية',
    'أخرى'
  ];

  const employeeRanges = [
    '1-10',
    '11-50',
    '51-200',
    '201-500',
    '501-1000',
    '1000+'
  ];

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="glass-card">
                <div className="p-4 p-md-5">
                  <div className="text-center mb-5">
                    <h1 className="h2 mb-3">🏢 الملف الشخصي للشركة</h1>
                    <p className="text-white-50">
                      أكمل معلومات شركتك لجذب أفضل المواهب التقنية
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      {/* Basic Information */}
                      <div className="col-12">
                        <h3 className="h5 mb-4 text-primary">📋 المعلومات الأساسية</h3>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">
                          اسم الشركة <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">
                          شعار الشركة <span className="text-danger">*</span>
                        </label>
                        <input
                          type="url"
                          className="form-control"
                          name="companyLogo"
                          value={formData.companyLogo}
                          onChange={handleChange}
                          placeholder="https://example.com/logo.png"
                          required
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">
                          الوصف <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          rows="4"
                          placeholder="صف شركتك وأنشطتها الرئيسية..."
                          required
                        />
                      </div>

                      {/* Location Information */}
                      <div className="col-12 mt-4">
                        <h3 className="h5 mb-4 text-primary">📍 معلومات الموقع</h3>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">
                          الدولة <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-select"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                        >
                          <option value="">اختر الدولة</option>
                          <option value="SA">المملكة العربية السعودية</option>
                          <option value="AE">الإمارات العربية المتحدة</option>
                          <option value="EG">مصر</option>
                          <option value="JO">الأردن</option>
                          <option value="QA">قطر</option>
                          <option value="BH">البحرين</option>
                          <option value="KW">الكويت</option>
                          <option value="OM">عمان</option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">
                          المدينة <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">
                          العنوان <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Contact Information */}
                      <div className="col-12 mt-4">
                        <h3 className="h5 mb-4 text-primary">📞 معلومات الاتصال</h3>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">
                          الهاتف <span className="text-danger">*</span>
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">
                          البريد الإلكتروني <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">الموقع الإلكتروني</label>
                        <input
                          type="url"
                          className="form-control"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="https://example.com"
                        />
                      </div>

                      {/* Company Details */}
                      <div className="col-12 mt-4">
                        <h3 className="h5 mb-4 text-primary">🏭 تفاصيل الشركة</h3>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">المجال</label>
                        <select
                          className="form-select"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                        >
                          <option value="">اختر المجال</option>
                          {industries.map((industry, index) => (
                            <option key={index} value={industry}>
                              {industry}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">عدد الموظفين</label>
                        <select
                          className="form-select"
                          name="employees"
                          value={formData.employees}
                          onChange={handleChange}
                        >
                          <option value="">اختر النطاق</option>
                          {employeeRanges.map((range, index) => (
                            <option key={index} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">سنة التأسيس</label>
                        <input
                          type="number"
                          className="form-control"
                          name="foundedYear"
                          value={formData.foundedYear}
                          onChange={handleChange}
                          min="1900"
                          max={new Date().getFullYear()}
                          placeholder="2020"
                        />
                      </div>

                      {/* Social Media */}
                      <div className="col-12 mt-4">
                        <h3 className="h5 mb-4 text-primary">📱 وسائل التواصل الاجتماعي</h3>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">LinkedIn</label>
                        <input
                          type="url"
                          className="form-control"
                          name="socialMedia.linkedin"
                          value={formData.socialMedia.linkedin}
                          onChange={handleChange}
                          placeholder="https://linkedin.com/company/example"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Twitter</label>
                        <input
                          type="url"
                          className="form-control"
                          name="socialMedia.twitter"
                          value={formData.socialMedia.twitter}
                          onChange={handleChange}
                          placeholder="https://twitter.com/example"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Facebook</label>
                        <input
                          type="url"
                          className="form-control"
                          name="socialMedia.facebook"
                          value={formData.socialMedia.facebook}
                          onChange={handleChange}
                          placeholder="https://facebook.com/example"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Instagram</label>
                        <input
                          type="url"
                          className="form-control"
                          name="socialMedia.instagram"
                          value={formData.socialMedia.instagram}
                          onChange={handleChange}
                          placeholder="https://instagram.com/example"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="col-12 mt-5">
                        <div className="d-flex justify-content-between">
                          <button
                            type="button"
                            className="btn btn-secondary btn-lg"
                            onClick={() => window.history.back()}
                          >
                            إلغاء
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg px-5"
                          >
                            حفظ الملف الشخصي
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .form-control, .form-select {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
        }

        .form-control:focus, .form-select:focus {
          background: rgba(255, 255, 255, 0.1);
          border-color: #007bff;
          color: white;
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }

        .form-control::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .form-select option {
          background: #2d3748;
          color: white;
        }
      `}</style>
    </div>
  );
}

export default CompanyProfileForm;
