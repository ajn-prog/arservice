import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { District } from '../types';

export async function getDistricts(regencyId: number | string) {
  const res = await axios.get<GeneralResponse<District[]>>(
    `/ar-service/region/kecamatan/${regencyId}`
  );

  return res.data.data;
}

type QueryFnType = typeof getDistricts;

type UseDistrictsOptions = {
  regencyId: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useDistricts({ regencyId, config }: UseDistrictsOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['districts', regencyId],
    queryFn: () => getDistricts(regencyId),
    keepPreviousData: true,
  });
}
