import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';

import { BrandCreateForm, BrandTable } from '../components';

export const Brands: React.FC = () => {
  function handleAdd() {
    modals.open({
      title: 'Tambah Brand',
      children: <BrandCreateForm onCancel={() => modals.closeAll()} />,
    });
  }

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Brand</h1>
        <Button onClick={handleAdd}>Tambah</Button>
      </div>

      <section className="mb-8">
        <BrandTable />
      </section>
    </main>
  );
};
