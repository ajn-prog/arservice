import { Button, PasswordInput, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';

import { useUpdateUser } from '../api';
import { User, UserRequest } from '../types';

type Props = {
  user: User;
  onSuccess?: () => void;
  onCancel?: () => void;
};

export const UserUpdateForm: React.FC<Props> = ({ user, onCancel, onSuccess }) => {
  const form = useForm<UserRequest>({
    initialValues: {
      username: user.username,
      password: '',
      role: user.role,
      status: user.status,
    },
  });
  const { mutateAsync, isLoading } = useUpdateUser({
    config: {
      onError({ response }) {
        form.setErrors((response?.data as any).errors);
      },
      onSuccess() {
        notifications.show({
          message: 'User berhasil diubah',
          color: 'green',
          icon: <IconCheck />,
        });
        if (onSuccess) {
          onSuccess();
        }
      },
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    await mutateAsync({ id: user.id, data: values });
  });

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <TextInput label="Nama" required {...form.getInputProps('name')} />
        <TextInput label="Username" required {...form.getInputProps('username')} />
        <PasswordInput
          label="Password"
          placeholder="Biarkan kosong. Jika, tidak berubah"
          {...form.getInputProps('password')}
        />
        <Select
          {...form.getInputProps('role')}
          label="Role"
          required
          data={[
            { label: 'Superadmin', value: 'super admin' },
            { label: 'Admin', value: 'admin' },
            { label: 'Kasir', value: 'kasir' },
          ]}
          withinPortal
        />
        <Select
          {...form.getInputProps('status')}
          label="Status"
          required
          value={form.values['status'] ? 'true' : 'false'}
          onChange={(v) => {
            if (v == null) return;

            form.setFieldValue('status', v == 'true' ? true : false);
          }}
          data={[
            { label: 'Aktif', value: 'true' },
            { label: 'Nonaktif', value: 'false' },
          ]}
          withinPortal
        />
      </div>

      <div className="flex items-center justify-end gap-4 mt-4">
        <Button type="button" variant="default" onClick={onCancel} loading={isLoading}>
          Batal
        </Button>
        <Button type="submit" loading={isLoading}>
          Simpan
        </Button>
      </div>
    </form>
  );
};
