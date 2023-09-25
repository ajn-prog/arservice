import { Card } from '@mantine/core';
import { useState } from 'react';

import { Table } from '@/components/elements';

import { useDistricts } from '../api';
import { DistrictQuery } from '../types';

const initialParams: DistrictQuery = {
  page: 1,
  limit: 5,
  keyword: '',
};

export const Districts: React.FC = () => {
  const [params, setParams] = useState(initialParams);
  const { data } = useDistricts({ params });

  function handlePage(page: number) {
    setParams({ ...params, page });
  }

  return (
    <main>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800 capitalize">Kecamatan</h1>
      </div>

      <div className="space-y-6">
        <Card p="lg" shadow="sm">
          <div className="flex items-center justify-between mb-4">
            <div className="font-bold text-lg">
              <h2 className="text-gray-800 inline">Data Kecamatan</h2>
            </div>
          </div>

          <Card.Section>
            <Table
              header={['ID', 'Nama']}
              items={data?.result}
              onPageChange={handlePage}
              metadata={data?.metadata}
              renderItem={(district) => (
                <tr key={district.id}>
                  <td>{district.id}</td>
                  <td>
                    <span className="capitalize">{district.name}</span>
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
