import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

import { Rajaongkir, WaybillDTO } from '../types';

type WaybillRequest = {
  data: WaybillDTO;
};

type WaybillResponse = {
  rajaongkir: Rajaongkir;
};

export async function getWaybill({ data }: WaybillRequest) {
  const res = await axios.post<WaybillResponse>('/ar-service/tracking-check', data);

  return res.data;
}

type UseWaybillOptions = {
  config?: MutationConfig<typeof getWaybill>;
};

export function useWaybill({ config }: UseWaybillOptions = {}) {
  return useMutation(getWaybill, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['waybills']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
