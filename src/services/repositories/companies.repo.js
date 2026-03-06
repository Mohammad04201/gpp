import { MockAdapter } from '../adapters/mock.adapter.js';
import { ApiAdapter } from '../adapters/api.adapter.js';
import { config } from '../../config/env.js';

// Factory function to create appropriate adapter
const createAdapter = () => {
  return config.isMock ? new MockAdapter() : new ApiAdapter();
};

// Create repository instance
const adapter = createAdapter();

// Export repository implementation
export const companiesRepository = {
  getCompanies: () => adapter.getCompanies(),
  getCompanyById: (id) => adapter.getCompanyById(id),
};
