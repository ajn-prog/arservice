import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { InstallationItem } from '../types';

export async function getItems() {
  const res = await axios.get<GeneralResponse<InstallationItem[]>>(
    '/ar-service/install-base/items'
  );

  return res.data;
}

type QueryFnType = typeof getItems;

type UseItemsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useItems({ config }: UseItemsOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['installbase-items'],
    queryFn: () => getItems(),
    keepPreviousData: true,
  });
}
