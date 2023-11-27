import { Badge, Table } from '@mantine/core';

import { dayjs } from '@/lib/dayjs';

import { Tracking } from '../types';

type Props = {
  tracking: Tracking;
};

export const TrackingDetail: React.FC<Props> = ({ tracking }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="">
          <div className="text-xs text-gray-600">Nomor Resi</div>
          <div className="font-bold text-sm text-gray-900">{tracking.summary.waybill_number}</div>
        </div>
        <div className="">
          <div className="text-xs text-gray-600">Kurir</div>
          <div className="font-bold text-sm text-gray-900">{tracking.summary.courier_name}</div>
        </div>
        <div className="">
          <div className="text-xs text-gray-600">Status</div>
          <div className="font-bold text-sm text-gray-900">
            <Badge size="xs">{tracking.summary.status}</Badge>
          </div>
        </div>
      </div>

      <Table striped withRowBorders={false}>
        <Table.Tbody>
          {tracking.manifest.map(
            ({ manifest_code, manifest_date, manifest_time, city_name, manifest_description }) => (
              <Table.Tr key={manifest_code}>
                <Table.Td>
                  {dayjs(`${manifest_date} ${manifest_time}`, 'YYYY-MM-DD HH:mm:ss').format(
                    'DD MMM. HH:mm'
                  )}
                </Table.Td>
                <Table.Td>
                  {manifest_description}: {city_name}
                </Table.Td>
              </Table.Tr>
            )
          )}
        </Table.Tbody>
      </Table>
    </div>
  );
};
