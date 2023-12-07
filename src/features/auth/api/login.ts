import { useMutation } from '@tanstack/react-query';

import { User } from '@/features/user';
import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';
import storage from '@/utils/storage';

import { CREDS_KEY } from './creds';

type LoginDTO = {
  data: {
    email: string;
    password: string;
  };
};

type LoginResponse = GeneralResponse<{
  access_token: string;
  token_type: string;
  user: User;
}>;

export async function login({ data }: LoginDTO): Promise<LoginResponse> {
  const res = await axios.post<LoginResponse>('/auth/login', data);
  const { role } = res.data.data.user;

  if (role != 'Superadmin' && role != 'Customer' && role != 'Logistic' && role != 'Engineer')
    throw { message: 'Anda tidak memiliki akses kedalam aplikasi ini' };

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
