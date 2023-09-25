import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { District } from '../types';

type DistrictDTO = {
  id: number | string;
};

export async function getDistrict({ id }: DistrictDTO) {
  const res = await axios.get<District>(`/region/district/${id}`);

  return res.data;
}

type QueryFnType = typeof getDistrict;

type UseDistrictOptions = {
  id: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useDistrict({ config, id }: UseDistrictOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['district', id],
    queryFn: () => getDistrict({ id }),
  });
}
