import { Button } from '@mantine/core';
import { IconArrowLeft, IconBulldozer } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export const UnderDevelopment: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div className="flex flex-col items-center justify-center py-24 mx-auto max-w-xs">
        <IconBulldozer size={72} stroke={1.2} className="text-gray-800" />
        <h1 className="text-lg font-bold mb-4 text-center">
          Halaman tidak ditemukan atau fitur Dalam Pengembangan
        </h1>
        <Button leftSection={<IconArrowLeft size={16} />} onClick={() => navigate(-1)}>
          Kembali
        </Button>
      </div>
    </main>
  );
};
