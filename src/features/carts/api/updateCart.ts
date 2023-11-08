import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Cart } from '../types';

type CartRequest = {
  data: {
    id: number;
    product_id: number;
    quantity: number;
    type: 'minus' | 'plus';
  };
};

export async function updateCart({ data }: CartRequest) {
  const res = await axios.post<GeneralResponse<Cart>>('/ar-service/customer/cart-plus-minus', data);

  return res.data;
}

type UseUpdateCartOptions = {
  config?: MutationConfig<typeof updateCart>;
};

export function useUpdateCart({ config }: UseUpdateCartOptions = {}) {
  return useMutation(updateCart, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['carts']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
