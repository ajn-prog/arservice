import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import {
  Product,
  ProductAccessoryDTO,
  ProductPreventiveDTO,
  ProductType,
  ProductUnitDTO,
} from '../../types';

export type ProductUpdateDTO = {
  id: number;
  type: ProductType;
  data: ProductUnitDTO | ProductAccessoryDTO | ProductPreventiveDTO;
};

export async function updateProduct({ id, type, data }: ProductUpdateDTO) {
  const res = await axios.put<GeneralResponse<Product>>(`/ar-service/products/${type}/${id}`, data);

  return res.data;
}

type UseUpdateProductOptions = {
  config?: MutationConfig<typeof updateProduct>;
};

export function useUpdateProduct({ config }: UseUpdateProductOptions = {}) {
  return useMutation(updateProduct, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['products']);
      queryClient.invalidateQueries(['product', args[1].id]);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
