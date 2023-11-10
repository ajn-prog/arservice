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
    products: number[];
  };
};

export async function createOrder(request: OrderRequest) {
  const { products, ...data } = request.data;
  const formData = new FormData();

  products.forEach((v, i) => {
    formData.append(`ids[${i}]`, v.toString());
  });

  const res1 = await axios.post<GeneralResponse<Order>>('/ar-service/order', formData);
  const res2 = await axios.post<GeneralResponse<Order>>(
    `/ar-service/tender/${res1.data.data.id}`,
    data
  );

  return res2.data;
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
