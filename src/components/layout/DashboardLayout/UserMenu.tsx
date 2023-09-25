import { Menu, UnstyledButton } from '@mantine/core';
import { IconUser, IconLogout } from '@tabler/icons-react';

import { useAuth } from '@/features/auth';

export const UserMenu: React.FC = () => {
  const { creds, logout } = useAuth();

  function handleLogout() {
    logout();
  }

  return (
    <div>
      <Menu withArrow position="bottom-end" shadow="md" width={256}>
        <Menu.Target>
          <UnstyledButton className="inline-flex justify-center items-center text-primary-600">
            <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center">
              <IconUser />
            </div>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown className="px-0">
          <Menu.Item>
            <div className="flex items-center gap-x-2 transition">
              <div className="w-9 h-9 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div className="text-sm">
                <div className="font-bold line-clamp-1 text-gray-800">{creds?.username}</div>
              </div>
            </div>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item onClick={handleLogout}>
            <div className="flex items-center gap-x-2 w-full transition text-sm text-gray-900">
              <IconLogout className="w-5 h-5" />
              <div className="font-semibold">Sign Out</div>
            </div>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};
