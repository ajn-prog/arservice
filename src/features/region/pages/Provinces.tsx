import { Card } from '@mantine/core';
import { useState } from 'react';

import { Table } from '@/components/elements';

import { useProvinces } from '../api';
import { ProvinceQuery } from '../types';

const initialParams: ProvinceQuery = {
  page: 1,
  limit: 5,
  keyword: '',
};

export const Provinces: React.FC = () => {
  const [params, setParams] = useState(initialParams);
  const { data } = useProvinces({ params });

  function handlePage(page: number) {
    setParams({ ...params, page });
  }

  return (
    <main>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800 capitalize">Provinsi</h1>
      </div>

      <div className="space-y-6">
        <Card p="lg" shadow="sm">
          <div className="flex items-center justify-between mb-4">
            <div className="font-bold text-lg">
              <h2 className="text-gray-800 inline">Data Provinsi</h2>
            </div>
          </div>

          <Card.Section>
            <Table
              header={['ID', 'Nama']}
              items={data?.result}
              onPageChange={handlePage}
              metadata={data?.metadata}
              renderItem={(province) => (
                <tr key={province.id}>
                  <td>{province.id}</td>
                  <td>
                    <span className="capitalize">{province.name}</span>
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
