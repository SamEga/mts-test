export interface User {
  id: number;
  name: string;
  enabledServices: number[];
  servicesEnableDates: EnabledDate;
}

export interface UserService {
  fee: number;
  id: number;
  title: string;
}

export type DataType = 'settings' | 'users' | 'services';
type EnabledDate = { [key: string]: number };

