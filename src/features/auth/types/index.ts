export type Creds = {
  id: string | number;
  name: string;
  username: string;
  role: 'admin' | 'customer';
  status: boolean;
};
