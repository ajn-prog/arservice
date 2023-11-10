import { Button, Card, TextInput } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

import { CartList } from '../components';
import { useCart } from '../hooks';

export const Checkout: React.FC = () => {
  const { carts } = useCart();
  const [selected, setSelected] = useLocalStorage<number[]>({
    key: 'selected-cart',
    defaultValue: [],
  });

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Checkout</h1>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 lg:col-span-9 space-y-6">
          <div className="space-y-2">
            <Card p="lg">
              <div className="border-b border-gray-200 pb-2">
                <h2 className="text-base text-gray-900 font-medium">Penanggung Jawab</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6 py-2">
                <TextInput label="Nama PIC" placeholder="Ex :  Sarimin" />
                <TextInput label="Jabatan" placeholder="Ex : Direktur" />
                <TextInput label="Nomor HP" placeholder="Ex : 085752140606" />
              </div>

              <div className="border-b border-gray-200 pb-2 mt-4">
                <h2 className="text-base text-gray-900 font-medium">Alamat Pengiriman</h2>
              </div>
            </Card>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Pesanan</h2>
            <div className="rounded-md overflow-hidden">
              <CartList
                carts={carts.filter(({ product_id }) => selected.includes(product_id))}
                selected={selected}
                onChange={(v) => setSelected(v)}
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="bg-white w-full p-4 rounded-md">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-base text-gray-800 font-medium mb-2">Ringkasan Belanja</h3>
              <p className="text-primary-600 text-sm">Jumlah Barang (1)</p>
            </div>
            <div className="pt-4">
              <Button fullWidth disabled={selected.length == 0}>
                Penawaran
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
