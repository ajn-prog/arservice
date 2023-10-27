import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Product } from '../../types';

type ProductRequest = {
  id: number;
};

export async function deleteProduct({ id }: ProductRequest) {
  const res = await axios.delete<GeneralResponse<Product>>(`/ar-service/admin/product/${id}`);

  return res.data;
}

type UseDeleteProductOptions = {
  config?: MutationConfig<typeof deleteProduct>;
};

export function useDeleteProduct({ config }: UseDeleteProductOptions = {}) {
  return useMutation(deleteProduct, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['products']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
