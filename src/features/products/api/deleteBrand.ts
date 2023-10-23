import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Brand } from '../types';

type BrandRequest = {
  id: number;
};

export async function deleteBrand({ id }: BrandRequest) {
  const res = await axios.delete<GeneralResponse<Brand>>(`/ar-service/admin/brand/${id}`);

  return res.data;
}

type UseDeleteBrandOptions = {
  config?: MutationConfig<typeof deleteBrand>;
};

export function useDeleteBrand({ config }: UseDeleteBrandOptions = {}) {
  return useMutation(deleteBrand, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['brands']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
