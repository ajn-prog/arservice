import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Brand } from '../types';

type BrandRequest = {
  id: number | string;
};

export async function getBrand({ id }: BrandRequest) {
  const res = await axios.get<GeneralResponse<Brand>>(`/ar-service/admin/brand/${id}`);

  return res.data.data;
}

type QueryFnType = typeof getBrand;

type UseBrandOptions = {
  id: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useBrand({ config, id }: UseBrandOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['brand', id],
    queryFn: () => getBrand({ id }),
  });
}
