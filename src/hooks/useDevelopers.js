import { useState, useEffect } from 'react';
import { developersRepository } from '../services/repositories/developers.repo.js';

export const useDevelopers = () => {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDevelopers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await developersRepository.getDevelopers();
      setDevelopers(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch developers');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevelopers();
  }, []);

  return {
    developers,
    loading,
    error,
    refetch: fetchDevelopers,
  };
};
