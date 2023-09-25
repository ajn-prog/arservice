import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { PaginatedResult } from '@/types/api';

import { Province, ProvinceQuery } from '../types';

type ProvincesDTO = {
  params?: ProvinceQuery;
};

export async function getProvinces({ params }: ProvincesDTO) {
  const res = await axios.get<PaginatedResult<Province>>('/region/province', { params });

  return res.data;
}

type QueryFnType = typeof getProvinces;

type UseProvincesOptions = {
  params?: ProvinceQuery;
  config?: QueryConfig<QueryFnType>;
};

export function useProvinces({ config, params }: UseProvincesOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['provinces', params],
    queryFn: () => getProvinces({ params }),
    keepPreviousData: true,
  });
}
