import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Tender } from '../types';

type TenderRequest = {
  id: number;
};

export async function deleteTender({ id }: TenderRequest) {
  const res = await axios.delete<GeneralResponse<Tender>>(`/ar-service/tender/${id}`);

  return res.data;
}

type UseDeleteTenderOptions = {
  config?: MutationConfig<typeof deleteTender>;
};

export function useDeleteTender({ config }: UseDeleteTenderOptions = {}) {
  return useMutation(deleteTender, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['tenders']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
