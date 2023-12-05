import { Button, Modal, Tabs, TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { IconCategory, IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Authorization } from '@/features/auth';

import { BrandSelect, CategorySelect, ProductList } from '../components';
import { ProductQuery, ProductType } from '../types';

export const Products: React.FC = () => {
  const [query, setQuery] = useState<ProductQuery>({
    search: '',
    limit: 10,
    category: undefined,
    brand: undefined,
    type: 'main',
  });
  const [params] = useDebouncedValue(query, 200);
  const [open, setOpen] = useState(false);

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Produk</h1>
        <Authorization role={['-Customer']}>
          <Button onClick={() => setOpen(true)}>Tambah</Button>
        </Authorization>
      </div>

      <section className="space-y-4 mb-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <TextInput
              leftSection={<IconSearch size={16} />}
              placeholder="Cari berdasarkan nama"
              value={query.search}
              onChange={(v) => setQuery({ ...query, search: v.target.value })}
            />
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <CategorySelect
              leftSection={<IconCategory size={16} />}
              placeholder="Pilih Kategori"
              value={query.category?.toString() ?? null}
              onChange={(v) => {
                setQuery({ ...query, category: v || undefined });
              }}
            />
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <BrandSelect
              leftSection={<IconCategory size={16} />}
              placeholder="Pilih Brand"
              value={query.brand?.toString() ?? null}
              onChange={(v) => {
                setQuery({ ...query, brand: v || undefined });
              }}
            />
          </div>
        </div>

        <div>
          <Tabs
            variant="pills"
            radius="lg"
            value={query.type}
            onChange={(v) => {
              if (v) setQuery({ ...query, type: v as ProductType });
            }}
          >
            <Tabs.List>
              <Tabs.Tab value="main">Unit</Tabs.Tab>
              <Tabs.Tab value="accessories">Accessories</Tabs.Tab>
              <Tabs.Tab value="preventive">Service/Sparepart</Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </div>
      </section>

      <section className="mb-8">
        <ProductList {...params} />
      </section>

      <Modal title="Pilih Jenis Produk" centered opened={open} onClose={() => setOpen(false)}>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <Link
            to="/product/create/main"
            className="bg-primary-50 hover:bg-primary-100 active:translate-y-px transition-all border border-primary-500 text-primary-600 p-4 rounded-md text-center flex items-center justify-center"
          >
            Unit
          </Link>
          <Link
            to="/product/create/accessories"
            className="bg-primary-50 hover:bg-primary-100 active:translate-y-px transition-all border border-primary-500 text-primary-600 p-4 rounded-md text-center flex items-center justify-center"
          >
            Accessories
          </Link>
          <Link
            to="/product/create/preventive"
            className="bg-primary-50 hover:bg-primary-100 active:translate-y-px transition-all border border-primary-500 text-primary-600 p-4 rounded-md text-center flex items-center justify-center"
          >
            Service / Sparepart
          </Link>
        </div>
      </Modal>
    </main>
  );
};
