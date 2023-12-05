import { Button, TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { IconCategory, IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { AgencySelect } from '@/features/agencies';
import { Authorization } from '@/features/auth';

import { InstallationTable } from '../components';
import { InstallationQuery } from '../types';

export const Installations: React.FC = () => {
  const [query, setQuery] = useState<InstallationQuery>({
    search: '',
    limit: 10,
  });
  const [params] = useDebouncedValue(query, 200);

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Install Base</h1>
        <Authorization role={['-Customer']}>
          <Button component={Link} to="/installation/create">
            Tambah
          </Button>
        </Authorization>
      </div>

      <section className="space-y-4 mb-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <TextInput
              leftSection={<IconSearch size={16} />}
              placeholder="Cari berdasarkan judul"
              value={query.search}
              onChange={(v) => setQuery({ ...query, search: v.target.value })}
            />
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <AgencySelect
              leftSection={<IconCategory size={16} />}
              placeholder="Pilih Instansi"
              value={query.customer_id?.toString() ?? null}
              onChange={(v) => {
                setQuery({ ...query, customer_id: v || undefined });
              }}
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <InstallationTable {...params} />
      </section>
    </main>
  );
};
