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

const urls = {
  main: '/ar-service/products/unit',
  accessories: '/ar-service/products/accessories',
  preventive: '/ar-service/products/preventive',
};

export async function createProduct({ type, data }: ProductRequest) {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      value.forEach((file, i) => {
        if (!(file instanceof File)) return;
        formData.append(`${key}[${i}]`, file);
      });
    } else {
      if (value instanceof Date) {
        formData.append(key, value.toJSON());
      } else {
        formData.append(key, value.toString());
      }
    }
  }

  const res = await axios.post<GeneralResponse<Product>>(urls[type], formData);

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
