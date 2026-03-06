import { Developer } from '../../data/developers/developers.schema';
import { MockAdapter } from '../adapters/mock.adapter';
import { ApiAdapter } from '../adapters/api.adapter';
import { config } from '../../config/env';

// Define the interface for our repository
export interface IDevelopersRepository {
  getDevelopers(): Promise<Developer[]>;
  getDeveloperById(id: number): Promise<Developer | null>;
}

// Factory function to create the appropriate adapter
const createAdapter = () => {
  return config.isMock ? new MockAdapter() : new ApiAdapter();
};

// Create the repository instance
const adapter = createAdapter();

// Export the repository implementation
export const developersRepository: IDevelopersRepository = {
  getDevelopers: () => adapter.getDevelopers(),
  getDeveloperById: (id: number) => adapter.getDeveloperById(id),
};
