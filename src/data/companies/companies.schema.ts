export interface Job {
  id: number;
  title: string;
  type: 'full-time' | 'part-time' | 'contract';
  salary: string;
  posted: string;
}

export interface Company {
  id: number;
  name: string;
  logo: string;
  industry: string;
  location: string;
  size: string;
  founded: string;
  description: string;
  openJobs: number;
  website: string;
  jobs: Job[];
}
