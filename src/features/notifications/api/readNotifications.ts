import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

export async function readNotifications() {
  const res = await axios.post('/ar-service/notification-read-all');

  return res.data;
}

type UseReadNotificationsOptions = {
  config?: MutationConfig<typeof readNotifications>;
};

export function useReadNotifications({ config }: UseReadNotificationsOptions = {}) {
  return useMutation(readNotifications, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['notifications']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
