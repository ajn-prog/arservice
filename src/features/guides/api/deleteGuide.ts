import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

type GuideRequest = {
  id: number;
};

export async function deleteGuide({ id }: GuideRequest) {
  const res = await axios.delete<GeneralResponse>(`/ar-service/guide-product/${id}`);

  return res.data;
}

type UseDeleteGuideOptions = {
  config?: MutationConfig<typeof deleteGuide>;
};

export function useDeleteGuide({ config }: UseDeleteGuideOptions = {}) {
  return useMutation(deleteGuide, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['guides']);
      queryClient.invalidateQueries(['guide_list']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
