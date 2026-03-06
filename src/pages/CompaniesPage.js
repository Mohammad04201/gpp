import { useState } from 'react';
import MainNavbar from '../components/layout/MainNavbar';
import { CompaniesHeader, CompaniesFilters, CompaniesList, CompaniesStats, companiesData } from '../components/components';

function CompaniesPage() {
  console.log('CompaniesPage component is rendering');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const filteredCompanies = companiesData.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || company.industry === selectedIndustry;
    const matchesType = selectedType === 'all' || company.jobs.some(job => job.type === selectedType);
    
    return matchesSearch && matchesIndustry && matchesType;
  });

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <CompaniesHeader />
          <CompaniesFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedIndustry={selectedIndustry}
            onIndustryChange={setSelectedIndustry}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
          />
          <CompaniesList companies={filteredCompanies} />
          <CompaniesStats companies={companiesData} />
        </div>
      </main>
    </div>
  );
}

export default CompaniesPage;
