import { ActionIcon, Button, NumberInput, TextInput } from '@mantine/core';
import { IconPlus, IconX } from '@tabler/icons-react';
import { Fragment } from 'react';

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
        product_id: undefined,
        serial_number: undefined,
        warranty_month: undefined,
      },
    ]);
  }

  function handleRemove(index: number) {
    return () => {
      const temp = value.filter((_, i) => i !== index);

      onChange(temp);
    };
  }

  return (
    <div>
      <div className="grid grid-cols-12 gap-x-2 gap-y-2">
        <div className="col-span-4 text-sm">Produk</div>
        <div className="col-span-4 text-sm">Serial Number</div>
        <div className="col-span-4 text-sm">Masa Garansi</div>
        <div className="col-span-1 text-sm"></div>
      </div>

      {value.map((v, i) => (
        <div className="grid grid-cols-12 gap-x-2 gap-y-2 mb-2" key={`psf_${i}`}>
          <ProductSelect
            placeholder="Pilih Produk"
            className="col-span-4"
            limit={20}
            nothingFoundMessage="Data tidak ditemukan"
          />

          <TextInput placeholder="Ex : MU/23/09/001" className="col-span-4" />

          <NumberInput
            placeholder="..."
            className="col-span-3"
            hideControls
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
