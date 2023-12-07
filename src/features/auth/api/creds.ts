import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { GeneralResponse } from '@/types/api';
import storage from '@/utils/storage';

import { Creds } from '../types';

import { logout } from './logout';

export const CREDS_KEY = 'creds';

export async function getCreds() {
  const res = await axios.get<GeneralResponse<Creds>>('/auth/userProfile');

  return res.data.data;
}

export async function loadCreds() {
  if (!storage.getToken()) return null;

  const data = await getCreds();

  if (
    data.role != 'Superadmin' &&
    data.role != 'Customer' &&
    data.role != 'Logistic' &&
    data.role != 'Engineer'
  ) {
    logout();
    return null;
  }

  return data;
}

export function useCreds() {
  return useQuery([CREDS_KEY], loadCreds, {
    onError: () => {
      storage.clearToken();
    },
  });
}
