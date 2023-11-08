import { Button, Modal } from '@mantine/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Authorization } from '@/features/auth';

import { ProductList, ProductTable } from '../components';

export const Products: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Produk</h1>
        <Authorization role={['Superadmin', 'Admin']}>
          <Button onClick={() => setOpen(true)}>Tambah</Button>
        </Authorization>
      </div>

      <section className="mb-8">
        <Authorization role={['Customer']}>
          <ProductList />
        </Authorization>
        <Authorization role={['Superadmin', 'Admin']}>
          <ProductTable />
        </Authorization>
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
