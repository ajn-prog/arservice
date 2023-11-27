import { ActionIcon, Badge, Button, Indicator, Menu } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { useCart } from '../hooks';

const types = {
  main: 'Unit',
  accessories: 'Accessories',
  preventive: 'Service/Sparepart',
};

export const CartMenu: React.FC = () => {
  const { carts } = useCart();

  return (
    <Menu position="bottom-end" width={320}>
      <Menu.Target>
        <Indicator inline label={carts.length} size={18}>
          <ActionIcon variant="subtle" size="lg" color="gray" className="text-gray-800" radius="lg">
            <IconShoppingCart style={{ width: '70%', height: '70%' }} stroke={1.4} />
          </ActionIcon>
        </Indicator>
      </Menu.Target>

      <Menu.Dropdown p={0}>
        <div className="px-4 py-2.5 border-b border-gray-200">
          <h2 className="text-base font-semibold">Keranjang</h2>
        </div>

        {carts.length > 0 ? (
          <>
            <div className="divide-y divide-gray-200">
              {carts.map((cart) => (
                <div key={cart.id} className="px-4 py-2 flex items-center">
                  <div className="flex-grow">
                    <Badge size="xs">{cart.product.brand.name}</Badge>
                    <div className="text-sm font-medium">{cart.product.name}</div>
                    <div className="text-xs text-gray-600">{cart.product.category.name}</div>
                  </div>
                  <div className="flex-shrink-0 text-primary-600 text-sm">
                    {types[cart.product.type]}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-4 py-2">
              <Button component={Link} to="/cart" variant="subtle" fullWidth>
                Lihat Semua
              </Button>
            </div>
          </>
        ) : (
          <div className="px-4 py-2">
            <p className="text-sm text-center my-2">Keranjang Kosong</p>
            <Button component={Link} to="/product" variant="subtle" fullWidth>
              Lihat Katalog
            </Button>
          </div>
        )}
      </Menu.Dropdown>
    </Menu>
  );
};
