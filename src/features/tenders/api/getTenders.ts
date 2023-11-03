import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { PaginatedResult } from '@/types/api';

import { Tender, TenderQuery } from '../types';

type TenderRequest = {
  params?: TenderQuery;
};

export async function getTenders({ params }: TenderRequest) {
  const res = await axios.get<PaginatedResult<Tender>>('/ar-service/tender', { params });

  return res.data.data;
}

type QueryFnType = typeof getTenders;

type UseTendersOptions = {
  params?: TenderQuery;
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
