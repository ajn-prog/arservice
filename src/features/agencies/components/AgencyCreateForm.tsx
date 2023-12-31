import { Button, Card, NumberInput, PasswordInput, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { DistrictSelect, ProvinceSelect, RegencySelect } from '@/features/region';

import { useCreateAgency } from '../api';
import { CLASSES, OWNERSHIP, SECTORS } from '../constants';
import { AgencyDTO } from '../types';

type RegionSelect = {
  province: string | null;
  regency: string | null;
  district: string | null;
};

export const AgencyCreateForm: React.FC = () => {
  const navigate = useNavigate();
  const { mutateAsync } = useCreateAgency();
  const form = useForm<AgencyDTO>({
    initialValues: {
      name: '',
      address: '',
      email: '',
      classes: undefined,
      hospital_code: undefined,
      kecamatan_id: undefined,
      latitude: 0,
      longitude: 0,
      owner: '',
      password: '',
      phone_number: '',
      sector: undefined,
    },
  });

  const [region, setRegion] = useState<RegionSelect>({
    province: null,
    district: null,
    regency: null,
  });

  const handleSubmit = form.onSubmit(async (values) => {
    await mutateAsync(
      {
        data: {
          ...values,
          kecamatan_id: region.district || undefined,
        },
      },
      {
        onSuccess: () => {
          notifications.show({
            color: 'green',
            message: 'Instansi berhasil dibuat',
          });
          navigate('/agency');
        },
        onError: ({ response }) => {
          form.setErrors((response?.data as any).errors);
          notifications.show({
            color: 'red',
            message: 'Instansi gagal dibuat',
          });
        },
      }
    );
  });

  return (
    <Card component="form" onSubmit={handleSubmit} shadow="lg">
      <Card.Section p="lg" withBorder>
        <h2 className="font-semibold text-base">Tambah Data Instansi</h2>
      </Card.Section>

      <Card.Section p="lg" pt="xs" withBorder>
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
            data={SECTORS}
            className="col-span-12 md:col-span-4"
          />
          <Select
            {...form.getInputProps('classes')}
            label="Kelas"
            placeholder="Pilih Kelas"
            data={CLASSES}
            className="col-span-12 md:col-span-4"
          />
          <Select
            {...form.getInputProps('owner')}
            label="Kepemilikan"
            placeholder="Pilih Kepemilikan"
            data={OWNERSHIP}
            className="col-span-12 md:col-span-4"
          />

          <ProvinceSelect
            label="Provinsi"
            placeholder="Pilih Provinsi"
            className="col-span-12 md:col-span-4"
            nothingFoundMessage="Data tidak ditemukan"
            value={region.province?.toString()}
            onChange={(v) => {
              setRegion({ province: v, district: null, regency: null });
            }}
          />
          <RegencySelect
            provinceId={region.province}
            label="Kabupaten/Kota"
            placeholder="Pilih Kabupaten/Kota"
            className="col-span-12 md:col-span-4"
            nothingFoundMessage={
              region.province ? 'Data tidak ditemukan' : 'Pilih provinsi terlebih dahulu'
            }
            value={region.regency?.toString()}
            onChange={(v) => {
              setRegion({ ...region, regency: v, district: null });
            }}
          />
          <DistrictSelect
            regencyId={region.regency}
            label="Kecamatan"
            placeholder="Pilih Kecamatan"
            className="col-span-12 md:col-span-4"
            nothingFoundMessage={
              region.province && region.regency
                ? 'Data tidak ditemukan'
                : 'Pilih kabupaten terlebih dahulu'
            }
            value={region.district?.toString()}
            onChange={(v) => {
              setRegion({ ...region, district: v });
            }}
          />
        </div>
        <div className="pt-4 grid grid-cols-12 gap-x-6 gap-y-4">
          <TextInput
            {...form.getInputProps('address')}
            label="Alamat"
            placeholder="Ex : Jl. Sultan Adam No. 24"
            className="col-span-12 md:col-span-8"
          />
          <NumberInput
            {...form.getInputProps('phone_number')}
            hideControls
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
            placeholder="Masukan Password"
            className="col-span-12 md:col-span-6"
          />
        </div>
      </Card.Section>

      <Card.Section p="lg" withBorder className="flex items-center space-x-4">
        <Button type="submit">Simpan</Button>
        <Button component={Link} to="/agency" variant="light" color="gray.6" bg="gray.2">
          Batal
        </Button>
      </Card.Section>
    </Card>
  );
};
