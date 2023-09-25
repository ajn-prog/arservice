import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { Province } from '../types';

type ProvinceDTO = {
  id: number | string;
};

export async function getProvince({ id }: ProvinceDTO) {
  const res = await axios.get<Province>(`/region/province/${id}`);

  return res.data;
}

type QueryFnType = typeof getProvince;

type UseProvinceOptions = {
  id: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useProvince({ config, id }: UseProvinceOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['province', id],
    queryFn: () => getProvince({ id }),
  });
}
