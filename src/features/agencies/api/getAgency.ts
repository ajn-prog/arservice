import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Agency } from '../types';

type AgencyRequest = {
  id: number | string;
};

export async function getAgency({ id }: AgencyRequest) {
  const res = await axios.get<GeneralResponse<Agency>>(`/ar-service/customer/${id}`);

  return res.data.data;
}

type QueryFnType = typeof getAgency;

type UseAgencyOptions = {
  id: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useAgency({ config, id }: UseAgencyOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['agency', id],
    queryFn: () => getAgency({ id }),
  });
}
