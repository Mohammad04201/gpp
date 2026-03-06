import { mockCompanies } from '../../data/companies/companies.mock.js';
import { mockDevelopers } from '../../data/developers/developers.mock.js';

export class MockAdapter {
  // Simulate network delay
  delay(ms = 500) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Companies methods
  async getCompanies() {
    await this.delay();
    return mockCompanies;
  }

  async getCompanyById(id) {
    await this.delay();
    return mockCompanies.find(company => company.id === id) || null;
  }

  // Developers methods
  async getDevelopers() {
    await this.delay();
    return mockDevelopers;
  }

  async getDeveloperById(id) {
    await this.delay();
    return mockDevelopers.find(developer => developer.id === id) || null;
  }

  // Simulate API errors
  async simulateError(message) {
    await this.delay();
    throw new Error(message);
  }
}
