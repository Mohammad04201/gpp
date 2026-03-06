import httpClient from '../api/httpClient.js';

export class ApiAdapter {
  // Companies methods
  async getCompanies() {
    try {
      const response = await httpClient.get('/companies');
      return response.data || response;
    } catch (error) {
      console.error('Error fetching companies:', error);
      throw error;
    }
  }

  async getCompanyById(id) {
    try {
      const response = await httpClient.get(`/companies/${id}`);
      return response.data || response;
    } catch (error) {
      if (error.response?.status === 404) {
        return null;
      }
      console.error('Error fetching company:', error);
      throw error;
    }
  }

  // Developers methods
  async getDevelopers() {
    try {
      const response = await httpClient.get('/developers');
      return response.data || response;
    } catch (error) {
      console.error('Error fetching developers:', error);
      throw error;
    }
  }

  async getDeveloperById(id) {
    try {
      const response = await httpClient.get(`/developers/${id}`);
      return response.data || response;
    } catch (error) {
      if (error.response?.status === 404) {
        return null;
      }
      console.error('Error fetching developer:', error);
      throw error;
    }
  }
}
