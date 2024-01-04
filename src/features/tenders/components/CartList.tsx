import { ActionIcon, Checkbox, NumberInput } from '@mantine/core';
import { modals } from '@mantine/modals';
import { IconMinus, IconPlus } from '@tabler/icons-react';

import { useCart } from '../hooks';
import { Cart } from '../types';

const types = {
  main: 'Unit',
  accessories: 'Accessories',
  preventive: 'Service/Sparepart',
};

type Props = {
  carts: Cart[];
  selected: number[];
  onChange: (selected: number[]) => void;
  readOnly?: boolean;
};

export const CartList: React.FC<Props> = ({ carts, selected, onChange, readOnly = false }) => {
  const { updateCart } = useCart();

  async function handleCart(cartId: number, quantity: number) {
    if (quantity == 0) {
      return modals.openConfirmModal({
        title: 'Hapus Keranjang',
        children: <div className="text-sm">Apakah Anda yakin untuk menghapus keranjang?</div>,
        onConfirm: async () => {
          await updateCart(cartId, quantity);
        },
      });
    }

    await updateCart(cartId, quantity);
  }

  function handleSelected(productId: number) {
    return () => {
      if (!selected.includes(productId)) return onChange([...selected, productId]);

      return onChange(selected.filter((v) => v !== productId));
    };
  }

  return (
    <div className="divide-y divide-gray-300">
      {carts.map((cart) => (
        <div key={cart.id} className="bg-white w-full px-4 py-4 flex items-center">
          <div className="flex-grow flex items-center space-x-4">
            {!readOnly && (
              <div>
                <Checkbox
                  checked={selected.includes(cart.product_id)}
                  onChange={handleSelected(cart.product_id)}
                />
              </div>
            )}
            <div className="w-20 h-20 bg-gray-200 rounded-md flex-shrink-0"></div>
            <div className="space-y-1">
              <div className="text-primary-600 text-sm">{types[cart.product.type]}</div>
              <div className="text-gray-900 font-semibold">{cart.product.name}</div>
              <div className="text-primary-600 text-sm">
                {[cart.product.brand?.name, cart.product.category?.name].join(', ')}
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            {readOnly ? (
              <div className="text-sm text-primary-600">
                Jumlah (<strong>{cart.quantity}</strong>)
              </div>
            ) : (
              <div className="flex items-center justify-center flex-shrink-0">
                <ActionIcon
                  onClick={() => handleCart(cart.id, cart.quantity - 1)}
                  size={20}
                  variant="outline"
                  color="primary"
                  radius="100%"
                >
                  <IconMinus className="p-px" />
                </ActionIcon>
                <NumberInput
                  hideControls
                  min={0}
                  step={1}
                  variant="unstyled"
                  readOnly
                  value={cart.quantity}
                  className="[&_input]:w-8 [&_input]:text-center border-b border-gray-200 px-2"
                />
                <ActionIcon
                  onClick={() => handleCart(cart.id, cart.quantity + 1)}
                  size={20}
                  variant="outline"
                  color="primary"
                  radius="100%"
                >
                  <IconPlus className="p-px" />
                </ActionIcon>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
