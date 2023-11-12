import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { PaginatedResult, Pagination } from '@/types/api';

import { Complain } from '../types';

type ComplainRequest = {
  params?: Pagination;
};

export async function getComplains({ params }: ComplainRequest) {
  const res = await axios.get<PaginatedResult<Complain>>('/ar-service/complain', {
    params,
  });

  return res.data.data;
}

type QueryFnType = typeof getComplains;

type UseComplainsOptions = {
  params?: Pagination;
  config?: QueryConfig<QueryFnType>;
};

export function useComplains({ config, params }: UseComplainsOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['complains', params],
    queryFn: () => getComplains({ params }),
    keepPreviousData: true,
  });
}
