import { useAuth } from '../hooks';

type UserRole =
  | 'Sales'
  | 'ASM'
  | 'Logistic'
  | 'Engineer'
  | 'Direktur'
  | 'Admin_Legal'
  | 'Superadmin'
  | 'Finance'
  | 'Partner_Director'
  | 'Partner_ASM'
  | 'Partner_Sales'
  | 'Customer';

type Props =
  | { role: Array<UserRole>; children: React.ReactNode }
  | { role: Array<`-${UserRole}`>; children: React.ReactNode };

export const Authorization: React.FC<Props> = ({ role, children }) => {
  const { creds } = useAuth();

  function isPermitted(roles: Array<UserRole | `-${UserRole}`>) {
    const exceptedRoles = roles.filter((role) => role.startsWith('-')).map((role) => role.slice(1));
    const isExcepted = exceptedRoles.some((role) => creds?.role === role);

    if (exceptedRoles.length > 0) {
      return !isExcepted;
    }

    const acceptedRoles = roles.filter((role) => !role.startsWith('-'));

    const isAccepted = acceptedRoles.some((role) => creds?.role === role);

    return isAccepted;
  }

  if (!isPermitted(role)) return null;

  return <>{children}</>;
};
