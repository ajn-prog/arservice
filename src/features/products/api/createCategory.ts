import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Category, CategoryDTO } from '../types';

type CategoryRequest = {
  data: CategoryDTO;
};

export async function createCategory({ data }: CategoryRequest) {
  const res = await axios.post<GeneralResponse<Category>>('/ar-service/admin/category', data);

  return res.data;
}

type UseCreateCategoryOptions = {
  config?: MutationConfig<typeof createCategory>;
};

export function useCreateCategory({ config }: UseCreateCategoryOptions = {}) {
  return useMutation(createCategory, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['categories']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
