import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { PaginatedResult } from '@/types/api';

import { Service, ServiceQuery } from '../types';

type ServiceRequest = {
  params?: ServiceQuery;
};

export async function getServices({ params }: ServiceRequest) {
  const res = await axios.get<PaginatedResult<Service>>('/ar-service/service', { params });

  return res.data.data;
}

type QueryFnType = typeof getServices;

type UseServicesOptions = {
  params?: ServiceQuery;
  config?: QueryConfig<QueryFnType>;
};

export function useServices({ config, params }: UseServicesOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['services', params],
    queryFn: () => getServices({ params }),
    keepPreviousData: true,
  });
}
