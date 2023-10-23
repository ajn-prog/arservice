import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { PaginatedResult } from '@/types/api';

import { Category, CategoryQuery } from '../types';

type CategoryRequest = {
  params?: CategoryQuery;
};

export async function getCategories({ params }: CategoryRequest) {
  const res = await axios.get<PaginatedResult<Category>>('/ar-service/admin/category', { params });

  return res.data.data;
}

type QueryFnType = typeof getCategories;

type UseCategoriesOptions = {
  params?: CategoryQuery;
  config?: QueryConfig<QueryFnType>;
};

export function useCategories({ config, params }: UseCategoriesOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['categories', params],
    queryFn: () => getCategories({ params }),
    keepPreviousData: true,
  });
}
