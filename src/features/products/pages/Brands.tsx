import { Button, TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { modals } from '@mantine/modals';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';

import { Pagination } from '@/types/api';

import { BrandCreateForm, BrandTable } from '../components';

export const Brands: React.FC = () => {
  const [query, setQuery] = useState<Pagination>({
    search: '',
    limit: 10,
  });
  const [params] = useDebouncedValue(query, 200);

  function handleAdd() {
    modals.open({
      title: 'Tambah Brand',
      children: (
        <BrandCreateForm onSuccess={() => modals.closeAll()} onCancel={() => modals.closeAll()} />
      ),
    });
  }

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Brand</h1>
        <Button onClick={handleAdd}>Tambah</Button>
      </div>

      <section className="space-y-4 mb-4">
        <div className="space-x-4 flex items-center">
          <div className="max-w-xs w-full">
            <TextInput
              leftSection={<IconSearch size={16} />}
              placeholder="Cari berdasarkan nama"
              value={query.search}
              onChange={(v) => setQuery({ ...query, search: v.target.value })}
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <BrandTable {...params} />
      </section>
    </main>
  );
};
