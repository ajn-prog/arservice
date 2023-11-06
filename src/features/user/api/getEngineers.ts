import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { PaginatedResult, Pagination } from '@/types/api';

import { Engineer } from '../types';

type EngineerRequest = {
  params?: Pagination;
};

export async function getEngineers({ params }: EngineerRequest) {
  const res = await axios.get<PaginatedResult<Engineer>>('/ar-service/engineer', {
    params,
  });

  return res.data.data;
}

type QueryFnType = typeof getEngineers;

type UseEngineersOptions = {
  params?: Pagination;
  config?: QueryConfig<QueryFnType>;
};

export function useEngineers({ config, params }: UseEngineersOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['engineers', params],
    queryFn: () => getEngineers({ params }),
    keepPreviousData: true,
  });
}
