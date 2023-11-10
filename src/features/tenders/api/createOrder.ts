import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Order } from '../types';

type OrderRequest = {
  data: number[];
};

export async function createOrder({ data }: OrderRequest) {
  const formData = new FormData();

  data.forEach((v, i) => {
    formData.append(`ids[${i}]`, v.toString());
  });

  const res = await axios.post<GeneralResponse<Order>>('/ar-service/order', formData);

  return res.data;
}

type UseCreateOrderOptions = {
  config?: MutationConfig<typeof createOrder>;
};

export function useCreateOrder({ config }: UseCreateOrderOptions = {}) {
  return useMutation(createOrder, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['carts']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
