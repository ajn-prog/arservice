import { ActionIcon, Badge, Button, Center, Indicator, Loader, Menu } from '@mantine/core';
import { IconBell } from '@tabler/icons-react';

import { dayjs } from '@/lib/dayjs';

import { useInfiniteNotifications, useReadNotifications } from '../api';
import { Notification } from '../types';

export const NotificationMenu: React.FC = () => {
  const { mutateAsync } = useReadNotifications();
  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteNotifications({
    params: { limit: 6 },
  });

  const notifications =
    data?.pages.reduce(
      (prev, { notifications }) => [...prev, ...notifications],
      [] as Notification[]
    ) ?? [];

  return (
    <Menu position="bottom-end" width={320} withArrow>
      <Menu.Target>
        <Indicator
          inline
          label={data?.pages[0].unread_count ?? 0}
          size={data?.pages[0].unread_count ?? 0 > 0 ? 18 : 0}
        >
          <ActionIcon
            onClick={() => mutateAsync(undefined)}
            variant="subtle"
            size="lg"
            color="gray"
            className="text-gray-800"
            radius="lg"
          >
            <IconBell style={{ width: '70%', height: '70%' }} stroke={1.4} />
          </ActionIcon>
        </Indicator>
      </Menu.Target>

      <Menu.Dropdown p={0}>
        <div className="px-4 py-2.5 border-b border-gray-200">
          <h2 className="text-base font-semibold">Notifikasi ({data?.pages[0].count})</h2>
        </div>

        <div className="max-h-[20rem] overflow-scroll">
          <div className="divide-y divide-gray-200">
            {notifications.map((notification) => (
              <div key={notification.id} className="px-4 py-2 flex items-center">
                <div className="flex-grow">
                  <div className="flex items-center space-x-2 mb-1.5">
                    <Badge variant="dot" size="xs">
                      {notification.type}
                    </Badge>
                    <span className="text-xs text-gray-600">
                      {dayjs(notification.created_at).fromNow()}
                    </span>
                  </div>
                  <div className="text-sm font-bold">{notification.title}</div>
                  <div
                    className="text-xs text-gray-600"
                    dangerouslySetInnerHTML={{ __html: notification.description }}
                  ></div>
                </div>
              </div>
            ))}

            {!isFetching && notifications.length == 0 && (
              <div className="text-center py-6 text-sm">Tidak ada notifikasi</div>
            )}
          </div>

          {isFetching ? (
            <Center py="md" className="mt-4">
              <Loader variant="dots" />
            </Center>
          ) : (
            hasNextPage && (
              <div className="px-4 pb-4 pt-2">
                <Button size="xs" variant="light" fullWidth onClick={() => fetchNextPage()}>
                  Selengkapnya
                </Button>
              </div>
            )
          )}
        </div>
      </Menu.Dropdown>
    </Menu>
  );
};
