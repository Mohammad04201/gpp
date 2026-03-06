import { Link } from 'react-router-dom';

function CompaniesHeader() {
  return (
    <section className="text-center mb-5">
      <h1 className="display-5 fw-bold mb-3">🏢 الشركات</h1>
      <p className="lead text-white-50 mb-4">
        استكشف أفضل الشركات في المنطقة وفرص العمل المتاحة
      </p>
      <Link to="/register/company" className="btn btn-primary btn-lg">
        انشر وظائفك
      </Link>
    </section>
  );
}

export default CompaniesHeader;
