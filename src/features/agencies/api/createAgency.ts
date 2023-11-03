import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Agency, AgencyDTO } from '../types';

type AgencyRequest = {
  data: AgencyDTO;
};

export async function createAgency({ data }: AgencyRequest) {
  const res = await axios.post<GeneralResponse<Agency>>('/ar-service/customer', data);

  return res.data;
}

type UseCreateAgencyOptions = {
  config?: MutationConfig<typeof createAgency>;
};

export function useCreateAgency({ config }: UseCreateAgencyOptions = {}) {
  return useMutation(createAgency, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['agencies']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
