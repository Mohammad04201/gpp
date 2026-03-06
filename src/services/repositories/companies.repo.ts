import { Company } from '../../data/companies/companies.schema';
import { MockAdapter } from '../adapters/mock.adapter';
import { ApiAdapter } from '../adapters/api.adapter';
import { config } from '../../config/env';

// Define the interface for our repository
export interface ICompaniesRepository {
  getCompanies(): Promise<Company[]>;
  getCompanyById(id: number): Promise<Company | null>;
}

// Factory function to create the appropriate adapter
const createAdapter = () => {
  return config.isMock ? new MockAdapter() : new ApiAdapter();
};

// Create the repository instance
const adapter = createAdapter();

// Export the repository implementation
export const companiesRepository: ICompaniesRepository = {
  getCompanies: () => adapter.getCompanies(),
  getCompanyById: (id: number) => adapter.getCompanyById(id),
};
