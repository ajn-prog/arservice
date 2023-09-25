import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { PaginatedResult } from '@/types/api';

import { District, DistrictQuery } from '../types';

type DistrictsDTO = {
  params?: DistrictQuery;
};

export async function getDistricts({ params }: DistrictsDTO) {
  const res = await axios.get<PaginatedResult<District>>('/region/district', { params });

  return res.data;
}

type QueryFnType = typeof getDistricts;

type UseDistrictsOptions = {
  params?: DistrictQuery;
  config?: QueryConfig<QueryFnType>;
};

export function useDistricts({ config, params }: UseDistrictsOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['districts', params],
    queryFn: () => getDistricts({ params }),
    keepPreviousData: true,
  });
}
