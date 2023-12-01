import { useAuth } from '@/features/auth';
import { Profiles } from '@/features/user';

import { Dashboard } from './Dashboard';

export const Home: React.FC = () => {
  const { creds } = useAuth();

  if (creds?.role == 'Customer') return <Profiles />;

  return <Dashboard />;
};
