import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Guide, GuideDTO } from '../types';

type GuideRequest = {
  data: GuideDTO;
};

export async function createGuide({ data }: GuideRequest) {
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

  const res = await axios.post<GeneralResponse<Guide>>('/ar-service/guide-product', formData);

  return res.data;
}

type UseCreateGuideOptions = {
  config?: MutationConfig<typeof createGuide>;
};

export function useCreateGuide({ config }: UseCreateGuideOptions = {}) {
  return useMutation(createGuide, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['guides']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
