import { Button, PasswordInput, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';

import { useCreateUser } from '../api';
import { User, UserRequest } from '../types';

type Props = {
  role?: UserRequest['role'];
  onSuccess?: (result: User) => void;
  onCancel?: () => void;
};

export const UserCreateForm: React.FC<Props> = ({ role, onSuccess, onCancel }) => {
  const form = useForm<UserRequest>({
    initialValues: {
      username: '',
      password: '',
      role: role ? role : 'admin',
      status: true,
    },
  });
  const { mutateAsync, isLoading } = useCreateUser();

  const handleSubmit = form.onSubmit(async (values) => {
    await mutateAsync(
      { data: values },
      {
        onError({ response }) {
          form.setErrors((response?.data as any).errors);
        },
        onSuccess({ result }) {
          notifications.show({
            message: 'User berhasil dibuat',
            color: 'green',
            icon: <IconCheck />,
          });

          if (onSuccess) {
            onSuccess(result);
          }
        },
      }
    );
  });

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <TextInput label="Username" required {...form.getInputProps('username')} />
        <PasswordInput label="Password" required {...form.getInputProps('password')} />
        {!role && (
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
        )}
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
          Tambah
        </Button>
      </div>
    </form>
  );
};
