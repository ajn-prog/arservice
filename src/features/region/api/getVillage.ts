import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { Village } from '../types';

type VillageDTO = {
  id: number | string;
};

export async function getVillage({ id }: VillageDTO) {
  const res = await axios.get<Village>(`/region/village/${id}`);

  return res.data;
}

type QueryFnType = typeof getVillage;

type UseVillageOptions = {
  id: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useVillage({ config, id }: UseVillageOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['village', id],
    queryFn: () => getVillage({ id }),
  });
}
