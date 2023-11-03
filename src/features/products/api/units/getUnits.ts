import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { PaginatedResult } from '@/types/api';

import { Unit, UnitQuery } from '../../types';

type UnitRequest = {
  params?: UnitQuery;
};

export async function getUnits({ params }: UnitRequest) {
  const res = await axios.get<PaginatedResult<Unit>>('/ar-service/unit', { params });

  return res.data.data;
}

type QueryFnType = typeof getUnits;

type UseUnitsOptions = {
  params?: UnitQuery;
  config?: QueryConfig<QueryFnType>;
};

export function useUnits({ config, params }: UseUnitsOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['units', params],
    queryFn: () => getUnits({ params }),
    keepPreviousData: true,
  });
}
