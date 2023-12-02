import { ActionIcon, Button, LoadingOverlay, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconPlus, IconX } from '@tabler/icons-react';
import { useEffect } from 'react';

import { StakeholderDTO } from '..';
import { useStakeholders, useUpdateStakeholder } from '../api';

export const SupporterForm: React.FC = () => {
  const { data, isLoading, isError } = useStakeholders({ position: 'pengguna_alat' });
  const updateMutation = useUpdateStakeholder();
  const form = useForm<StakeholderDTO>({
    initialValues: {
      position: 'pengguna_alat',
      values: [
        {
          name: '',
          phone: '',
          tool_type: '',
        },
      ],
    },
  });

  useEffect(() => {
    if (!data) return;

    form.setValues({
      position: 'pengguna_alat',
      values: data.map((v) => ({
        name: v.name,
        phone: v.phone,
        tool_type: v.tool_type || '',
      })),
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleSubmit = form.onSubmit(async (data) => {
    await updateMutation.mutateAsync(
      { data },
      {
        onSuccess: () => {
          notifications.show({ message: 'Profil berhasil diubah', color: 'green' });
        },
        onError: () => {
          notifications.show({ message: 'Profil gagal diubah', color: 'red' });
        },
      }
    );
  });

  function handleAdd() {
    form.setFieldValue('values', [
      ...form.values['values'],
      { name: '', phone: '', tool_type: '' },
    ]);
  }

  function handleRemove(index: number) {
    return () => {
      form.setFieldValue(
        'values',
        form.values['values'].filter((_, i) => index != i)
      );
    };
  }

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <LoadingOverlay visible={isLoading || isError} />
      <div className="divide-y divide-gray-300">
        {form.values['values'].map((_, i) => (
          <div
            className="flex items-end space-x-2 pt-2 pb-4 first:pt-0 last:pb-0"
            key={`management_${i}`}
          >
            <div className="grid grid-cols-12 gap-x-6 gap-y-4 flex-grow">
              <TextInput
                {...form.getInputProps(`values.${i}.name`)}
                required
                withAsterisk={false}
                label="Nama Pengguna Alat"
                placeholder="Ex : Sarimin"
                className="col-span-12 md:col-span-4"
              />
              <TextInput
                {...form.getInputProps(`values.${i}.tool_type`)}
                required
                withAsterisk={false}
                label="Tipe Alat"
                placeholder="Alat yang bisa dipegang"
                className="col-span-12 md:col-span-4"
              />
              <TextInput
                {...form.getInputProps(`values.${i}.phone`)}
                required
                withAsterisk={false}
                label="Nomor HP"
                placeholder="Ex : 085752140606..."
                className="col-span-12 md:col-span-4"
              />
            </div>

            <ActionIcon color="red" variant="subtle" className="mb-1" onClick={handleRemove(i)}>
              <IconX />
            </ActionIcon>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-2">
        <Button size="xs" leftSection={<IconPlus size={16} />} variant="subtle" onClick={handleAdd}>
          Tambah Pengguna Alat
        </Button>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button type="submit" loading={updateMutation.isLoading}>
          Simpan
        </Button>
      </div>
    </form>
  );
};
