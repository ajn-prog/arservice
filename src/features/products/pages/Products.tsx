import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

import { ProductTable } from '../components';

export const Products: React.FC = () => {
  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Produk</h1>
        <Link to="/product/create">
          <Button>Tambah</Button>
        </Link>
      </div>

      <section className="mb-8">
        <ProductTable />
      </section>
    </main>
  );
};
