import { Select } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { IconCategory } from '@tabler/icons-react';
import { useState } from 'react';

import { TenderTable } from '../components';
import { TenderQuery, TenderStatus } from '../types';

export const Tenders: React.FC = () => {
  const [query, setQuery] = useState<TenderQuery>({
    status: undefined,
  });
  const [params] = useDebouncedValue(query, 200);

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Penawaran</h1>
      </div>

      <section className="space-y-4 mb-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 md:col-span-3">
            <Select
              leftSection={<IconCategory size={16} />}
              placeholder="Pilih Status"
              data={[
                { label: 'Menunggu', value: 'pending' },
                { label: 'Diterima', value: 'approved' },
                { label: 'Ditolak', value: 'rejected' },
              ]}
              value={query.status?.toString() ?? null}
              onChange={(v) => {
                setQuery({ ...query, status: (v as TenderStatus) || undefined });
              }}
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <TenderTable {...params} />
      </section>
    </main>
  );
};
