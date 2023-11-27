import { Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { LoadingScreen } from '@/components/elements';
import { Authorization } from '@/features/auth';
import { useProduct } from '@/features/products';

import { GuideList } from '../components';

export const ProductGuides: React.FC = () => {
  const { id } = useParams<'id'>();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useProduct({ id: id as string });

  if (isLoading)
    return (
      <div className="mt-48">
        <LoadingScreen />
      </div>
    );

  if (isError)
    return (
      <div className="mt-48 text-center">
        <h1 className="text-lg font-bold mb-2">Produk tidak ditemukan</h1>
        <Button onClick={() => navigate(-1)} leftSection={<IconArrowLeft size={14} />}>
          Kembali
        </Button>
      </div>
    );

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Panduan Berdasarkan Produk</h1>

        <Authorization role={['Admin', 'Superadmin']}>
          <Button component={Link} to={`/guide/create?product=${data.id}`}>
            Tambah
          </Button>
        </Authorization>
      </div>

      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold">{data.name}</h2>
          <p className="text-sm text-primary-600">{data.brand.name}</p>
        </div>

        {/* <GuideList productId={data.id} /> */}
      </section>
    </main>
  );
};
