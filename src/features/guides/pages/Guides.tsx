import { Button, TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { IconCategory, IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Authorization } from '@/features/auth';
import { ProductSelect } from '@/features/products';

import { GuideQuery } from '..';
import { GuideList } from '../components';

export const Guides: React.FC = () => {
  const [query, setQuery] = useState<GuideQuery>({
    search: '',
    product_id: undefined,
    limit: 10,
  });
  const [params] = useDebouncedValue(query, 200);

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Panduan</h1>

        <Authorization role={['Admin', 'Superadmin']}>
          <Button component={Link} to="/guide/create">
            Tambah
          </Button>
        </Authorization>
      </div>

      <section className="space-y-4 mb-4">
        <div className="space-x-4 flex items-center">
          <div className="max-w-xs w-full">
            <TextInput
              leftSection={<IconSearch size={16} />}
              placeholder="Cari"
              value={query.search}
              onChange={(v) => setQuery({ ...query, search: v.target.value })}
            />
          </div>
          <div className="max-w-xs">
            <ProductSelect
              leftSection={<IconCategory size={16} />}
              placeholder="Pilih Produk"
              value={query.product_id?.toString()}
              onChange={(v) => setQuery({ ...query, product_id: v ? v : undefined })}
              clearable
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className=""></div>

        <GuideList {...params} />
      </section>
    </main>
  );
};
