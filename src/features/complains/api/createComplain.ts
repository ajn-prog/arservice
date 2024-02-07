import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Complain, ComplainDTO } from '../types';

type ComplainRequest = {
  data: ComplainDTO;
};

export async function createComplain({ data }: ComplainRequest) {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    if (!value) continue;

    if (Array.isArray(value)) {
      value.forEach((v, i) => {
        if (value instanceof File) {
          formData.append(`${key}[${i}]`, v, v.name);
        } else {
          formData.append(`${key}[${i}]`, v);
        }
      });
    } else {
      formData.append(key, value.toString());
    }
  }

  const res = await axios.post<GeneralResponse<Complain>>(
    data.buying == 'internal' ? '/ar-service/complain' : '/ar-service/complain-external',
    formData
  );

  return res.data;
}

type UseCreateComplainOptions = {
  config?: MutationConfig<typeof createComplain>;
};

export function useCreateComplain({ config }: UseCreateComplainOptions = {}) {
  return useMutation(createComplain, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['complains']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
