import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Regency } from '../types';

export async function getRegencies(provinceId: number | string) {
  const res = await axios.get<GeneralResponse<Regency[]>>(
    `/ar-service/region/kabupaten/${provinceId}`
  );

  return res.data.data;
}

type QueryFnType = typeof getRegencies;

type UseRegenciesOptions = {
  provinceId: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useRegencies({ provinceId, config }: UseRegenciesOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['regencies', provinceId],
    queryFn: () => getRegencies(provinceId),
    keepPreviousData: true,
  });
}
