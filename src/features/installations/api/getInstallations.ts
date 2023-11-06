import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { PaginatedResult, Pagination } from '@/types/api';

import { Installation } from '../types';

type InstallationRequest = {
  params?: Pagination;
};

export async function getInstallations({ params }: InstallationRequest) {
  const res = await axios.get<PaginatedResult<Installation>>('/ar-service/install-base', {
    params,
  });

  return res.data.data;
}

type QueryFnType = typeof getInstallations;

type UseInstallationsOptions = {
  params?: Pagination;
  config?: QueryConfig<QueryFnType>;
};

export function useInstallations({ config, params }: UseInstallationsOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['installations', params],
    queryFn: () => getInstallations({ params }),
    keepPreviousData: true,
  });
}
