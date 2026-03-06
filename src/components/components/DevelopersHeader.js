import { Link } from 'react-router-dom';

function DevelopersHeader() {
  return (
    <section className="text-center mb-5">
      <h1 className="display-5 fw-bold mb-3">👨‍💻 المطورون</h1>
      <p className="lead text-white-50 mb-4">
        استكشف أفضل المطورين في المنطقة وتواصل معهم مباشرة
      </p>
      <Link to="/register/developer" className="btn btn-primary btn-lg">
        انضم كمطور
      </Link>
    </section>
  );
}

export default DevelopersHeader;
