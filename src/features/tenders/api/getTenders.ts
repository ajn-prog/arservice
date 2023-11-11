import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { PaginatedResult, Pagination } from '@/types/api';

import { Tender } from '../types';

type TenderRequest = {
  params?: Pagination;
};

export async function getTenders({ params }: TenderRequest) {
  const res = await axios.get<PaginatedResult<Tender>>('/ar-service/tender', {
    params,
  });

  return res.data.data;
}

type QueryFnType = typeof getTenders;

type UseTendersOptions = {
  params?: Pagination;
  config?: QueryConfig<QueryFnType>;
};

export function useTenders({ config, params }: UseTendersOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['tenders', params],
    queryFn: () => getTenders({ params }),
    keepPreviousData: true,
  });
}
