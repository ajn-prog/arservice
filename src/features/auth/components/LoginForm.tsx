import { Button, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconLock, IconMail } from '@tabler/icons-react';

import { useLogin } from '../api';

export const LoginForm: React.FC = () => {
  const form = useForm({ initialValues: { email: '', password: '' } });
  const loginMutation = useLogin();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await loginMutation.mutateAsync(
      { data: form.values },
      {
        onError: ({ response }) => {
          form.setErrors((response?.data as any).errors);
        },
      }
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <TextInput
          name="email"
          placeholder="Email"
          icon={<IconMail size={14} />}
          {...form.getInputProps('email')}
        />
      </div>
      <div className="mb-8">
        <PasswordInput
          name="password"
          placeholder="Password"
          icon={<IconLock size={14} />}
          {...form.getInputProps('password')}
        />
      </div>
      <Button type="submit" fullWidth loading={loginMutation.isLoading}>
        Masuk
      </Button>
    </form>
  );
};
