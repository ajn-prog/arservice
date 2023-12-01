import { Button, LoadingOverlay, PasswordInput, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useEffect, useState } from 'react';

import { CLASSES, OWNERSHIP, SECTORS } from '@/features/agencies';
import { DistrictSelect, ProvinceSelect, RegencySelect } from '@/features/region';

import { BiodataDTO } from '..';
import { useBiodata, useUpdateBiodata } from '../api';

type RegionSelect = {
  province: number | string | null;
  regency: number | string | null;
  district: number | string | null;
};

export const BiodataForm: React.FC = () => {
  const { data, isLoading, isError } = useBiodata();
  const updateMutation = useUpdateBiodata();
  const form = useForm<BiodataDTO>({
    initialValues: {
      name: '',
      address: '',
      classes: '',
      hospital_code: '',
      kecamatan_id: '',
      owner: '',
      sector: '',
      phone_number: '',
      email: '',
      password: '',
    },
  });

  const [region, setRegion] = useState<RegionSelect>({
    province: null,
    regency: null,
    district: null,
  });

  useEffect(() => {
    if (!data) return;

    form.setValues({
      name: data.name,
      address: data.address,
      classes: data.classes,
      hospital_code: data.hospital_code,
      kecamatan_id: data.kecamatan_id,
      owner: data.owner,
      sector: data.sector,
      phone_number: data.phone_number,
      email: data.user.email,
      latitude: data.latitude,
      longitude: data.longitude,
      password: '',
    });

    setRegion({
      province: data.kecamatan.kabupaten?.province_id || null,
      regency: data.kecamatan.kabupaten_id || null,
      district: data.kecamatan_id || null,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleSubmit = form.onSubmit(async (data) => {
    await updateMutation.mutateAsync(
      {
        data: { ...data, kecamatan_id: region.district || undefined },
      },
      {
        onSuccess: () => {
          notifications.show({ message: 'Biodata berhasil diubah', color: 'green' });
        },
        onError: () => {
          notifications.show({ message: 'Biodata gagal diubah', color: 'red' });
        },
      }
    );
  });

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <LoadingOverlay visible={isLoading || isError} />
      <div className="pb-6 grid grid-cols-12 gap-x-6 gap-y-4 border-b border-gray-300">
        <TextInput
          {...form.getInputProps('hospital_code')}
          label="Kode RS"
          placeholder="Ex : 20392"
          className="col-span-12 md:col-span-3"
        />
        <TextInput
          {...form.getInputProps('name')}
          label="Nama Instansi"
          placeholder="Ex : RS Umum Daerah H. Sahudin Kutacane. . ."
          className="col-span-12 md:col-span-9"
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
      <div className="flex items-center gap-4 mt-4">
        <Button type="submit" loading={updateMutation.isLoading}>
          Simpan
        </Button>
      </div>
    </form>
  );
};
