import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Unit } from '../../types';

type UnitRequest = {
  id: number;
};

export async function deleteUnit({ id }: UnitRequest) {
  const res = await axios.delete<GeneralResponse<Unit>>(`/ar-service/admin/unit/${id}`);

  return res.data;
}

type UseDeleteUnitOptions = {
  config?: MutationConfig<typeof deleteUnit>;
};

export function useDeleteUnit({ config }: UseDeleteUnitOptions = {}) {
  return useMutation(deleteUnit, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['units']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
