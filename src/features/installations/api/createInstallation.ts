import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Installation, InstallationDTO } from '../types';

type InstallationRequest = {
  data: InstallationDTO;
};

export async function createInstallation({ data }: InstallationRequest) {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    if (!value) continue;

    if (Array.isArray(value)) {
      value.forEach((v, i) => {
        formData.append(`${key}[${i}]`, v.toString());
      });
    } else if (value instanceof Date) {
      formData.append(key, value.toJSON());
    } else if (value instanceof File) {
      formData.append(key, value, value.name);
    } else {
      formData.append(key, value.toString());
    }
  }

  const res = await axios.post<GeneralResponse<Installation>>('/ar-service/install-base', formData);

  return res.data;
}

type UseCreateInstallationOptions = {
  config?: MutationConfig<typeof createInstallation>;
};

export function useCreateInstallation({ config }: UseCreateInstallationOptions = {}) {
  return useMutation(createInstallation, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['installations']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
