import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse, Pagination } from '@/types/api';

import { Notification } from '../types';

type NotificationRequest = {
  params?: Pagination;
};

type NotificationResponse = {
  notifications: Notification[];
  count: number;
  read_count: number;
  unread_count: number;
  page: number;
  limit: number;
};

export async function getNotifications({ params }: NotificationRequest) {
  const res = await axios.get<GeneralResponse<NotificationResponse>>('/ar-service/notification', {
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

export function useInfiniteNotifications({ params }: UseNotificationsOptions = {}) {
  return useInfiniteQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['notifications', params],
    queryFn: ({ pageParam: page = 1 }) => getNotifications({ params: { ...params, page } }),
    getNextPageParam: ({ count, page, limit }) => {
      if (page * limit < count) {
        return page + 1;
      }

      return undefined;
    },
    getPreviousPageParam: ({ count, page, limit }) => {
      if (page < 2) return undefined;

      if (page * limit > count) {
        return page - 1;
      }

      return undefined;
    },
  });
}
