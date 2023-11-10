import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Cart } from '../types';

export async function getCarts() {
  const res = await axios.get<GeneralResponse<Cart[]>>('/ar-service/cart');

  return res.data.data;
}

type QueryFnType = typeof getCarts;

type UseCartsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useCarts({ config }: UseCartsOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['carts'],
    queryFn: () => getCarts(),
    keepPreviousData: true,
  });
}
