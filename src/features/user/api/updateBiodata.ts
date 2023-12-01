import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Biodata, BiodataDTO } from '../types';

type BiodataRequest = {
  data: BiodataDTO;
};

export async function updateBiodata({ data }: BiodataRequest) {
  const res = await axios.post<GeneralResponse<Biodata>>(`/ar-service/profile/biodata`, data);

  return res.data;
}

type UseUpdateBiodataOptions = {
  config?: MutationConfig<typeof updateBiodata>;
};

export function useUpdateBiodata({ config }: UseUpdateBiodataOptions = {}) {
  return useMutation(updateBiodata, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['biodata']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
