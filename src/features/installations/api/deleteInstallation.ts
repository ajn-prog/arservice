import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Installation } from '../types';

type InstallationRequest = {
  id: number;
};

export async function deleteInstallation({ id }: InstallationRequest) {
  const res = await axios.delete<GeneralResponse<Installation>>(`/ar-service/install-base/${id}`);

  return res.data;
}

type UseDeleteInstallationOptions = {
  config?: MutationConfig<typeof deleteInstallation>;
};

export function useDeleteInstallation({ config }: UseDeleteInstallationOptions = {}) {
  return useMutation(deleteInstallation, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['installations']);
      queryClient.invalidateQueries(['installbase-items']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
