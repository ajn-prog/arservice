import { Menu, UnstyledButton } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';

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
            <div className="w-9 h-9 rounded-full bg-primary-100 overflow-hidden relative">
              <img
                src={creds?.display_picture}
                alt=""
                className="absolute inset-0 object-cover object-center"
              />
            </div>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown className="px-0">
          <Menu.Item>
            <div className="flex items-center gap-x-2 transition">
              <div className="w-9 h-9 bg-gray-200 rounded-full overflow-hidden relative flex-shrink-0">
                <img
                  src={creds?.display_picture}
                  alt=""
                  className="absolute inset-0 object-cover object-center"
                />
              </div>
              <div className="text-sm">
                <div className="font-bold line-clamp-1 text-gray-700">{creds?.name}</div>
                <div className="line-clamp-1 text-gray-600 text-xs">{creds?.email}</div>
              </div>
            </div>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item onClick={handleLogout}>
            <div className="flex items-center gap-x-2 w-full transition text-sm text-gray-700">
              <IconLogout className="w-5 h-5" />
              <div className="font-semibold">Sign Out</div>
            </div>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};
