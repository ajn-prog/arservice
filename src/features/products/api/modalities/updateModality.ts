import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Modality, ModalityDTO } from '../../types';

export type ModalityUpdateDTO = {
  id: number;
  data: ModalityDTO;
};

export async function updateModality({ id, data }: ModalityUpdateDTO) {
  const res = await axios.put<GeneralResponse<Modality>>(`/ar-service/modality/${id}`, data);

  return res.data;
}

type UseUpdateModalityOptions = {
  config?: MutationConfig<typeof updateModality>;
};

export function useUpdateModality({ config }: UseUpdateModalityOptions = {}) {
  return useMutation(updateModality, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['modalities']);
      queryClient.invalidateQueries(['modality', args[1].id]);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
