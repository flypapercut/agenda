export interface Appointment {
  id: string;
  title: string;
  description?: string;
  date: string;
  time?: string;
  created_at?:string;
  updated_at?:string
}