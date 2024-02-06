import { Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

import { FileDropzone } from '@/features/file';

import { useConfirmService } from '../api';
import { Service, ServiceConfirmDTO } from '../types';

type Props = {
  service: Service;
  onSuccess?: () => void;
  onCancel?: () => void;
};

export const ConfirmForm: React.FC<Props> = ({ service, onCancel, onSuccess }) => {
  const confirmMutation = useConfirmService();
  const form = useForm<ServiceConfirmDTO>({
    initialValues: {
      filename: [],
    },
  });

  const handleSubmit = form.onSubmit(async (data) => {
    await confirmMutation.mutateAsync(
      { id: service.id, data },
      {
        onSuccess: () => {
          notifications.show({
            color: 'green',
            message: 'Service berhasil dikonfirmasi',
          });
          if (onSuccess) onSuccess();
        },
        onError: ({ response }) => {
          form.setErrors((response?.data as any).errors);
          notifications.show({
            color: 'red',
            message: 'Service gagal dikonfirmasi',
          });
        },
      }
    );
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <FileDropzone
            value={form.values['filename']}
            onDrop={(files) => form.setFieldValue('filename', files)}
            label="File Service Report"
            maxFiles={1}
            maxSize={5 * 1024 ** 2}
          />
        </div>
      </div>

      <div className="flex items-center space-x-2 mt-6">
        <Button type="submit" loading={confirmMutation.isLoading}>
          Simpan
        </Button>
        <Button
          variant="light"
          color="gray.6"
          bg="gray.2"
          onClick={onCancel}
          loading={confirmMutation.isLoading}
        >
          Batal
        </Button>
      </div>
    </form>
  );
};
