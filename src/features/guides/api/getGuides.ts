import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { PaginatedResult, Pagination } from '@/types/api';

import { Guide } from '../types';

type GuideRequest = {
  params?: Pagination;
};

export async function getGuides({ params }: GuideRequest) {
  const res = await axios.get<PaginatedResult<Guide>>('/ar-service/guide-product', {
    params,
  });

  return res.data.data;
}

type QueryFnType = typeof getGuides;

type UseGuidesOptions = {
  params?: Pagination;
  config?: QueryConfig<QueryFnType>;
};

export function useGuides({ config, params }: UseGuidesOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['guides', params],
    queryFn: () => getGuides({ params }),
    keepPreviousData: true,
  });
}
