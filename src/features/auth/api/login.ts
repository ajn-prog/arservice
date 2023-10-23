import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';
import storage from '@/utils/storage';

import { Creds } from '../types';

import { CREDS_KEY } from './creds';

type LoginDTO = {
  data: {
    email: string;
    password: string;
  };
};

type LoginResponse = GeneralResponse<{
  access_token: string;
  token_type: Creds;
  user: Creds;
}>;

export async function login({ data }: LoginDTO): Promise<LoginResponse> {
  const res = await axios.post<LoginResponse>('/auth/login', data);

  return res.data;
}

type UseLoginOption = {
  config?: MutationConfig<typeof login>;
};

export function useLogin({ config }: UseLoginOption = {}) {
  return useMutation(login, {
    onSuccess: ({ data: { access_token, user } }) => {
      queryClient.setQueryData([CREDS_KEY], user);
      storage.setToken(access_token);
    },
    ...config,
  });
}
