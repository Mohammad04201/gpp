import { Company } from '../../data/companies/companies.schema';
import { Developer } from '../../data/developers/developers.schema';
import { mockCompanies } from '../../data/companies/companies.mock';
import { mockDevelopers } from '../../data/developers/developers.mock';

export class MockAdapter {
  // Simulate network delay
  private delay(ms: number = 500): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Companies methods
  async getCompanies(): Promise<Company[]> {
    await this.delay();
    return mockCompanies;
  }

  async getCompanyById(id: number): Promise<Company | null> {
    await this.delay();
    return mockCompanies.find(company => company.id === id) || null;
  }

  // Developers methods
  async getDevelopers(): Promise<Developer[]> {
    await this.delay();
    return mockDevelopers;
  }

  async getDeveloperById(id: number): Promise<Developer | null> {
    await this.delay();
    return mockDevelopers.find(developer => developer.id === id) || null;
  }

  // Simulate API errors
  async simulateError(message: string): Promise<never> {
    await this.delay();
    throw new Error(message);
  }
}
