import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { ReplyDTO } from '../types';

type ReplyRequest = {
  data: ReplyDTO;
};

export async function replyComplain({ data }: ReplyRequest) {
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

  const res = await axios.post<GeneralResponse>('/ar-service/complain/reply', formData);

  return res.data;
}

type UseReplyComplainOptions = {
  config?: MutationConfig<typeof replyComplain>;
};

export function useReplyComplain({ config }: UseReplyComplainOptions = {}) {
  return useMutation(replyComplain, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['complain']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
