import { useContext } from 'react';

import { UserRole } from '@/features/user';

import { AuthContext } from '../contexts';

export const useAuth = () => {
  const { creds, ...ctx } = useContext(AuthContext);

  function isPermitted(role: Array<UserRole | `-${UserRole}`>) {
    return role.reduce((prev, curr) => {
      const isExcept = curr.startsWith('-');
      const role = isExcept ? curr.slice(1) : curr;

      return prev || isExcept ? creds?.role != role : creds?.role == role;
    }, false);
  }

  return { creds, ...ctx, isPermitted };
};
