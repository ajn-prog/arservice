import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

type ServiceRequest = {
  id: number;
};

export async function deleteService({ id }: ServiceRequest) {
  const res = await axios.delete<GeneralResponse>(`/ar-service/service/${id}`);

  return res.data;
}

type UseDeleteServiceOptions = {
  config?: MutationConfig<typeof deleteService>;
};

export function useDeleteService({ config }: UseDeleteServiceOptions = {}) {
  return useMutation({
    ...config,
    mutationFn: deleteService,
    onSuccess: (...args) => {
      queryClient.invalidateQueries({ queryKey: ['service'] });
      queryClient.invalidateQueries({ queryKey: ['services'] });

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
