import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { Regency } from '../types';

type RegencyDTO = {
  id: number | string;
};

export async function getRegency({ id }: RegencyDTO) {
  const res = await axios.get<Regency>(`/region/regency/${id}`);

  return res.data;
}

type QueryFnType = typeof getRegency;

type UseRegencyOptions = {
  id: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useRegency({ config, id }: UseRegencyOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['regency', id],
    queryFn: () => getRegency({ id }),
  });
}
