import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Agency } from '../types';

type AgencyRequest = {
  id: number;
};

export async function deleteAgency({ id }: AgencyRequest) {
  const res = await axios.delete<GeneralResponse<Agency>>(`/ar-service/customer/${id}`);

  return res.data;
}

type UseDeleteAgencyOptions = {
  config?: MutationConfig<typeof deleteAgency>;
};

export function useDeleteAgency({ config }: UseDeleteAgencyOptions = {}) {
  return useMutation(deleteAgency, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['agencies']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
