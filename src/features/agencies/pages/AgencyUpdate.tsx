import { Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { useNavigate, useParams } from 'react-router-dom';

import { LoadingScreen } from '@/components/elements';

import { useAgency } from '../api';
import { AgencyUpdateForm } from '../components';

export const AgencyUpdate: React.FC = () => {
  const { id } = useParams<'id'>();
  const { data, isLoading, isError } = useAgency({ id: id as string });
  const navigate = useNavigate();

  if (isLoading)
    return (
      <div className="mt-48">
        <LoadingScreen />
      </div>
    );

  if (isError)
    return (
      <div className="mt-48 text-center">
        <h1 className="text-lg font-bold mb-2">Instansi tidak ditemukan</h1>
        <Button onClick={() => navigate(-1)} leftSection={<IconArrowLeft size={14} />}>
          Kembali
        </Button>
      </div>
    );

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Instansi</h1>
      </div>

      <AgencyUpdateForm agency={data} />
    </main>
  );
};
