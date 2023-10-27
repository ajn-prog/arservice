import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Unit } from '../../types';

type UnitRequest = {
  id: number | string;
};

export async function getUnit({ id }: UnitRequest) {
  const res = await axios.get<GeneralResponse<Unit>>(`/ar-service/admin/unit/${id}`);

  return res.data.data;
}

type QueryFnType = typeof getUnit;

type UseUnitOptions = {
  id: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useUnit({ config, id }: UseUnitOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['unit', id],
    queryFn: () => getUnit({ id }),
  });
}
