import { Button, TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Authorization } from '@/features/auth';

import { ServiceTable } from '../components';
import { ServiceQuery } from '../types';

export const Services: React.FC = () => {
  const [query, setQuery] = useState<ServiceQuery>({
    search: '',
    limit: 10,
  });
  const [params] = useDebouncedValue(query, 300);

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Service</h1>

        <Authorization role={['Engineer']}>
          <Button to="/service/create" component={Link}>
            Tambah
          </Button>
        </Authorization>
      </div>

      <section className="space-y-4 mb-4">
        <div className="space-x-4 flex items-center">
          <div className="max-w-xs w-full">
            <TextInput
              leftSection={<IconSearch size={16} />}
              placeholder="Cari"
              value={query.search}
              onChange={(v) => setQuery({ ...query, search: v.target.value })}
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <ServiceTable {...params} />
      </section>
    </main>
  );
};
