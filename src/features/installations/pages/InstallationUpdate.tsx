import { Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { useNavigate, useParams } from 'react-router-dom';

import { LoadingScreen } from '@/components/elements';

import { useInstallation } from '../api';
import { InstallationUpdateForm } from '../components';

export const InstallationUpdate: React.FC = () => {
  const { id } = useParams<'id'>();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useInstallation({ id: id as string });

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
        <h1 className="text-xl font-bold text-gray-800">Data Install Base</h1>
      </div>

      <InstallationUpdateForm installation={data} />
    </main>
  );
};
