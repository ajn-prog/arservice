import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Product } from '../../types';

type ProductRequest = {
  id: number | string;
};

export async function getProduct({ id }: ProductRequest) {
  const res = await axios.get<GeneralResponse<Product>>(`/ar-service/product/${id}`);

  return res.data.data;
}

type QueryFnType = typeof getProduct;

type UseProductOptions = {
  id: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useProduct({ config, id }: UseProductOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['product', id],
    queryFn: () => getProduct({ id }),
  });
}
