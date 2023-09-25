import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { PaginatedResult } from '@/types/api';

import { Regency, RegencyQuery } from '../types';

type RegenciesDTO = {
  params?: RegencyQuery;
};

export async function getRegencies({ params }: RegenciesDTO) {
  const res = await axios.get<PaginatedResult<Regency>>('/region/regency', { params });

  return res.data;
}

type QueryFnType = typeof getRegencies;

type UseRegenciesOptions = {
  params?: RegencyQuery;
  config?: QueryConfig<QueryFnType>;
};

export function useRegencies({ config, params }: UseRegenciesOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['regencies', params],
    queryFn: () => getRegencies({ params }),
    keepPreviousData: true,
  });
}
