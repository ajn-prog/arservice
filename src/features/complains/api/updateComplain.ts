import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Complain, ComplainDTO } from '../types';

export type ComplainUpdateDTO = {
  id: number;
  data: ComplainDTO;
};

export async function updateComplain({ id, data }: ComplainUpdateDTO) {
  const res = await axios.put<GeneralResponse<Complain>>(`/ar-service/complain/${id}`, data);

  return res.data;
}

type UseUpdateComplainOptions = {
  config?: MutationConfig<typeof updateComplain>;
};

export function useUpdateComplain({ config }: UseUpdateComplainOptions = {}) {
  return useMutation(updateComplain, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['complains']);
      queryClient.invalidateQueries(['complain', args[1].id]);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
