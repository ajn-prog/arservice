import { ActionIcon, Checkbox, NumberInput } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconMinus, IconPlus } from '@tabler/icons-react';

import { useUpdateCart } from '../api';
import { Cart } from '../types';

const types = {
  main: 'Unit',
  accessories: 'Accessories',
  preventive: 'Service/Sparepart',
};

type Props = {
  carts: Cart[];
  selected: number[];
  onChange?: (selected: number[]) => void;
};

export const CartList: React.FC<Props> = ({ carts }) => {
  const updateMutation = useUpdateCart();

  function handleUpdate(cart: Cart, type: 'plus' | 'minus') {
    return async () => {
      await updateMutation.mutateAsync(
        {
          data: {
            id: cart.id,
            product_id: cart.product_id,
            quantity: 1,
            type,
          },
        },
        {
          onSuccess: () => {
            notifications.show({
              message: 'Keranjang berhasil dirubah',
            });
          },
          onError: () => {
            notifications.show({
              message: 'Keranjang gagal dirubah',
            });
          },
        }
      );
    };
  }

  return (
    <div className="divide-y divide-gray-300">
      {carts.map((cart) => (
        <div key={cart.id} className="bg-white w-full px-4 py-4 flex items-center">
          <div className="flex-grow flex items-center space-x-4">
            <div>
              <Checkbox />
            </div>
            <div className="w-20 h-20 bg-gray-200 rounded-md"></div>
            <div className="space-y-1">
              <div className="text-primary-600 text-sm">{types[cart.product.type]}</div>
              <div className="text-gray-900 font-semibold">{cart.product.name}</div>
              <div className="text-primary-600 text-sm">
                {cart.product.brand.name}, {cart.product.category.name}
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center flex-shrink-0">
              <ActionIcon
                onClick={handleUpdate(cart, 'minus')}
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
                onClick={handleUpdate(cart, 'minus')}
                size={20}
                variant="outline"
                color="primary"
                radius="100%"
              >
                <IconPlus className="p-px" />
              </ActionIcon>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
