import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

export type OpenCallDTO = {
  data: {
    id: string | number;
    is_open_call: 'true' | 'false';
  };
};

export async function openCall({ data }: OpenCallDTO) {
  const res = await axios.post<GeneralResponse>(`/ar-service/open-call`, data);

  return res.data;
}

type UseOpenCallOptions = {
  config?: MutationConfig<typeof openCall>;
};

export function useOpenCall({ config }: UseOpenCallOptions = {}) {
  return useMutation(openCall, {
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
