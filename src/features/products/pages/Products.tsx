import { Button, Modal } from '@mantine/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ProductTable } from '../components';

export const Products: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Produk</h1>
        <Button onClick={() => setOpen(true)}>Tambah</Button>
      </div>

      <section className="mb-8">
        <ProductTable />
      </section>

      <Modal title="Pilih Jenis Produk" centered opened={open} onClose={() => setOpen(false)}>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            to="/product/create/unit"
            className="bg-blue-50 hover:bg-blue-100 active:translate-y-px transition-all border border-blue-500 text-blue-600 p-4 rounded-md text-center flex items-center justify-center"
          >
            Unit
          </Link>
          <Link
            to="/product/create/accessory"
            className="bg-blue-50 hover:bg-blue-100 active:translate-y-px transition-all border border-blue-500 text-blue-600 p-4 rounded-md text-center flex items-center justify-center"
          >
            Accessories
          </Link>
          <Link
            to="/product/create/service"
            className="bg-blue-50 hover:bg-blue-100 active:translate-y-px transition-all border border-blue-500 text-blue-600 p-4 rounded-md text-center flex items-center justify-center"
          >
            Service / Sparepart
          </Link>
        </div>
      </Modal>
    </main>
  );
};
