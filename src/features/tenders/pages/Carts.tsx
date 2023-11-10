import { useState } from 'react';

import { CartList } from '../components';
import { useCart } from '../hooks';

export const Carts: React.FC = () => {
  const { carts } = useCart();
  const [selected] = useState<number[]>([]);

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Keranjang</h1>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <CartList carts={carts} selected={selected} />
        </div>
        <div className="col-span-3"></div>
      </div>
    </main>
  );
};
