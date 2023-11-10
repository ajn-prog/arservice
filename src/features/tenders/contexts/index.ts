import { createContext } from 'react';

import { Cart } from '../types';

export type CartContextValue = {
  carts: Cart[];
  isLoading: boolean;
  isError: boolean;
  addProduct: (productId: number) => void;
  updateCart: (cartId: number, quantity: number) => void;
};

export const CartContext = createContext<CartContextValue>({} as CartContextValue);
