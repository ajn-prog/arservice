import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Complain } from '../types';

type RateComplain = {
  data: {
    rate: number;
    complain_reply_id: number | string;
  };
};

export async function rateComplain({ data }: RateComplain) {
  const res = await axios.post<GeneralResponse<Complain>>(`/ar-service/complain-rate`, data);

  return res.data;
}

type UseRateComplainOptions = {
  config?: MutationConfig<typeof rateComplain>;
};

export function useRateComplain({ config }: UseRateComplainOptions = {}) {
  return useMutation(rateComplain, {
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
