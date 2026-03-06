import { useState } from 'react';

function Branches() {
  const [branches, setBranches] = useState([
    {
      id: 1,
      branchName: '',
      city: '',
      address: '',
      phoneNumber: ''
    }
  ]);

  const handleBranchChange = (id, field, value) => {
    setBranches(prev => 
      prev.map(branch => 
        branch.id === id ? { ...branch, [field]: value } : branch
      )
    );
  };

  const addBranch = () => {
    const newBranch = {
      id: Date.now(),
      branchName: '',
      city: '',
      address: '',
      phoneNumber: ''
    };
    setBranches(prev => [...prev, newBranch]);
  };

  const removeBranch = (id) => {
    setBranches(prev => prev.filter(branch => branch.id !== id));
  };

  return (
    <div className="glass-card">
      <div className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="h5 mb-0">🏢 فروع الشركة</h3>
          <button 
            className="btn btn-primary btn-sm"
            onClick={addBranch}
          >
            + إضافة فرع
          </button>
        </div>
        
        <div className="space-y-4">
          {branches.map((branch, index) => (
            <div key={branch.id} className="border border-secondary rounded-3 p-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="mb-0">الفرع #{index + 1}</h6>
                {branches.length > 1 && (
                  <button 
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeBranch(branch.id)}
                  >
                    حذف
                  </button>
                )}
              </div>
              
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small">اسم الفرع</label>
                  <input
                    type="text"
                    className="form-control"
                    value={branch.branchName}
                    onChange={(e) => handleBranchChange(branch.id, 'branchName', e.target.value)}
                    placeholder="مثال: الفرع الرئيسي"
                  />
                </div>
                
                <div className="col-md-6">
                  <label className="form-label small">المدينة</label>
                  <input
                    type="text"
                    className="form-control"
                    value={branch.city}
                    onChange={(e) => handleBranchChange(branch.id, 'city', e.target.value)}
                    placeholder="مثال: الرياض"
                  />
                </div>
                
                <div className="col-md-6">
                  <label className="form-label small">العنوان</label>
                  <input
                    type="text"
                    className="form-control"
                    value={branch.address}
                    onChange={(e) => handleBranchChange(branch.id, 'address', e.target.value)}
                    placeholder="العنوان التفصيلي للفرع"
                  />
                </div>
                
                <div className="col-md-6">
                  <label className="form-label small">رقم الهاتف</label>
                  <input
                    type="tel"
                    className="form-control"
                    value={branch.phoneNumber}
                    onChange={(e) => handleBranchChange(branch.id, 'phoneNumber', e.target.value)}
                    placeholder="+966 5x xxx xxxx"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {branches.length === 0 && (
          <div className="text-center py-4">
            <p className="text-white-50 mb-3">لا توجد فروع مضافة حالياً</p>
            <button 
              className="btn btn-primary"
              onClick={addBranch}
            >
              إضافة فرع جديد
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Branches;
