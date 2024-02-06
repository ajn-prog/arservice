import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Service, ServiceConfirmDTO } from '../types';

type ServiceRequest = {
  id: number | string;
  data: ServiceConfirmDTO;
};

export async function confirmService({ id, data }: ServiceRequest) {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    if (!value) continue;

    if (Array.isArray(value)) {
      value.forEach((v, i) => {
        if (v instanceof File) {
          formData.append(`${key}[${i}]`, v, v.name);
        } else {
          formData.append(`${key}[${i}]`, v);
        }
      });
    }
  }

  const res = await axios.post<GeneralResponse<Service>>(
    `/ar-service/service-confirm/${id}`,
    formData
  );

  return res.data;
}

type UseConfirmServiceOptions = {
  config?: MutationConfig<typeof confirmService>;
};

export function useConfirmService({ config }: UseConfirmServiceOptions = {}) {
  return useMutation({
    ...config,
    mutationFn: confirmService,
    onSuccess: (...args) => {
      queryClient.invalidateQueries({ queryKey: ['service'] });
      queryClient.invalidateQueries({ queryKey: ['services'] });

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
