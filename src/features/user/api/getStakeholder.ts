import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Stakeholder } from '../types';

type StakeholderRequest = {
  position: Stakeholder['position'];
};

export async function getStakeholders({ position }: StakeholderRequest) {
  const res = await axios.get<GeneralResponse<Stakeholder[]>>('/ar-service/profile', {
    params: { position },
  });

  return res.data.data;
}

type QueryFnType = typeof getStakeholders;

type UseStakeholdersOptions = {
  position: Stakeholder['position'];
  config?: QueryConfig<QueryFnType>;
};

export function useStakeholders({ config, position }: UseStakeholdersOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['stakeholders', position],
    queryFn: () => getStakeholders({ position }),
    keepPreviousData: true,
  });
}
