import { Button, PasswordInput, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

import { CLASSES, OWNERSHIP, SECTORS } from '@/features/agencies';

export const BiodataForm: React.FC = () => {
  const form = useForm();

  return (
    <form>
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

        {/* <ProvinceSelect
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
        /> */}
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
        <Button type="submit">Simpan</Button>
      </div>
    </form>
  );
};
