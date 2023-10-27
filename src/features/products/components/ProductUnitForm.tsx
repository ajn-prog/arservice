import { TextInput, Textarea } from '@mantine/core';

export const ProductUnitForm: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-4 py-4 first:pt-0 last:pb-0">
      <TextInput
        label="Serial Number"
        placeholder="Masukan Serial Number"
        className="col-span-12 md:col-span-3"
      />
      <TextInput
        label="Part Number"
        placeholder="Masukan Part Number"
        className="col-span-12 md:col-span-3"
      />
      <TextInput
        label="Lokasi"
        placeholder="Masukan Lokasi"
        className="col-span-12 md:col-span-6"
      />
      <Textarea
        label="Keterangan"
        description="Opsional"
        placeholder="Masukan Keterangan"
        className="col-span-12"
      />
    </div>
  );
};
