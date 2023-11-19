import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Order } from '../types';

export type OrderRequest = {
  data: {
    name?: string;
    phone?: string;
    position?: string;
    address?: string;
    kecamatan_id?: number | string;
    carts: number[];
  };
};

export async function createOrder({ data }: OrderRequest) {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    if (!value) continue;

    if (Array.isArray(value)) {
      value.forEach((v, i) => {
        formData.append(`${key}[${i}]`, v.toString());
      });
    } else {
      formData.append(key, value.toString());
    }
  }

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
