import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Province } from '../types';

export async function getProvinces() {
  const res = await axios.get<GeneralResponse<Province[]>>('/ar-service/region/province');

  return res.data.data;
}

type QueryFnType = typeof getProvinces;

type UseProvincesOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useProvinces({ config }: UseProvincesOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['provinces'],
    queryFn: () => getProvinces(),
    keepPreviousData: true,
  });
}
