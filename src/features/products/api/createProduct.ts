import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Brand, BrandDTO } from '../types';

type BrandRequest = {
  data: BrandDTO;
};

export async function createBrand({ data }: BrandRequest) {
  const res = await axios.post<GeneralResponse<Brand>>('/ar-service/admin/brand', data);

  return res.data;
}

type UseCreateBrandOptions = {
  config?: MutationConfig<typeof createBrand>;
};

export function useCreateBrand({ config }: UseCreateBrandOptions = {}) {
  return useMutation(createBrand, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['brands']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
