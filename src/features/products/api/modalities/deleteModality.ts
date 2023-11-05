import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Modality } from '../../types';

type ModalityRequest = {
  id: number;
};

export async function deleteModality({ id }: ModalityRequest) {
  const res = await axios.delete<GeneralResponse<Modality>>(`/ar-service/modality/${id}`);

  return res.data;
}

type UseDeleteModalityOptions = {
  config?: MutationConfig<typeof deleteModality>;
};

export function useDeleteModality({ config }: UseDeleteModalityOptions = {}) {
  return useMutation(deleteModality, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['modalities']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
