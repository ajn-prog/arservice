import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Guide } from '../types';

type GuideRequest = {
  id: number | string;
};

export async function getGuideItem({ id }: GuideRequest) {
  const res = await axios.get<GeneralResponse<Guide>>(`/ar-service/guide-product/item/${id}`);

  return res.data.data;
}

type QueryFnType = typeof getGuideItem;

type UseGuideItemOptions = {
  id: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useGuideItem({ config, id }: UseGuideItemOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['guide-item', id],
    queryFn: () => getGuideItem({ id }),
  });
}
