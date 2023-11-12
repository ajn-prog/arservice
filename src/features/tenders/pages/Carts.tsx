import { Button } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { IconBasketOff, IconShoppingBag } from '@tabler/icons-react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

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
        <div className="col-span-12 lg:col-span-8 rounded-md overflow-hidden">
          <CartList carts={carts} selected={selected} onChange={(v) => setSelected(v)} />
          {carts.length == 0 && (
            <div className="bg-white rounded-md w-full p-12 flex flex-col items-center justify-center text-center">
              <IconBasketOff size={42} stroke={1.2} className="text-gray-600 mb-2" />
              <h3 className="text-lg font-bold">Keranjang Kosong</h3>
              <p className="mb-4 text-gray-600">
                Anda belum pernah menambahkan produk kedalam keranjang
              </p>

              <Button leftSection={<IconShoppingBag size={17} />}>Lihat Katalog</Button>
            </div>
          )}
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white w-full p-4 rounded-md">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-base text-gray-800 font-medium mb-2">Ringkasan Belanja</h3>
              <p className="text-primary-600 text-sm">Jumlah Barang ({count})</p>
            </div>
            <div className="pt-4">
              <Button
                component={Link}
                to="/cart/checkout"
                fullWidth
                disabled={selected.length == 0}
              >
                Beli
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
