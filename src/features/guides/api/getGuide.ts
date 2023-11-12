import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { GuideList } from '../types';

type GuideRequest = {
  id: number | string;
};

export async function getGuide({ id }: GuideRequest) {
  const res = await axios.get<GeneralResponse<GuideList>>(`/ar-service/guide-product/${id}`);

  return res.data.data;
}

type QueryFnType = typeof getGuide;

type UseGuideOptions = {
  id: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useGuide({ config, id }: UseGuideOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['guides', id],
    queryFn: () => getGuide({ id }),
  });
}
