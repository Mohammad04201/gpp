import { useState, useEffect } from 'react';
import { companiesRepository } from '../services/repositories/companies.repo.js';

export const useCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCompanies = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await companiesRepository.getCompanies();
      setCompanies(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch companies');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return {
    companies,
    loading,
    error,
    refetch: fetchCompanies,
  };
};
