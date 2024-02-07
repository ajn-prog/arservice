import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Service, ServiceInternalDTO } from '../types';

type ServiceRequest = {
  id: number | string;
  data: ServiceInternalDTO;
};

export async function updateService({ id, data }: ServiceRequest) {
  const res = await axios.post<GeneralResponse<Service>>(`/ar-service/service/${id}`, data);

  return res.data;
}

type UseUpdateServiceOptions = {
  config?: MutationConfig<typeof updateService>;
};

export function useUpdateService({ config }: UseUpdateServiceOptions = {}) {
  return useMutation({
    ...config,
    mutationFn: updateService,
    onSuccess: (...args) => {
      queryClient.invalidateQueries({ queryKey: ['service'] });
      queryClient.invalidateQueries({ queryKey: ['services'] });

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
