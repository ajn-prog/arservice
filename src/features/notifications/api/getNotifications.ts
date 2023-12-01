import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse, Pagination } from '@/types/api';

import { Notification } from '../types';

type NotificationRequest = {
  params?: Pagination;
};

export async function getNotifications({ params }: NotificationRequest) {
  const res = await axios.get<GeneralResponse<Notification[]>>('/ar-service/notification', {
    params,
  });

  return res.data.data;
}

type QueryFnType = typeof getNotifications;

type UseNotificationsOptions = {
  params?: Pagination;
  config?: QueryConfig<QueryFnType>;
};

export function useNotifications({ config, params }: UseNotificationsOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['notifications', params],
    queryFn: () => getNotifications({ params }),
    keepPreviousData: true,
  });
}
