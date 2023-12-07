import { Button, Select, TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { IconCategory, IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { AgencySelect } from '@/features/agencies';
import { Authorization } from '@/features/auth';

import { ComplainTable } from '../components';
import { ComplainQuery, ComplainStatus } from '../types';

export const Complains: React.FC = () => {
  const [query, setQuery] = useState<ComplainQuery>({
    search: '',
    status: undefined,
    customer_id: undefined,
  });
  const [params] = useDebouncedValue(query, 200);

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Komplain</h1>
        <Button component={Link} to="/complain/create">
          Tambah
        </Button>
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
            <Select
              leftSection={<IconCategory size={16} />}
              placeholder="Pilih Status"
              data={[
                { label: 'Selesai', value: 'close' },
                { label: 'Diproses', value: 'progress' },
                { label: 'Menunggu', value: 'waiting' },
              ]}
              value={query.status?.toString() ?? null}
              onChange={(v) => {
                setQuery({ ...query, status: (v as ComplainStatus) || undefined });
              }}
            />
          </div>
          <Authorization role={['-Customer']}>
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
          </Authorization>
        </div>
      </section>

      <section className="mb-8">
        <ComplainTable {...params} />
      </section>
    </main>
  );
};
