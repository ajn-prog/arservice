import { Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { To, useNavigate } from 'react-router-dom';

type Props = {
  message?: string;
  to?: string;
};

export const NotFoundState: React.FC<Props> = ({ message, to }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-48 text-center">
      <h1 className="text-lg font-bold mb-6">{message ?? 'Halaman tidak ditemukan'}</h1>
      <Button onClick={() => navigate(to ? to : (-1 as To))} leftIcon={<IconArrowLeft size={14} />}>
        Kembali
      </Button>
    </div>
  );
};
