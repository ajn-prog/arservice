import { Anchor } from '@mantine/core';

import { Service } from '../types';

type Props = {
  service: Service;
};

export const ServiceDetail: React.FC<Props> = ({ service }) => {
  return (
    <div className="space-y-2.5 text-sm">
      <div className="flex items-center justify-between gap-2">
        <div className="text-left text-gray-600">Serial Number</div>
        <div className="text-right text-gray-900">{service.installbase_detail.serial_number}</div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="text-left text-gray-600">Nama</div>
        <div className="text-right text-gray-900">
          {service.installbase_detail.product.name} /{' '}
          {service.installbase_detail.product.brand?.name}
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="text-left text-gray-600">Instansi</div>
        <div className="text-right text-gray-900">{service.customer.name}</div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="text-left text-gray-600">Teknisi</div>
        <div className="text-right text-gray-900">
          {service.engineer.name} / {service.engineer.phone}
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="text-left text-gray-600">Ruang Penempatan</div>
        <div className="text-right text-gray-900">{service.placement_space || '-'}</div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="text-left text-gray-600">Detail Masalah</div>
        <div
          className="text-right text-gray-900"
          dangerouslySetInnerHTML={{ __html: service.description ?? '-' }}
        ></div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="text-left text-gray-600">File</div>
        {service.service_files.length > 0 ? (
          <Anchor href={service.service_files[0].filename} target="_blank">
            Lihat
          </Anchor>
        ) : (
          <div className="text-right text-gray-900">-</div>
        )}
      </div>
    </div>
  );
};
