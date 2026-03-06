import CompanyCard from './CompanyCard';

function CompaniesList({ companies }) {
  if (companies.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="empty-state-icon mb-3">🔍</div>
        <h4 className="h5 mb-3">لم يتم العثور على شركات</h4>
        <p className="text-white-50">
          جرب تغيير معايير البحث أو المرشحات
        </p>
      </div>
    );
  }

  return (
    <section className="mb-5">
      <div className="row g-4">
        {companies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </section>
  );
}

export default CompaniesList;
