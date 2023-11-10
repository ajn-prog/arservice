import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Cart } from '../types';

type CartRequest = {
  data: {
    product_id: number;
    quantity: number;
  };
};

export async function addCart({ data }: CartRequest) {
  const res = await axios.post<GeneralResponse<Cart>>('/ar-service/cart', data);

  return res.data;
}

type UseAddCartOptions = {
  config?: MutationConfig<typeof addCart>;
};

export function useAddCart({ config }: UseAddCartOptions = {}) {
  return useMutation(addCart, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['carts']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
