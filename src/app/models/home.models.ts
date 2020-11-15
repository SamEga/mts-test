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

export interface SettingsForm {
  [key: string]: any;
  name: string;
  alias?: string;
  email?: string;
  phone?: string;
  radio?: string;
  notifications?: boolean;
}

export type DataType = 'settings' | 'users' | 'services';
type EnabledDate = { [key: string]: number };

