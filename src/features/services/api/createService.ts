import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Service, ServiceExternalDTO, ServiceInternalDTO } from '../types';

type ServiceRequest = {
  type: 'internal' | 'external';
  data: ServiceInternalDTO | ServiceExternalDTO;
};

export async function createService({ type, data }: ServiceRequest) {
  const res = await axios.post<GeneralResponse<Service>>(
    type == 'internal' ? '/ar-service/service' : '/ar-service/service-external',
    data
  );

  return res.data;
}

type UseCreateServiceOptions = {
  config?: MutationConfig<typeof createService>;
};

export function useCreateService({ config }: UseCreateServiceOptions = {}) {
  return useMutation({
    ...config,
    mutationFn: createService,
    onSuccess: (...args) => {
      queryClient.invalidateQueries({ queryKey: ['services'] });

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
