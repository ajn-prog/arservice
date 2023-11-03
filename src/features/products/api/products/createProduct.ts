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

type ProductRequest = {
  type: ProductType;
  data: ProductUnitDTO | ProductAccessoryDTO | ProductPreventiveDTO;
};

export async function createProduct({ type, data }: ProductRequest) {
  const res = await axios.post<GeneralResponse<Product>>(`/ar-service/products/${type}`, data);

  return res.data;
}

type UseCreateProductOptions = {
  config?: MutationConfig<typeof createProduct>;
};

export function useCreateProduct({ config }: UseCreateProductOptions = {}) {
  return useMutation(createProduct, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['products']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
