export interface Report {
  id: number;
  date: string;
  colonist_id: number;
  atype: string;
  action: string;
}

export interface NewReport {
  date: string;
  colonist_id: number;
  atype: string;
  action: string;
}
