import { Card } from '@mantine/core';
import { useState } from 'react';

import { Table } from '@/components/elements';

import { useRegencies } from '../api';
import { RegencyQuery } from '../types';

const initialParams: RegencyQuery = {
  page: 1,
  limit: 5,
  keyword: '',
};

export const Regencies: React.FC = () => {
  const [params, setParams] = useState(initialParams);
  const { data } = useRegencies({ params });

  function handlePage(page: number) {
    setParams({ ...params, page });
  }

  return (
    <main>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800 capitalize">Kabupaten</h1>
      </div>

      <div className="space-y-6">
        <Card p="lg" shadow="sm">
          <div className="flex items-center justify-between mb-4">
            <div className="font-bold text-lg">
              <h2 className="text-gray-800 inline">Data Kabupaten</h2>
            </div>
          </div>

          <Card.Section>
            <Table
              header={['ID', 'Nama']}
              items={data?.result}
              onPageChange={handlePage}
              metadata={data?.metadata}
              renderItem={(regency) => (
                <tr key={regency.id}>
                  <td>{regency.id}</td>
                  <td>
                    <span className="capitalize">{regency.name}</span>
                  </td>
                </tr>
              )}
            />
          </Card.Section>
        </Card>
      </div>
    </main>
  );
};
