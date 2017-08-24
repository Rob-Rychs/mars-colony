import {Job} from './job';

export interface Colonist {
  name: string;
  job: Job;
  id: number; 
  age: string;
}

export interface NewColonist {
  name: string;
  job_id: string; 
  age: string;
}
