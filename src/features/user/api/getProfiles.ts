import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { PaginatedResult } from '@/types/api';

import { Profile } from '../types';

type ProfileRequest = {
  position?: 'teknisi' | 'manajemen' | 'penawar' | 'pengguna_alat';
};

export async function getProfiles(params: ProfileRequest) {
  const res = await axios.get<PaginatedResult<Profile>>('/ar-service/profile', {
    params,
  });

  return res.data.data;
}

type QueryFnType = typeof getProfiles;

type UseProfilesOptions = {
  position?: 'teknisi' | 'manajemen' | 'penawar' | 'pengguna_alat';
  config?: QueryConfig<QueryFnType>;
};

export function useProfiles({ config, position }: UseProfilesOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['profiles', position],
    queryFn: () => getProfiles({ position }),
    keepPreviousData: true,
  });
}
