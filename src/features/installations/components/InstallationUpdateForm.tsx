import { Button, Card, PasswordInput, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { DistrictSelect, ProvinceSelect, RegencySelect } from '@/features/region';

import { useCreateInstallation } from '../api';
import { Installation, InstallationDTO } from '../types';

type RegionSelect = {
  province: number | string | null;
  regency: number | string | null;
  district: number | string | null;
};

type Props = {
  installation: Installation;
};

export const InstallationUpdateForm: React.FC<Props> = ({ installation }) => {
  const navigate = useNavigate();
  const { mutateAsync } = useCreateInstallation();
  const form = useForm<InstallationDTO>({
    initialValues: {
      title: '',
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    await mutateAsync(
      {
        data: {
          ...values,
        },
      },
      {
        onSuccess: () => {
          notifications.show({
            color: 'green',
            message: 'Instansi berhasil diubah',
          });
          navigate('/installation');
        },
        onError: ({ response }) => {
          form.setErrors((response?.data as any).errors);
          notifications.show({
            color: 'red',
            message: 'Instansi gagal diubah',
          });
        },
      }
    );
  });

  return (
    <Card component="form" onSubmit={handleSubmit} shadow="lg">
      <Card.Section p="lg" withBorder>
        <h2 className="font-semibold text-base">Edit Data Instansi</h2>
      </Card.Section>

      <Card.Section p="lg" pt="xs">
        <div className="pb-6 grid grid-cols-12 gap-x-6 gap-y-4 border-b border-gray-300">
          <TextInput
            {...form.getInputProps('hospital_code')}
            label="Kode RS"
            placeholder="Ex : 20392"
            className="col-span-12 md:col-span-4"
          />
          <TextInput
            {...form.getInputProps('name')}
            label="Nama Instansi"
            placeholder="Ex : RS Umum Daerah H. Sahudin Kutacane. . ."
            className="col-span-12 md:col-span-8"
          />

          <Select
            {...form.getInputProps('sector')}
            label="Sektor"
            placeholder="Pilih Sektor"
            data={['Private', 'Public']}
            className="col-span-12 md:col-span-4"
            withinPortal
          />
          <Select
            {...form.getInputProps('classes')}
            label="Kelas"
            placeholder="Pilih Kelas"
            data={['A', 'B', 'C', 'D', 'D Pratama']}
            className="col-span-12 md:col-span-4"
            withinPortal
          />
          <Select
            {...form.getInputProps('owner')}
            label="Kepemilikan"
            placeholder="Pilih Kepemilikan"
            data={['Perorangan', 'Korporasi', 'Negara']}
            className="col-span-12 md:col-span-4"
            withinPortal
          />
        </div>
        <div className="pt-4 grid grid-cols-12 gap-x-6 gap-y-4">
          <TextInput
            {...form.getInputProps('address')}
            label="Alamat"
            placeholder="Ex : Jl. Sultan Adam No. 24"
            className="col-span-12 md:col-span-8"
          />
          <TextInput
            {...form.getInputProps('phone_number')}
            label="Telepon"
            placeholder="Ex : 085752140605. . ."
            className="col-span-12 md:col-span-4"
          />
          <TextInput
            {...form.getInputProps('email')}
            label="Email"
            placeholder="Masukan Email"
            className="col-span-12 md:col-span-6"
          />
          <PasswordInput
            {...form.getInputProps('password')}
            label="Password"
            placeholder="Biarkan kosong jika tidak berubah"
            className="col-span-12 md:col-span-6"
          />
        </div>
      </Card.Section>

      <Card.Section p="lg" withBorder className="flex justify-end items-center space-x-4">
        <Button component={Link} to="/installation" variant="light" color="gray.6" bg="gray.2">
          Batal
        </Button>
        <Button type="submit">Simpan</Button>
      </Card.Section>
    </Card>
  );
};
