import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Installation } from '../types';

type InstallationRequest = {
  id: number | string;
};

export async function getInstallation({ id }: InstallationRequest) {
  const res = await axios.get<GeneralResponse<Installation>>(`/ar-service/install-base/${id}`);

  return res.data.data;
}

type QueryFnType = typeof getInstallation;

type UseInstallationOptions = {
  id: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useInstallation({ config, id }: UseInstallationOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['installation', id],
    queryFn: () => getInstallation({ id }),
  });
}
