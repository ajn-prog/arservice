import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Unit, UnitDTO } from '../types';

type UnitRequest = {
  data: UnitDTO;
};

export async function createUnit({ data }: UnitRequest) {
  const res = await axios.post<GeneralResponse<Unit>>('/ar-service/admin/unit', data);

  return res.data;
}

type UseCreateUnitOptions = {
  config?: MutationConfig<typeof createUnit>;
};

export function useCreateUnit({ config }: UseCreateUnitOptions = {}) {
  return useMutation(createUnit, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['units']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
