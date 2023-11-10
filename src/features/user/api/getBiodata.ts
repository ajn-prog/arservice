import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Biodata } from '../types';

export async function getBiodata() {
  const res = await axios.get<GeneralResponse<Biodata>>('/ar-service/biodata');

  return res.data.data;
}

type QueryFnType = typeof getBiodata;

type UseBiodataOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useBiodata({ config }: UseBiodataOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['biodata'],
    queryFn: () => getBiodata(),
  });
}
