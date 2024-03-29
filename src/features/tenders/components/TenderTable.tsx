import { ActionIcon } from '@mantine/core';
import { modals } from '@mantine/modals';
import { IconEye, IconFileCheck } from '@tabler/icons-react';
import { useState } from 'react';

import { Table } from '@/components/elements';
import { Authorization } from '@/features/auth';
import { dayjs } from '@/lib/dayjs';
import { Pagination } from '@/types/api';

import { useTenders } from '../api';
import { Tender, TenderQuery } from '../types';

import { TenderBadge } from './TenderBadge';
import { TenderDetail } from './TenderDetail';
import { TenderUpdateForm } from './TenderUpdateForm';

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
} & TenderQuery;

export const TenderTable: React.FC<Props> = ({ toolbar, ...props }) => {
  const [params, setParams] = useState(initialParams);
  const { data, isLoading } = useTenders({ params: { ...params, ...props } });

  function handleUpdate(tender: Tender) {
    return () => {
      modals.open({
        title: 'Konfirmasi Penawaran',
        children: (
          <TenderUpdateForm
            tender={tender}
            onSuccess={() => modals.closeAll()}
            onCancel={() => modals.closeAll()}
          />
        ),
      });
    };
  }

  function handleDetail(tender: Tender) {
    return () => {
      modals.open({
        title: 'Detail Penawaran',
        size: 'lg',
        children: <TenderDetail tender={tender} />,
      });
    };
  }

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

            {tender.details.length > 1 && (
              <div className="text-xs text-gray-600 mt-1">
                + {tender.details.length - 1} produk lainnya
              </div>
            )}
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
          <td>{dayjs(tender.updated_at).format('D MMMM YYYY H:mm')}</td>
          <td>
            <div className="flex items-center space-x-2">
              <ActionIcon
                onClick={handleDetail(tender)}
                variant="subtle"
                title="Detail Penawaran"
                color="gray"
                radius="lg"
              >
                <IconEye size={18} />
              </ActionIcon>

              <Authorization role={['-Customer']}>
                {tender.status == 'pending' && (
                  <ActionIcon
                    onClick={handleUpdate(tender)}
                    variant="subtle"
                    title="Edit Penawaran"
                    color="primary"
                    radius="lg"
                  >
                    <IconFileCheck size={18} />
                  </ActionIcon>
                )}
                {/* <ActionIcon
                  onClick={handleRemove(tender.id)}
                  variant="subtle"
                  title="Hapus Penawaran"
                  color="red"
                  radius="lg"
                >
                  <IconTrash size={18} />
                </ActionIcon> */}
              </Authorization>
            </div>
          </td>
        </tr>
      )}
    />
  );
};
