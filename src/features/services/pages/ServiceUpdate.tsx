import { Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { useNavigate, useParams } from 'react-router-dom';

import { LoadingScreen } from '@/components/elements';

import { useService } from '../api';
import { ServiceForm } from '../components';

export const ServiceUpdate: React.FC = () => {
  const { id } = useParams<'id'>();
  const { data, isLoading, isError } = useService({ id: id as string });
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
        <h1 className="text-lg font-bold mb-2">Service tidak ditemukan</h1>
        <Button onClick={() => navigate(-1)} leftSection={<IconArrowLeft size={14} />}>
          Kembali
        </Button>
      </div>
    );

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Service</h1>
      </div>

      <ServiceForm
        service={data}
        onCancel={() => navigate(-1)}
        onSuccess={() => navigate('/service')}
      />
    </main>
  );
};
