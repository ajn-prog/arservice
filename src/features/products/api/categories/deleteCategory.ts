import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Category } from '../../types';

type CategoryRequest = {
  id: number;
};

export async function deleteCategory({ id }: CategoryRequest) {
  const res = await axios.delete<GeneralResponse<Category>>(`/ar-service/admin/category/${id}`);

  return res.data;
}

type UseDeleteCategoryOptions = {
  config?: MutationConfig<typeof deleteCategory>;
};

export function useDeleteCategory({ config }: UseDeleteCategoryOptions = {}) {
  return useMutation(deleteCategory, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['categories']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
