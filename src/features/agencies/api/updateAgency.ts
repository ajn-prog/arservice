import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Agency, AgencyDTO } from '../types';

export type AgencyUpdateDTO = {
  id: number;
  data: AgencyDTO;
};

export async function updateAgency({ id, data }: AgencyUpdateDTO) {
  const res = await axios.put<GeneralResponse<Agency>>(`/ar-service/customer/${id}`, data);

  return res.data;
}

type UseUpdateAgencyOptions = {
  config?: MutationConfig<typeof updateAgency>;
};

export function useUpdateAgency({ config }: UseUpdateAgencyOptions = {}) {
  return useMutation(updateAgency, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['agencies']);
      queryClient.invalidateQueries(['agency']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
