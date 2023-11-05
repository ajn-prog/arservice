import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Modality } from '../../types';

type ModalityRequest = {
  id: number | string;
};

export async function getModality({ id }: ModalityRequest) {
  const res = await axios.get<GeneralResponse<Modality>>(`/ar-service/modality/${id}`);

  return res.data.data;
}

type QueryFnType = typeof getModality;

type UseModalityOptions = {
  id: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useModality({ config, id }: UseModalityOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['modality', id],
    queryFn: () => getModality({ id }),
  });
}
