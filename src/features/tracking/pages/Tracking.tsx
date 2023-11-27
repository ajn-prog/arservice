import { Button, TextInput } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';

import { useTracking } from '../api';
import { TrackingDetail } from '../components';

export const Tracking: React.FC = () => {
  const [waybill, setWaybill] = useState('');
  const trackingMutation = useTracking();

  async function handleCheck() {
    await trackingMutation.mutateAsync(
      {
        data: {
          waybill: waybill,
        },
      },
      {
        onSuccess: ({ data }) => {
          modals.open({
            title: 'Informasi Tracking',
            children: <TrackingDetail tracking={data} />,
            size: 'lg',
          });
        },
        onError: () => {
          notifications.show({
            message: 'No Resi tidak ditemukan',
            color: 'red',
          });
        },
      }
    );
  }

  return (
    <main>
      <div className="w-full h-[38rem] flex flex-col items-center justify-center">
        <div className="max-w-lg w-full p-8 h-56 flex flex-col items-center justify-center rounded-lg bg-white shadow-lg shadow-gray-300">
          <h1 className="mb-4 text-lg font-bold text-center">
            Tracking produk pesanan anda disini!
          </h1>
          <div className="flex items-end space-x-4 max-w-sm w-full">
            <TextInput
              label="Nomor Resi"
              placeholder="Masukan Nomor Resi"
              className="flex-grow"
              value={waybill}
              onChange={(e) => setWaybill(e.target.value)}
            />
            <Button size="sm" onClick={handleCheck} loading={trackingMutation.isLoading}>
              Cek
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};
