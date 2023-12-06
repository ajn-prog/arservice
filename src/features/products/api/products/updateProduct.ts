import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { dayjs } from '@/lib/dayjs';
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
  main: '/ar-service/product/unit',
  accessories: '/ar-service/product/accessories',
  preventive: '/ar-service/product/preventive',
};

export async function updateProduct({ id, type, data }: ProductUpdateDTO) {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    if (!value) continue;

    if (Array.isArray(value)) {
      value.forEach((file, i) => {
        if (!(file instanceof File)) return;
        formData.append(`${key}[${i}]`, file);
      });
    } else {
      if (value instanceof Date) {
        formData.append(key, dayjs(value).format('YYYY-MM-DD'));
      } else if (value instanceof File) {
        formData.append(key, value, value.name);
      } else {
        formData.append(key, value.toString());
      }
    }
  }

  const res = await axios.post<GeneralResponse<Product>>(`${urls[type]}/${id}`, formData);

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
