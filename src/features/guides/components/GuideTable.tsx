import { Button } from '@mantine/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Table } from '@/components/elements';
import { dayjs } from '@/lib/dayjs';
import { Pagination } from '@/types/api';

import { useGuides } from '../api';

const initialParams: Pagination = {
  page: 1,
  limit: 10,
  search: '',
};

type Props = {
  toolbar?: React.ReactNode;
};

export const GuideTable: React.FC<Props> = ({ toolbar }) => {
  const [params, setParams] = useState(initialParams);
  const { data, isLoading } = useGuides({ params });

  return (
    <Table
      title="Tabel Data Panduan"
      toolbar={toolbar}
      header={['#', 'Produk', 'Diperbaharui', '']}
      items={data?.data}
      onPageChange={(page) => {
        setParams({ ...params, page });
      }}
      loading={isLoading}
      metadata={{
        count: data?.data.length || 10,
        limit: params.limit || 10,
        page: params.page || 10,
        total: data?.total || 10,
      }}
      renderItem={(guide, i) => (
        <tr key={guide.id}>
          <td>{(params.limit ?? 5) * ((params.page ?? 0) - 1) + i + 1}</td>
          <td>{guide.name}</td>
          <td>{dayjs(guide.updatedAt).format('D MMMM YYYY H:mm')}</td>
          <td>
            <div className="flex items-center space-x-2">
              <Button component={Link} to={`/guide/product/${guide.id}`} size="xs">
                Lihat Panduan
              </Button>
            </div>
          </td>
        </tr>
      )}
    />
  );
};
