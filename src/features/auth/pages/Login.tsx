import { Card } from '@mantine/core';
import { useState } from 'react';

import { LoginForm } from '../components';

const Login: React.FC = () => {
  const [role, setRole] = useState<'customer' | 'admin'>('customer');

  return (
    <Card
      className="h-screen md:h-auto w-full md:max-w-md mx-auto px-6 py-8 pb-14"
      shadow="sm"
      p={0}
      radius="md"
    >
      <h1 className="text-2xl font-bold mb-6 capitalize">Login {role}</h1>

      <LoginForm role={role} />

      <div
        aria-hidden
        onClick={() => setRole(role == 'customer' ? 'admin' : 'customer')}
        className="text-primary-600 text-center text-sm mt-4 cursor-pointer"
      >
        Login Sebagai {role == 'customer' ? 'Admin' : 'Customer'}
      </div>
    </Card>
  );
};

export default Login;
