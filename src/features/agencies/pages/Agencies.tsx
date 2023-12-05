import { Button, TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Pagination } from '@/types/api';

import { AgencyTable } from '../components';

export const Agencies: React.FC = () => {
  const [query, setQuery] = useState<Pagination>({
    search: '',
    limit: 10,
  });
  const [params] = useDebouncedValue(query, 200);

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Instansi</h1>
        <Button component={Link} to="/agency/create">
          Tambah
        </Button>
      </div>

      <section className="space-y-4 mb-4">
        <div className="space-x-4 flex items-center">
          <div className="max-w-xs w-full">
            <TextInput
              leftSection={<IconSearch size={16} />}
              placeholder="Cari berdasarkan nama atau alamat"
              value={query.search}
              onChange={(v) => setQuery({ ...query, search: v.target.value })}
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <AgencyTable {...params} />
      </section>
    </main>
  );
};
