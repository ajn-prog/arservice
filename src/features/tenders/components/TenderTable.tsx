import { useState } from 'react';

import { Table } from '@/components/elements';
import { dayjs } from '@/lib/dayjs';
import { Pagination } from '@/types/api';

import { useTenders } from '../api';

import { TenderBadge } from './TenderBadge';

const initialParams: Pagination = {
  page: 1,
  limit: 10,
  search: '',
};

const types = {
  main: 'Unit',
  accessories: 'Accessories',
  preventive: 'Service/Sparepart',
};

type Props = {
  toolbar?: React.ReactNode;
};

export const TenderTable: React.FC<Props> = ({ toolbar }) => {
  const [params, setParams] = useState(initialParams);
  const { data, isLoading } = useTenders({ params });

  return (
    <Table
      title="Tabel Data Penawaran"
      toolbar={toolbar}
      header={['Produk', 'PIC', 'Status', 'Diperbaharui', '']}
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
      renderItem={(tender) => (
        <tr key={tender.id}>
          <td>
            <div className="text-xs text-primary-600">{types[tender.details[0].product.type]}</div>
            <div className="text-sm text-gray-900">{tender.details[0].product.name}</div>

            <div className="text-xs text-gray-600 mt-1">+ 3 produk lainnya</div>
          </td>
          <td>
            <div className="text-gray-900">
              {tender.recipient_name} / {tender.recipient_phone}
            </div>
            <div className="text-xs text-gray-600">{tender.recipient_position}</div>
          </td>
          <td>
            <TenderBadge status={tender.status} />
          </td>
          <td>{dayjs(tender.updatedAt).format('D MMMM YYYY H:mm')}</td>
          <td></td>
        </tr>
      )}
    />
  );
};
