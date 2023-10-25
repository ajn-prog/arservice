import { Button, Card, Group, NumberInput, Radio, Select, Text, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { Dropzone } from '@mantine/dropzone';
import { notifications } from '@mantine/notifications';
import { IconCalendar, IconPhoto, IconPlus, IconUpload, IconX } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { ProductUnitForm } from '../components';

export const ProductCreateAccessory: React.FC = () => {
  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Produk</h1>
      </div>

      <Card shadow="lg">
        <Card.Section p="lg" withBorder>
          <h2 className="font-semibold text-base">
            Tambah Data Produk <span className="text-primary-600">(Accessory)</span>
          </h2>
        </Card.Section>

        <Card.Section p="lg">
          <div className="grid grid-cols-12 gap-x-6 gap-y-4 mb-6">
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
            <NumberInput
              label="Harga"
              placeholder="Masukan Harga"
              icon={<span>Rp.</span>}
              className="col-span-12 md:col-span-6"
            />
            <div className="py-1">
              <div className="text-sm mb-2">Status</div>
              <div className="flex items-center space-x-4">
                <Radio label="Consumable" checked />
                <Radio label="Unconsumable" />
              </div>
            </div>
          </div>

          <Dropzone
            onDrop={(files) => console.log(files)}
            onReject={() => notifications.show({ message: 'File tidak sesuai', color: 'red' })}
            maxSize={5 * 1024 ** 2}
            maxFiles={1}
            accept={['image/*']}
          >
            <Group
              position="center"
              spacing="xl"
              className="pointer-events-none text-center min-h-[12rem]"
            >
              <Dropzone.Accept>
                <IconUpload size={50} stroke={1.5} className="text-primary-600" />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX size={50} stroke={1.5} className="text-red-600" />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconPhoto size={50} stroke={1.5} />
              </Dropzone.Idle>

              <div>
                <Text size="xl" inline>
                  Drag thumbnail disini atau klik untuk memilih file
                </Text>
                <Text size="sm" color="dimmed" inline mt={7}>
                  Ukuran file tidak boleh melebihi 5mb
                </Text>
              </div>
            </Group>
          </Dropzone>
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
