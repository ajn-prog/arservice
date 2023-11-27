import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Tracking } from '../types';

type TrackingRequest = {
  data: {
    waybill: string;
  };
};

export async function getTracking({ data }: TrackingRequest) {
  const res = await axios.post<GeneralResponse<Tracking>>('/ar-service/tracking-check', data);

  return res.data;
}

type UseTrackingOptions = {
  config?: MutationConfig<typeof getTracking>;
};

export function useTracking({ config }: UseTrackingOptions = {}) {
  return useMutation(getTracking, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['tracking']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
