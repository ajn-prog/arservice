import { Button, Card, PasswordInput, Select, TextInput } from '@mantine/core';
import { Link } from 'react-router-dom';

export const AgencyCreate: React.FC = () => {
  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Instansi</h1>
      </div>

      <Card shadow="lg">
        <Card.Section p="lg" withBorder>
          <h2 className="font-semibold text-base">Tambah Data Instansi</h2>
        </Card.Section>

        <Card.Section p="lg">
          <div className="pb-6 grid grid-cols-12 gap-4 border-b border-gray-300">
            <TextInput
              label="Kode RS"
              placeholder="Ex : 20392"
              className="col-span-12 md:col-span-4"
            />
            <TextInput
              label="Nama Instansi"
              placeholder="Ex : RS Umum Daerah H. Sahudin Kutacane. . ."
              className="col-span-12 md:col-span-8"
            />

            <Select
              label="Sektor"
              placeholder="Pilih Sektor"
              data={['1', '2']}
              className="col-span-12 md:col-span-4"
              withinPortal
            />
            <Select
              label="Kelas"
              placeholder="Pilih Kelas"
              data={['1', '2']}
              className="col-span-12 md:col-span-4"
              withinPortal
            />
            <Select
              label="Kepemilikan"
              placeholder="Pilih Kepemilikan"
              data={['1', '2']}
              className="col-span-12 md:col-span-4"
              withinPortal
            />

            <Select
              label="Provinsi"
              placeholder="Pilih Provinsi"
              data={['1', '2']}
              className="col-span-12 md:col-span-4"
              withinPortal
            />
            <Select
              label="Kabupaten/Kota"
              placeholder="Pilih Kabupaten/Kota"
              data={['1', '2']}
              className="col-span-12 md:col-span-4"
              withinPortal
            />
            <Select
              label="Kecamatan"
              placeholder="Pilih Kecamatan"
              data={['1', '2']}
              className="col-span-12 md:col-span-4"
              withinPortal
            />
          </div>
          <div className="pt-6 grid grid-cols-12 gap-4">
            <TextInput
              label="Alamat"
              placeholder="Ex : Jl. Sultan Adam No. 24"
              className="col-span-12 md:col-span-8"
            />
            <TextInput
              label="Telepon"
              placeholder="Ex : 085752140605. . ."
              className="col-span-12 md:col-span-4"
            />
            <TextInput
              label="Email"
              placeholder="Masukan Email"
              className="col-span-12 md:col-span-6"
            />
            <PasswordInput
              label="Password"
              placeholder="Masukan Password"
              className="col-span-12 md:col-span-6"
            />
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
