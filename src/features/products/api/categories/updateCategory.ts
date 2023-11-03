import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Category, CategoryDTO } from '../../types';

export type CategoryUpdateDTO = {
  id: number;
  data: CategoryDTO;
};

export async function updateCategory({ id, data }: CategoryUpdateDTO) {
  const res = await axios.put<GeneralResponse<Category>>(`/ar-service/category/${id}`, data);

  return res.data;
}

type UseUpdateCategoryOptions = {
  config?: MutationConfig<typeof updateCategory>;
};

export function useUpdateCategory({ config }: UseUpdateCategoryOptions = {}) {
  return useMutation(updateCategory, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['categories']);
      queryClient.invalidateQueries(['category', args[1].id]);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
