import { notifications } from '@mantine/notifications';

import { useAuth } from '@/features/auth';

import { useAddCart, useCarts, useUpdateCart } from '../api';
import { CartContext } from '../contexts';

type Props = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const { creds } = useAuth();
  const { data, isLoading, isError } = useCarts({
    config: { enabled: !!creds && creds.role == 'Customer' },
  });
  const addMutation = useAddCart();
  const updateMutation = useUpdateCart();

  async function addProduct(productId: number) {
    await addMutation.mutateAsync(
      {
        data: {
          product_id: productId,
          quantity: 1,
        },
      },
      {
        onSuccess: () => {
          notifications.show({
            title: 'Keranjang',
            message: 'Produk berhasil ditambahkan',
            color: 'green',
          });
        },
        onError: () => {
          notifications.show({
            title: 'Keranjang',
            message: 'Produk gagal ditambahkan',
            color: 'red',
          });
        },
      }
    );
  }

  async function updateCart(cartId: number, quantity: number) {
    if (!data) return;

    const cart = data.filter(({ id }) => cartId === id).at(0);
    if (!cart) return;

    const qty = quantity - cart.quantity;

    await updateMutation.mutateAsync(
      {
        data: {
          id: cart.id,
          product_id: cart.product_id,
          quantity: Math.abs(qty),
          type: qty > 0 ? 'plus' : 'minus',
        },
      },
      {
        onSuccess: () => {
          notifications.show({
            message: 'Keranjang berhasil diubah',
            color: 'green',
          });
        },
        onError: () => {
          notifications.show({
            message: 'Keranjang gagal diubah',
            color: 'red',
          });
        },
      }
    );
  }

  return (
    <CartContext.Provider
      value={{
        carts: data ?? [],
        isLoading,
        isError,
        addProduct,
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
