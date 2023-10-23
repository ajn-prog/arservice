import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Category } from '../types';

type CategoryRequest = {
  id: number | string;
};

export async function getCategory({ id }: CategoryRequest) {
  const res = await axios.get<GeneralResponse<Category>>(`/ar-service/admin/category/${id}`);

  return res.data.data;
}

type QueryFnType = typeof getCategory;

type UseCategoryOptions = {
  id: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useCategory({ config, id }: UseCategoryOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['category', id],
    queryFn: () => getCategory({ id }),
  });
}
