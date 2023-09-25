import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';

import { UserCreateForm, UserTable } from '../components';

export const Users: React.FC = () => {
  function handleAdd() {
    modals.open({
      title: 'Tambah User',
      children: (
        <UserCreateForm onSuccess={() => modals.closeAll()} onCancel={() => modals.closeAll()} />
      ),
    });
  }

  return (
    <main>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">User</h1>
        <Button onClick={handleAdd}>Tambah</Button>
      </div>

      <section className="mb-8">
        <UserTable roles={['super admin', 'admin', 'kasir']} />
      </section>
    </main>
  );
};
