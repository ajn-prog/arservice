import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Unit, UnitDTO } from '../types';

export type UnitUpdateDTO = {
  id: number;
  data: UnitDTO;
};

export async function updateUnit({ id, data }: UnitUpdateDTO) {
  const res = await axios.put<GeneralResponse<Unit>>(`/ar-service/admin/unit/${id}`, data);

  return res.data;
}

type UseUpdateUnitOptions = {
  config?: MutationConfig<typeof updateUnit>;
};

export function useUpdateUnit({ config }: UseUpdateUnitOptions = {}) {
  return useMutation(updateUnit, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['units']);
      queryClient.invalidateQueries(['unit', args[1].id]);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
