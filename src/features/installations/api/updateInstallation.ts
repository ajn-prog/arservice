import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Installation, InstallationDTO } from '../types';

export type InstallationUpdateDTO = {
  id: number;
  data: InstallationDTO;
};

export async function updateInstallation({ id, data }: InstallationUpdateDTO) {
  const res = await axios.put<GeneralResponse<Installation>>(
    `/ar-service/install-base/${id}`,
    data
  );

  return res.data;
}

type UseUpdateInstallationOptions = {
  config?: MutationConfig<typeof updateInstallation>;
};

export function useUpdateInstallation({ config }: UseUpdateInstallationOptions = {}) {
  return useMutation(updateInstallation, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['installations']);
      queryClient.invalidateQueries(['installation', args[1].id]);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
