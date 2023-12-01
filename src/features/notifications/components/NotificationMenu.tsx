import { ActionIcon, Menu } from '@mantine/core';
import { IconBell } from '@tabler/icons-react';

import { useNotifications } from '../api';

export const NotificationMenu: React.FC = () => {
  const { data } = useNotifications({ params: { limit: 100 } });

  return (
    <Menu position="bottom-end" width={320}>
      <Menu.Target>
        <ActionIcon variant="subtle" size="lg" color="gray" className="text-gray-800" radius="lg">
          <IconBell style={{ width: '70%', height: '70%' }} stroke={1.4} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown p={0}>
        <div className="px-4 py-2.5 border-b border-gray-200">
          <h2 className="text-base font-semibold">Notifikasi</h2>
        </div>

        <div className="divide-y divide-gray-200 h-48 overflow-scroll">
          {data?.map((notification) => (
            <div key={notification.id} className="px-4 py-2 flex items-center">
              <div className="flex-grow">
                {/* <Badge size="xs">{notification.product.brand.name}</Badge> */}
                <div className="text-sm font-bold">{notification.title}</div>
                <div
                  className="text-xs text-gray-600"
                  dangerouslySetInnerHTML={{ __html: notification.description }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Menu.Dropdown>
    </Menu>
  );
};
