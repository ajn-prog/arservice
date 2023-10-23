import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';

import { CategoryCreateForm, CategoryTable } from '../components';

export const Categories: React.FC = () => {
  function handleAdd() {
    modals.open({
      title: 'Tambah Kategori',
      children: (
        <CategoryCreateForm
          onSuccess={() => modals.closeAll()}
          onCancel={() => modals.closeAll()}
        />
      ),
    });
  }

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Kategori</h1>
        <Button onClick={handleAdd}>Tambah</Button>
      </div>

      <section className="mb-8">
        <CategoryTable />
      </section>
    </main>
  );
};
