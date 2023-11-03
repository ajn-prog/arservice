import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';

import { UnitCreateForm, UnitTable } from '../components';

export const Units: React.FC = () => {
  function handleAdd() {
    modals.open({
      title: 'Tambah Unit',
      children: (
        <UnitCreateForm onSuccess={() => modals.closeAll()} onCancel={() => modals.closeAll()} />
      ),
    });
  }

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Satuan</h1>
        <Button onClick={handleAdd}>Tambah</Button>
      </div>

      <section className="mb-8">
        <UnitTable />
      </section>
    </main>
  );
};
