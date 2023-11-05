import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Modality, ModalityDTO } from '../../types';

type ModalityRequest = {
  data: ModalityDTO;
};

export async function createModality({ data }: ModalityRequest) {
  const res = await axios.post<GeneralResponse<Modality>>('/ar-service/modality', data);

  return res.data;
}

type UseCreateModalityOptions = {
  config?: MutationConfig<typeof createModality>;
};

export function useCreateModality({ config }: UseCreateModalityOptions = {}) {
  return useMutation(createModality, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['modalities']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
