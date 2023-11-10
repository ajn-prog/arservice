import { Button } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { useMemo } from 'react';

import { CartList } from '../components';
import { useCart } from '../hooks';

export const Carts: React.FC = () => {
  const { carts } = useCart();
  const [selected, setSelected] = useLocalStorage<number[]>({
    key: 'selected-cart',
    defaultValue: [],
  });

  const count = useMemo(() => {
    return carts
      .filter(({ product_id }) => selected.includes(product_id))
      .reduce((prev, curr) => prev + curr.quantity, 0);
  }, [carts, selected]);

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Keranjang</h1>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 lg:col-span-9 rounded-md overflow-hidden">
          <CartList carts={carts} selected={selected} onChange={(v) => setSelected(v)} />
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="bg-white w-full p-4 rounded-md">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-base text-gray-800 font-medium mb-2">Ringkasan Belanja</h3>
              <p className="text-primary-600 text-sm">Jumlah Barang ({count})</p>
            </div>
            <div className="pt-4">
              <Button fullWidth disabled={selected.length == 0}>
                Beli
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
