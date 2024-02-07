import { ActionIcon } from '@mantine/core';
import { modals } from '@mantine/modals';
import { IconCheck, IconEye, IconPrinter } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Table } from '@/components/elements';
import { dayjs } from '@/lib/dayjs';

import { useServices } from '../api';
import { Service, ServiceQuery } from '../types';

import { ConfirmForm } from './ConfirmForm';
import { ServiceDetail } from './ServiceDetail';

type Props = {
  toolbar?: React.ReactNode;
} & ServiceQuery;

const initialParams: ServiceQuery = {
  page: 1,
  limit: 5,
  search: '',
  sort_by: 'created_at',
  sort: 'desc',
};

export const ServiceTable: React.FC<Props> = ({ toolbar, ...props }) => {
  const [params, setParams] = useState({ ...initialParams, ...props });
  const { data, isLoading } = useServices({ params: { ...params, ...props } });

  function handleDetail(service: Service) {
    return () => {
      modals.open({
        title: (
          <span>
            Detail Service{' '}
            <span className="text-gray-600 font-light">({service.type_service})</span>
          </span>
        ),
        centered: true,
        children: <ServiceDetail service={service} />,
      });
    };
  }

  function handleConfirm(service: Service) {
    return () => {
      modals.open({
        modalId: 'service-confirm',
        title: (
          <span>
            Konfirmasi Service{' '}
            <span className="text-gray-600 font-light">({service.type_service})</span>
          </span>
        ),
        centered: true,
        children: (
          <ConfirmForm
            service={service}
            onCancel={() => modals.close('service-confirm')}
            onSuccess={() => modals.close('service-confirm')}
          />
        ),
      });
    };
  }

  return (
    <Table
      title="Tabel Data Service"
      toolbar={toolbar}
      loading={isLoading}
      header={['#', 'Serial Number', 'Produk', 'Rumah Sakit', 'Jenis', 'Diperbaharui', '']}
      items={data?.data}
      onPageChange={(page) => {
        setParams({ ...params, page });
      }}
      metadata={{
        count: data?.data.length || 10,
        limit: params.limit || 10,
        page: params.page || 10,
        total: data?.total || 10,
      }}
      renderItem={(service, index) => (
        <tr key={service.id}>
          <td>{index + 1}</td>
          <td>{service.serial_number}</td>
          <td className="max-w-xs !whitespace-normal">{service.installbase_detail.product.name}</td>
          <td>{service.customer.name}</td>
          <td>{service.type_service}</td>
          <td>{dayjs(service.updated_at).format('D MMMM YYYY HH:mm')}</td>
          <td>
            <div className="flex items-center space-x-2">
              <ActionIcon
                variant="subtle"
                title="Detail Service"
                color="gray"
                radius="lg"
                onClick={handleDetail(service)}
              >
                <IconEye size={18} />
              </ActionIcon>
              <ActionIcon
                variant="subtle"
                title="Print Service"
                color="primary"
                radius="lg"
                component={Link}
                to={`/service/${service.id}`}
                target="_blank"
              >
                <IconPrinter size={18} />
              </ActionIcon>
              {service.service_files.length == 0 && (
                <ActionIcon
                  variant="subtle"
                  title="Konfirmasi Service"
                  color="green"
                  radius="lg"
                  onClick={handleConfirm(service)}
                >
                  <IconCheck size={18} />
                </ActionIcon>
              )}
            </div>
          </td>
        </tr>
      )}
    />
  );
};
