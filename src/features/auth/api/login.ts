import { useMutation } from '@tanstack/react-query';

import { MutationConfig, queryClient } from '@/lib/react-query';
import storage from '@/utils/storage';

import { Creds } from '../types';

import { CREDS_KEY } from './creds';

type LoginDTO = {
  data: {
    username: string;
    password: string;
  };
};

type LoginResponse = {
  token: string;
  creds: Creds;
};

export async function login({ data }: LoginDTO): Promise<LoginResponse> {
  console.log(data);
  // const res = await axios.post<LoginResponse>('/auth/login', data);

  return {
    token: 'asdqwe123',
    creds: {
      id: 1,
      role: 'admin',
      status: true,
      username: 'admin',
      name: 'Admin',
    },
  };
}

type UseLoginOption = {
  config?: MutationConfig<typeof login>;
};

export function useLogin({ config }: UseLoginOption = {}) {
  return useMutation(login, {
    onSuccess: ({ creds, token }) => {
      queryClient.setQueryData([CREDS_KEY], creds);
      storage.setToken(token);
    },
    ...config,
  });
}
