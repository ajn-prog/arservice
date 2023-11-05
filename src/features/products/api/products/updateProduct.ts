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

const urls = {
  main: '/ar-service/products/unit',
  accessories: '/ar-service/products/accessories',
  preventive: '/ar-service/products/preventive',
};

export async function updateProduct({ id, type, data }: ProductUpdateDTO) {
  const res = await axios.post<GeneralResponse<Product>>(`${urls[type]}/${id}`, data);

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
      queryClient.invalidateQueries(['product']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
