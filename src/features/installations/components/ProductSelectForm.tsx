import { Button, NumberInput, TextInput } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

import { ProductSelect } from '@/features/products';

import { InstallationDTO } from '../types';

type Props = {
  value: InstallationDTO['products'];
  onChange: (value: InstallationDTO['products']) => void;
};

export const ProductSelectForm: React.FC<Props> = ({ value, onChange }) => {
  function handleAdd() {
    onChange([
      ...value,
      {
        product_id: '',
        serial_number: '',
        warranty_month: '',
      },
    ]);
  }

  function handleRemove(index: number) {
    return () => {
      const temp = value.filter((_, i) => i !== index);

      onChange(temp);
    };
  }

  function handleChange(index: number, v: InstallationDTO['products'][number]) {
    onChange(
      value.map((val, i) => {
        if (i === index) {
          return v;
        }

        return val;
      })
    );
  }

  return (
    <div>
      <div className="grid grid-cols-12 gap-x-2 mb-1">
        <div className="col-span-4 text-sm">Produk</div>
        <div className="col-span-4 text-sm">Serial Number</div>
        <div className="col-span-4 text-sm">Masa Garansi</div>
        <div className="col-span-1 text-sm"></div>
      </div>

      {value.map((v, i) => (
        <div className="grid grid-cols-12 gap-x-2 gap-y-2 mb-2" key={`psf_${i}`}>
          <ProductSelect
            required
            placeholder="Pilih Produk"
            className="col-span-4"
            limit={20}
            nothingFoundMessage="Data tidak ditemukan"
            value={v.product_id}
            onChange={(value) => {
              if (value) handleChange(i, { ...v, product_id: value });
            }}
          />

          <TextInput
            required
            placeholder="Ex : MU/23/09/001"
            className="col-span-4"
            value={v.serial_number}
            onChange={(value) => handleChange(i, { ...v, serial_number: value.target.value })}
          />

          <NumberInput
            required
            placeholder="..."
            className="col-span-3"
            hideControls
            value={v.warranty_month}
            onChange={(value) => handleChange(i, { ...v, warranty_month: value })}
            rightSection={<span className="text-xs text-gray-600 pr-7">/bulan</span>}
          />
          <div className="col-span-1 flex items-center">
            <Button color="red" size="xs" variant="light" onClick={handleRemove(i)}>
              Hapus
            </Button>
          </div>
        </div>
      ))}

      <div className="col-span-12 flex justify-end">
        <Button leftSection={<IconPlus size={16} />} variant="subtle" size="xs" onClick={handleAdd}>
          Tambah Produk
        </Button>
      </div>
    </div>
  );
};
