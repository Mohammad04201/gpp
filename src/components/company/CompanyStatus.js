import { useState } from 'react';

function CompanyStatus() {
  const [status, setStatus] = useState('active');

  const statusOptions = [
    {
      value: 'active',
      label: 'نشط',
      color: 'success',
      icon: '✅',
      description: 'الشركة نشطة وتقبل المشاريع الجديدة'
    },
    {
      value: 'pending',
      label: 'قيد المراجعة',
      color: 'warning',
      icon: '⏳',
      description: 'الشركة قيد مراجعة المعلومات من قبل الإدارة'
    },
    {
      value: 'suspended',
      label: 'موقوف',
      color: 'danger',
      icon: '⏸️',
      description: 'الشركة موقوفة مؤقتاً عن النشاط'
    }
  ];

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const currentStatus = statusOptions.find(option => option.value === status);

  return (
    <div className="glass-card">
      <div className="p-4">
        <h3 className="h5 mb-4">📊 حالة الشركة</h3>
        
        <div className="mb-4">
          <div className={`alert alert-${currentStatus.color} d-flex align-items-center gap-3`}>
            <span className="fs-4">{currentStatus.icon}</span>
            <div>
              <h6 className="mb-1">الحالة الحالية: {currentStatus.label}</h6>
              <small className="mb-0">{currentStatus.description}</small>
            </div>
          </div>
        </div>
        
        <div className="mb-3">
          <label className="form-label small">تغيير حالة الشركة</label>
          <div className="row g-2">
            {statusOptions.map((option) => (
              <div className="col-md-4" key={option.value}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="companyStatus"
                    id={`status-${option.value}`}
                    value={option.value}
                    checked={status === option.value}
                    onChange={() => handleStatusChange(option.value)}
                  />
                  <label 
                    className={`form-check-label border rounded-3 p-3 d-flex align-items-center gap-2 cursor-pointer ${
                      status === option.value 
                        ? `border-${option.color} bg-${option.color} bg-opacity-10` 
                        : 'border-secondary'
                    }`}
                    htmlFor={`status-${option.value}`}
                  >
                    <span>{option.icon}</span>
                    <div>
                      <div className="fw-bold">{option.label}</div>
                      <small className="text-white-50">{option.description}</small>
                    </div>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-3">
          <small className="text-white-50">
            ملاحظة: تغيير حالة الشركة قد يؤثر على ظهورها في نتائج البحث والقدرة على استقبال المشاريع الجديدة
          </small>
        </div>
      </div>
    </div>
  );
}

export default CompanyStatus;
