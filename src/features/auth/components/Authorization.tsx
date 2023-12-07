import { UserRole } from '@/features/user';

import { useAuth } from '../hooks';

type Props = {
  role: Array<UserRole | `-${UserRole}`>;
  children: React.ReactNode;
};

export const Authorization: React.FC<Props> = ({ role, children }) => {
  const { isPermitted } = useAuth();

  if (!isPermitted(role)) return null;

  return <>{children}</>;
};
