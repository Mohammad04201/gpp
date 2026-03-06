import { useState } from 'react';
import '../../styles/CompanyDashboard.css';

function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: '',
      description: '',
      price: '',
      productImage: null,
      category: ''
    }
  ]);

  const handleProductChange = (id, field, value) => {
    setProducts(prev => 
      prev.map(product => 
        product.id === id ? { ...product, [field]: value } : product
      )
    );
  };

  const handleFileChange = (id, file) => {
    setProducts(prev => 
      prev.map(product => 
        product.id === id ? { ...product, productImage: file } : product
      )
    );
  };

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      productName: '',
      description: '',
      price: '',
      productImage: null,
      category: ''
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const removeProduct = (id) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const categories = [
    'برمجيات',
    'تطبيقات',
    'أجهزة',
    'خدمات سحابية',
    'استشارات',
    'تدريب',
    'أخرى'
  ];

  return (
    <div className="glass-card">
      <div className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="h5 mb-0">📦 المنتجات</h3>
          <button 
            className="btn btn-primary btn-sm"
            onClick={addProduct}
          >
            + إضافة منتج
          </button>
        </div>
        
        <div className="space-y-4">
          {products.map((product, index) => (
            <div key={product.id} className="product-card">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="mb-0 fw-bold">المنتج #{index + 1}</h6>
                {products.length > 1 && (
                  <button 
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeProduct(product.id)}
                  >
                    حذف
                  </button>
                )}
              </div>
              
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small">اسم المنتج *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={product.productName}
                    onChange={(e) => handleProductChange(product.id, 'productName', e.target.value)}
                    placeholder="مثال: نظام إدارة المشاريع"
                  />
                </div>
                
                <div className="col-md-6">
                  <label className="form-label small">الفئة *</label>
                  <select
                    className="form-select"
                    value={product.category}
                    onChange={(e) => handleProductChange(product.id, 'category', e.target.value)}
                  >
                    <option value="">اختر الفئة</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                
                <div className="col-md-6">
                  <label className="form-label small">السعر *</label>
                  <input
                    type="number"
                    className="form-control"
                    value={product.price}
                    onChange={(e) => handleProductChange(product.id, 'price', e.target.value)}
                    placeholder="1000"
                    min="0"
                    step="0.01"
                  />
                </div>
                
                <div className="col-md-6">
                  <label className="form-label small">صورة المنتج *</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={(e) => handleFileChange(product.id, e.target.files[0])}
                  />
                </div>
                
                <div className="col-12">
                  <label className="form-label small">وصف المنتج *</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={product.description}
                    onChange={(e) => handleProductChange(product.id, 'description', e.target.value)}
                    placeholder="اكتب وصف مفصل للمنتج ومميزاته"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="text-center py-4">
            <p className="text-white-50 mb-3">لا توجد منتجات مضافة حالياً</p>
            <button 
              className="btn btn-primary"
              onClick={addProduct}
            >
              إضافة منتج جديد
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
