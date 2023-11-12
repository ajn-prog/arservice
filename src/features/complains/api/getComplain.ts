import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Complain } from '../types';

type ComplainRequest = {
  id: number | string;
};

export async function getComplain({ id }: ComplainRequest) {
  const res = await axios.get<GeneralResponse<Complain>>(`/ar-service/complain/${id}`);

  return res.data.data;
}

type QueryFnType = typeof getComplain;

type UseComplainOptions = {
  id: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useComplain({ config, id }: UseComplainOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['complain', id],
    queryFn: () => getComplain({ id }),
  });
}
