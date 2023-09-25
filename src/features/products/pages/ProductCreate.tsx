import { Button, Card, Select, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export const ProductCreate: React.FC = () => {
  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Produk</h1>
      </div>

      <Card shadow="lg">
        <Card.Section p="lg" withBorder>
          <h2 className="font-semibold text-base">Tambah Data Produk</h2>
        </Card.Section>

        <Card.Section p="lg" className="grid grid-cols-12 gap-4">
          <TextInput
            label="Kode Produk"
            placeholder="Ex : MU/23/09/001"
            className="col-span-12 md:col-span-2"
          />
          <TextInput
            label="Nama Produk"
            placeholder="Ex : RS Umum Daerah H. Sahudin Kutacane, Aceh. . ."
            className="col-span-12 md:col-span-7"
          />
          <DateInput
            label="Tanggal Masuk"
            placeholder="Pilih Tanggal"
            className="col-span-12 md:col-span-3"
            popoverProps={{ withinPortal: true }}
            rightSection={<IconCalendar size={16} color="gray" />}
          />

          <Select
            label="Brand"
            placeholder="Pilih Brand"
            data={['1', '2']}
            className="col-span-12 md:col-span-3"
            withinPortal
          />
          <Select
            label="Kategori"
            placeholder="Pilih Kategori"
            data={['1', '2']}
            className="col-span-12 md:col-span-3"
            withinPortal
          />
          <Select
            label="Satuan"
            placeholder="Pilih Satuan"
            data={['1', '2']}
            className="col-span-12 md:col-span-3"
            withinPortal
          />
          <Select
            label="Modality"
            placeholder="Pilih Modality"
            data={['1', '2']}
            className="col-span-12 md:col-span-3"
            withinPortal
          />
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
