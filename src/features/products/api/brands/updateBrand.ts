import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Brand, BrandDTO } from '../../types';

export type BrandUpdateDTO = {
  id: number;
  data: BrandDTO;
};

export async function updateBrand({ id, data }: BrandUpdateDTO) {
  const res = await axios.put<GeneralResponse<Brand>>(`/ar-service/admin/brand/${id}`, data);

  return res.data;
}

type UseUpdateBrandOptions = {
  config?: MutationConfig<typeof updateBrand>;
};

export function useUpdateBrand({ config }: UseUpdateBrandOptions = {}) {
  return useMutation(updateBrand, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['brands']);
      queryClient.invalidateQueries(['brand', args[1].id]);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
