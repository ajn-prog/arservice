import { UserRole } from '@/features/user';

import { useAuth } from '../hooks';

type Props = {
  role: Array<UserRole | `-${UserRole}`>;
  children: React.ReactNode;
};

export const Authorization: React.FC<Props> = ({ role, children }) => {
  const { creds } = useAuth();

  function filterRole() {
    return role.reduce((prev, curr) => {
      const isExcept = curr.startsWith('-');
      const role = isExcept ? curr.slice(1) : curr;

      return prev || isExcept ? creds?.role != role : creds?.role == role;
    }, false);
  }

  if (!filterRole()) return null;

  return <>{children}</>;
};
