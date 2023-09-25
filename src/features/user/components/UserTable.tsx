import { ActionIcon, Badge, Button, Card, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconEdit, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';

import { Table } from '@/components/elements';

import { useDeleteUser, useUsers } from '../api';
import { User, UserQuery } from '../types';

import { UserUpdateForm } from './UserUpdateForm';

const initialParams: UserQuery = {
  limit: 5,
  page: 1,
};

type Props = {
  title?: string;
  company?: number;
  roles?: UserQuery['roles'];
  onAdd?: () => void;
};

export const UserTable: React.FC<Props> = ({ title = 'Users', roles, company, onAdd }) => {
  const [params, setParams] = useState({ ...initialParams, roles, company });
  const { data } = useUsers({ params });
  const deleteMutation = useDeleteUser();

  function handlePage(page: number) {
    setParams({ ...params, page });
  }

  function handleRemove(id: number) {
    return () => {
      modals.openConfirmModal({
        title: 'Hapus User',
        children: <Text size="sm">Apakah anda yakin untuk menghapus user ini?</Text>,
        centered: true,
        closeOnConfirm: false,
        onConfirm: async () => {
          await deleteMutation.mutateAsync(
            { id },
            {
              onSuccess: () => {
                notifications.show({
                  message: 'User berhasil dihapus',
                  color: 'green',
                  icon: <IconCheck />,
                });
                modals.closeAll();
              },
            }
          );
        },
      });
    };
  }

  function handleUpdate(user: User) {
    return () => {
      modals.open({
        title: 'Update User',
        children: (
          <UserUpdateForm
            user={user}
            onSuccess={() => modals.closeAll()}
            onCancel={() => modals.closeAll()}
          />
        ),
      });
    };
  }

  return (
    <Card p="lg" shadow="sm">
      <div className="flex items-center justify-between mb-4">
        <div className="font-bold text-lg">
          <h2 className="text-gray-800 inline">{title} </h2>
        </div>

        {onAdd && (
          <Button size="xs" onClick={onAdd}>
            Tambah
          </Button>
        )}
      </div>

      <Card.Section>
        <Table
          header={['Username', 'Role', 'Status', '']}
          items={data?.result}
          onPageChange={handlePage}
          metadata={data?.metadata}
          renderItem={(user) => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td className="capitalize">{user.role}</td>
              <td className="capitalize">
                {user.status ? (
                  <Badge color="teal">Aktif</Badge>
                ) : (
                  <Badge color="red">Nonaktif</Badge>
                )}
              </td>
              <td>
                <div className="flex items-center space-x-2">
                  <ActionIcon
                    title="Remove user"
                    onClick={handleRemove(user.id)}
                    className="hover:bg-gray-100 active:bg-gray-200 text-red-500 rounded-full p-1"
                  >
                    <IconTrash size={18} />
                  </ActionIcon>
                  <ActionIcon
                    title="Update user"
                    onClick={handleUpdate(user)}
                    className="hover:bg-gray-100 active:bg-gray-200 text-gray-700 rounded-full p-1"
                  >
                    <IconEdit size={18} />
                  </ActionIcon>
                </div>
              </td>
            </tr>
          )}
        />
      </Card.Section>
    </Card>
  );
};
