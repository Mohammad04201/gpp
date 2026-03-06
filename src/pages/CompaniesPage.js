import { Link } from 'react-router-dom';
import CompanyProfileView from '../components/company/CompanyProfileView';

function CompaniesPage() {
  return (
    <div className="container py-4">
      <div className="text-center mb-4">
        <Link to="/" className="btn btn-outline-light btn-sm mb-3">
          ← Back to Home
        </Link>
      </div>
      
      {/* Company Profile View */}
      <CompanyProfileView />
    </div>
  );
}

export default CompaniesPage;

