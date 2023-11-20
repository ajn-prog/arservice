import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { TenderUpdateDTO } from '../types';

export type TenderRequest = {
  id: number;
  data: TenderUpdateDTO;
};

export async function updateTender({ id, data }: TenderRequest) {
  if (data.status == 'rejected') {
    data.contract_value = undefined;
    data.delivery_cost = undefined;
  }

  const res = await axios.put<GeneralResponse>(`/ar-service/tender/${id}`, data);

  return res.data;
}

type UseUpdateTenderOptions = {
  config?: MutationConfig<typeof updateTender>;
};

export function useUpdateTender({ config }: UseUpdateTenderOptions = {}) {
  return useMutation(updateTender, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['tenders']);
      queryClient.invalidateQueries(['tender', args[1].id]);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
