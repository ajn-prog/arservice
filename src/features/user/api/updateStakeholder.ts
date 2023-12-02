import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { Stakeholder, StakeholderDTO } from '../types';

type StakeholderRequest = {
  data: StakeholderDTO;
};

export async function updateStakeholder({ data }: StakeholderRequest) {
  const formData = new FormData();

  data.values.forEach((v, i) => {
    formData.append(`name[${i}]`, v.name || '');
    formData.append(`phone[${i}]`, v.phone || '');
    formData.append(`position[${i}]`, data.position || '');
    formData.append(`tool_type[${i}]`, v.tool_type || '');
  });

  const res = await axios.post<GeneralResponse<Stakeholder>>(`/ar-service/profile`, formData);

  return res.data;
}

type UseUpdateStakeholderOptions = {
  config?: MutationConfig<typeof updateStakeholder>;
};

export function useUpdateStakeholder({ config }: UseUpdateStakeholderOptions = {}) {
  return useMutation(updateStakeholder, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['stakeholder']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
