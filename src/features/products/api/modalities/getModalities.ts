import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { PaginatedResult, Pagination } from '@/types/api';

import { Modality } from '../../types';

type ModalityRequest = {
  params?: Pagination;
};

export async function getModalities({ params }: ModalityRequest) {
  const res = await axios.get<PaginatedResult<Modality>>('/ar-service/modality', { params });

  return res.data.data;
}

type QueryFnType = typeof getModalities;

type UseModalitiesOptions = {
  params?: Pagination;
  config?: QueryConfig<QueryFnType>;
};

export function useModalities({ config, params }: UseModalitiesOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['modalities', params],
    queryFn: () => getModalities({ params }),
    keepPreviousData: true,
  });
}
