import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { dayjs } from '@/lib/dayjs';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

type VisitRequest = {
  data: {
    complain_id?: number | string;
    visit_date?: Date;
    visit_type?: 'Customer Visit' | 'Corective Maintenance' | 'Preventive Maintenance';
  };
};

export async function visitComplain({ data }: VisitRequest) {
  const res = await axios.post<GeneralResponse>('/ar-service/complain-visit', {
    ...data,
    visit_date: dayjs(data.visit_date).format('YYYY-MM-DD'),
  });

  return res.data;
}

type UseVisitComplainOptions = {
  config?: MutationConfig<typeof visitComplain>;
};

export function useVisitComplain({ config }: UseVisitComplainOptions = {}) {
  return useMutation(visitComplain, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['complain']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
