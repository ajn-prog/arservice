import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { InstallationItem } from '../types';

export type ItemQuery = {
  product?: number | string;
  brand?: number | string;
  customer?: number | string;
};

export async function getItems({ params }: { params?: ItemQuery }) {
  const res = await axios.get<GeneralResponse<InstallationItem[]>>(
    '/ar-service/install-base/items',
    { params }
  );

  return res.data;
}

type QueryFnType = typeof getItems;

type UseItemsOptions = {
  params?: ItemQuery;
  config?: QueryConfig<QueryFnType>;
};

export function useItems({ params, config }: UseItemsOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['installbase-items', params],
    queryFn: () => getItems({ params }),
    keepPreviousData: true,
  });
}
