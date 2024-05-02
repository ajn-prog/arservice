import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { dayjs } from '@/lib/dayjs';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Installation, InstallationDTO } from '../types';

export type InstallationUpdateDTO = {
  id: number;
  data: InstallationDTO;
};

export async function updateInstallation({ id, data }: InstallationUpdateDTO) {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    if (!value) continue;

    if (Array.isArray(value)) {
      if (typeof value[0] == 'string') {
        value.forEach((v, i) => {
          formData.append(`${key}[${i}]`, v.toString());
        });
      } else {
        value.forEach((v, i) => {
          for (const [key, value] of Object.entries(v)) {
            formData.append(`${key}[${i}]`, value.toString());
          }
        });
      }
    } else if (value instanceof Date) {
      formData.append(key, dayjs(value).utc(true).toJSON());
    } else if (value instanceof File) {
      formData.append(key, value, value.name);
    } else {
      formData.append(key, value.toString());
    }
  }

  const res = await axios.post<GeneralResponse<Installation>>(
    `/ar-service/install-base/${id}`,
    formData
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
      queryClient.invalidateQueries(['installation']);
      queryClient.invalidateQueries(['installbase-items']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
