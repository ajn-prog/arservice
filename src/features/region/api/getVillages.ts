import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { PaginatedResult } from '@/types/api';

import { RegencyQuery, Village } from '../types';

type VillagesDTO = {
  params?: RegencyQuery;
};

export async function getVillages({ params }: VillagesDTO) {
  const res = await axios.get<PaginatedResult<Village>>('/region/village', { params });

  return res.data;
}

type QueryFnType = typeof getVillages;

type UseVillagesOptions = {
  params?: RegencyQuery;
  config?: QueryConfig<QueryFnType>;
};

export function useVillages({ config, params }: UseVillagesOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['villages', params],
    queryFn: () => getVillages({ params }),
    keepPreviousData: true,
  });
}
