export const CompanySchema = {
  id: 'number',
  name: 'string',
  logo: 'string',
  industry: 'string',
  location: 'string',
  size: 'string',
  founded: 'string',
  description: 'string',
  openJobs: 'number',
  website: 'string',
  jobs: 'array'
};

export const JobSchema = {
  id: 'number',
  title: 'string',
  type: 'string',
  salary: 'string',
  posted: 'string'
};
