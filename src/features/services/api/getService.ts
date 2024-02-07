import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Service } from '../types';

type ServiceRequest = {
  id: number | string;
};

export async function getService({ id }: ServiceRequest) {
  const res = await axios.get<GeneralResponse<Service>>(`/ar-service/service/${id}`);

  return res.data.data;
}

type QueryFnType = typeof getService;

type UseServiceOptions = {
  id: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useService({ config, id }: UseServiceOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['service', id],
    queryFn: () => getService({ id }),
  });
}
