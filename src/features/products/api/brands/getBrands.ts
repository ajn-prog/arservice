import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { PaginatedResult } from '@/types/api';

import { Brand, BrandQuery } from '../../types';

type BrandRequest = {
  params?: BrandQuery;
};

export async function getBrands({ params }: BrandRequest) {
  const res = await axios.get<PaginatedResult<Brand>>('/ar-service/brand', { params });

  return res.data.data;
}

type QueryFnType = typeof getBrands;

type UseBrandsOptions = {
  params?: BrandQuery;
  config?: QueryConfig<QueryFnType>;
};

export function useBrands({ config, params }: UseBrandsOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['brands', params],
    queryFn: () => getBrands({ params }),
    keepPreviousData: true,
  });
}
