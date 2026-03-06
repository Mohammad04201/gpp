import { useState } from 'react';
import '../../styles/CompanyDashboard.css';

function Services() {
  const [services, setServices] = useState([
    {
      id: 1,
      serviceName: '',
      description: '',
      price: '',
      serviceImage: null
    }
  ]);

  const handleServiceChange = (id, field, value) => {
    setServices(prev => 
      prev.map(service => 
        service.id === id ? { ...service, [field]: value } : service
      )
    );
  };

  const handleFileChange = (id, file) => {
    setServices(prev => 
      prev.map(service => 
        service.id === id ? { ...service, serviceImage: file } : service
      )
    );
  };

  const addService = () => {
    const newService = {
      id: Date.now(),
      serviceName: '',
      description: '',
      price: '',
      serviceImage: null
    };
    setServices(prev => [...prev, newService]);
  };

  const removeService = (id) => {
    setServices(prev => prev.filter(service => service.id !== id));
  };

  return (
    <div className="glass-card">
      <div className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="h5 mb-0">🛠️ الخدمات</h3>
          <button 
            className="btn btn-primary btn-sm"
            onClick={addService}
          >
            + إضافة خدمة
          </button>
        </div>
        
        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={service.id} className="service-card">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="mb-0 fw-bold">الخدمة #{index + 1}</h6>
                {services.length > 1 && (
                  <button 
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeService(service.id)}
                  >
                    حذف
                  </button>
                )}
              </div>
              
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small">اسم الخدمة *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={service.serviceName}
                    onChange={(e) => handleServiceChange(service.id, 'serviceName', e.target.value)}
                    placeholder="مثال: تطوير تطبيقات الجوال"
                  />
                </div>
                
                <div className="col-md-6">
                  <label className="form-label small">السعر (اختياري)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={service.price}
                    onChange={(e) => handleServiceChange(service.id, 'price', e.target.value)}
                    placeholder="1000"
                    min="0"
                  />
                </div>
                
                <div className="col-12">
                  <label className="form-label small">وصف الخدمة *</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={service.description}
                    onChange={(e) => handleServiceChange(service.id, 'description', e.target.value)}
                    placeholder="اكتب وصف مفصل للخدمة التي تقدمها"
                  />
                </div>
                
                <div className="col-md-6">
                  <label className="form-label small">صورة الخدمة (اختياري)</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={(e) => handleFileChange(service.id, e.target.files[0])}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {services.length === 0 && (
          <div className="text-center py-4">
            <p className="text-white-50 mb-3">لا توجد خدمات مضافة حالياً</p>
            <button 
              className="btn btn-primary"
              onClick={addService}
            >
              إضافة خدمة جديدة
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
