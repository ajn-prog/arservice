import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Complain } from '../types';

export type ComplainRequest = {
  id: number | string;
  data: {
    status: 'waiting' | 'progress' | 'close';
  };
};

export async function closeComplain({ id, data }: ComplainRequest) {
  const res = await axios.post<GeneralResponse<Complain>>(`/ar-service/close-complain/${id}`, data);

  return res.data;
}

type UseCloseComplainOptions = {
  config?: MutationConfig<typeof closeComplain>;
};

export function useCloseComplain({ config }: UseCloseComplainOptions = {}) {
  return useMutation(closeComplain, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['complains']);
      queryClient.invalidateQueries(['complain']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
