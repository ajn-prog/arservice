import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { PaginatedResult } from '@/types/api';

import { Agency, AgencyQuery } from '../types';

type AgencyRequest = {
  params?: AgencyQuery;
};

export async function getAgencies({ params }: AgencyRequest) {
  const res = await axios.get<PaginatedResult<Agency>>('/ar-service/customer', { params });

  return res.data.data;
}

type QueryFnType = typeof getAgencies;

type UseAgenciesOptions = {
  params?: AgencyQuery;
  config?: QueryConfig<QueryFnType>;
};

export function useAgencies({ config, params }: UseAgenciesOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['agencies', params],
    queryFn: () => getAgencies({ params }),
    keepPreviousData: true,
  });
}
