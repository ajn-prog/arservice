import { Button, Card, Select, TextInput } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { ProductUnitForm } from '../components';

export const ProductCreateService: React.FC = () => {
  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Produk</h1>
      </div>

      <Card shadow="lg">
        <Card.Section p="lg" withBorder>
          <h2 className="font-semibold text-base">
            Tambah Data Produk <span className="text-primary-600">(Service & Sparepart)</span>
          </h2>
        </Card.Section>

        <Card.Section p="lg">
          <div className="grid grid-cols-12 gap-4 mb-6">
            <TextInput
              label="Kode Produk"
              placeholder="Ex : MU/23/09/001"
              className="col-span-12 md:col-span-2"
            />
            <TextInput
              label="Nama Produk"
              placeholder="Ex : RS Umum Daerah H. Sahudin Kutacane, Aceh. . ."
              className="col-span-12 md:col-span-8"
            />
            <Select
              label="Kategori"
              placeholder="Pilih Kategori"
              data={['1', '2']}
              className="col-span-12 md:col-span-3"
              withinPortal
            />
            <Select
              label="Brand"
              placeholder="Pilih Brand"
              data={['1', '2']}
              className="col-span-12 md:col-span-3"
              withinPortal
            />
          </div>
        </Card.Section>

        <Card.Section p="lg" withBorder>
          <div className="divide-y divide-gray-300">
            <ProductUnitForm />
            <ProductUnitForm />
          </div>

          <div className="flex items-center justify-end mt-4">
            <Button variant="subtle" leftIcon={<IconPlus size={16} />}>
              Tambah Unit
            </Button>
          </div>
        </Card.Section>

        <Card.Section p="lg" withBorder className="flex justify-end items-center space-x-4">
          <Button component={Link} to="/product" variant="light" color="gray.6" bg="gray.2">
            Batal
          </Button>
          <Button>Simpan</Button>
        </Card.Section>
      </Card>
    </main>
  );
};
