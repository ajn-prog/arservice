import { Button, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconLock, IconMail } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { useLogin } from '../api';

export const LoginForm: React.FC = () => {
  const form = useForm({ initialValues: { email: '', password: '' } });
  const loginMutation = useLogin();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await loginMutation.mutateAsync(
      { data: form.values },
      {
        onError: ({ response, message }) => {
          if (response?.data.errors) {
            form.setErrors(response.data.errors);
          } else {
            notifications.show({
              message,
              color: 'red',
            });
          }
        },
      }
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col justify-center align-middle space-y-6 w-full max-w-xs"
    >
      <div className="font-roboto font-bold text-[40px] text-[#1C1C55] text-center">Welcome !</div>
      <div className="font-roboto font-normal text-[22px] text-[#1C1C55] text-center">
        Log in your account
      </div>
      <div className="mb-4">
        <TextInput
          name="email"
          placeholder="Email"
          leftSection={<IconMail size={14} />}
          {...form.getInputProps('email')}
        />
      </div>
      <div className="mb-8">
        <PasswordInput
          name="password"
          placeholder="Password"
          leftSection={<IconLock size={14} />}
          {...form.getInputProps('password')}
        />
      </div>
      <div className="">
        <Button type="submit" fullWidth loading={loginMutation.isLoading}>
          Masuk
        </Button>
        <div className="flex justify-end pt-2">
          <Link to="#" className="text-sm">
            Lupa Password?
          </Link>
        </div>
      </div>
    </form>
  );
};
