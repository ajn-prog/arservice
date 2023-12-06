import { Table } from '@mantine/core';

import { PRODUCT_TYPES } from '@/features/products';
import { dayjs } from '@/lib/dayjs';

import { Tender } from '../types';

import { TenderBadge } from './TenderBadge';

export type Props = {
  tender: Tender;
};

export const TenderDetail: React.FC<Props> = ({ tender }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="">
          <div className="text-xs text-gray-600">Nama Instansi</div>
          <div className="font-semibold text-sm">{tender.customer.name}</div>
        </div>
        <div className="">
          <div className="text-xs text-gray-600">Status</div>
          <TenderBadge status={tender.status} />
        </div>
        <div className="">
          <div className="text-xs text-gray-600">Nama PIC</div>
          <div className="font-semibold text-sm">{tender.recipient_name}</div>
        </div>
        <div className="">
          <div className="text-xs text-gray-600">Telepon PIC</div>
          <div className="font-semibold text-sm">{tender.recipient_phone}</div>
        </div>
        <div className="">
          <div className="text-xs text-gray-600">Alamat PIC</div>
          <div className="font-semibold text-sm">{tender.recipient_address}</div>
        </div>
        <div className="">
          <div className="text-xs text-gray-600">Tanggal Dibuat</div>
          <div className="font-semibold text-sm">
            {dayjs(tender.created_at).format('D MMMM YYYY HH:mm')}
          </div>
        </div>
      </div>

      <Table withColumnBorders withRowBorders withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Nama Produk</Table.Th>
            <Table.Th>Jenis Produk</Table.Th>
            <Table.Th>Jumlah</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {tender.details.map((detail, i) => (
            <Table.Tr key={detail.id}>
              <Table.Td>{i + 1}</Table.Td>
              <Table.Td>{detail.product.name}</Table.Td>
              <Table.Td>{PRODUCT_TYPES[detail.product.type]}</Table.Td>
              <Table.Td>{detail.quantity}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};
