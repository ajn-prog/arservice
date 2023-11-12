import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Complain } from '../types';

type ComplainRequest = {
  id: number;
};

export async function deleteComplain({ id }: ComplainRequest) {
  const res = await axios.delete<GeneralResponse<Complain>>(`/ar-service/complain/${id}`);

  return res.data;
}

type UseDeleteComplainOptions = {
  config?: MutationConfig<typeof deleteComplain>;
};

export function useDeleteComplain({ config }: UseDeleteComplainOptions = {}) {
  return useMutation(deleteComplain, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['complains']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
