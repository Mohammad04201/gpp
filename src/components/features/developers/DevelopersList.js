import DeveloperCard from './DeveloperCard';

function DevelopersList({ developers }) {
  if (developers.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="empty-state-icon mb-3">🔍</div>
        <h4 className="h5 mb-3">لم يتم العثور على مطورين</h4>
        <p className="text-white-50">
          جرب تغيير معايير البحث أو المرشحات
        </p>
      </div>
    );
  }

  return (
    <section className="mb-5">
      <div className="row g-4">
        {developers.map((developer) => (
          <DeveloperCard key={developer.id} developer={developer} />
        ))}
      </div>
    </section>
  );
}

export default DevelopersList;
