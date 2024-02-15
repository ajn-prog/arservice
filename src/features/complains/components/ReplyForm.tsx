import { Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

import { TextEditor } from '@/components/forms';
import { FileDropzone } from '@/features/file';

import { useReplyComplain } from '../api';
import { ReplyDTO } from '../types';

type Props = {
  complain: number;
  onCancel?: () => void;
  onSuccess?: () => void;
};

export const ReplyForm: React.FC<Props> = ({ complain, onCancel, onSuccess }) => {
  const replyMutation = useReplyComplain();
  const form = useForm<ReplyDTO>({
    initialValues: {
      complain_id: complain,
      detail: '',
      filename: [],
    },
  });

  const handleSubmit = form.onSubmit(async (data) => {
    await replyMutation.mutateAsync(
      { data },
      {
        onSuccess: () => {
          notifications.show({
            color: 'green',
            message: 'Balasan berhasil dibuat',
          });
          if (onSuccess) onSuccess();
        },
        onError: ({ response }) => {
          form.setErrors((response?.data as any).errors);
          notifications.show({
            color: 'red',
            message: 'Balasan gagal dibuat',
          });
        },
      }
    );
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-12 gap-x-6 gap-y-4">
        <div className="col-span-12">
          <TextEditor
            label="Pesan"
            value={form.values['detail']}
            onChange={(v) => form.setFieldValue('detail', v)}
          />
          {form.errors['detail'] && (
            <p className="text-sm text-red-600 mt-1">{form.errors['detail']}</p>
          )}
        </div>
        <div className="col-span-12">
          <FileDropzone
            value={form.values['filename']}
            onDrop={(files) => form.setFieldValue('filename', files)}
            label="Foto/Video Pendukung"
            maxFiles={5}
            maxSize={5 * 1024 ** 2}
          />
          {form.errors['filename'] && (
            <p className="text-sm text-red-600 mt-1">{form.errors['filename']}</p>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <Button type="submit" loading={replyMutation.isLoading}>
          Simpan
        </Button>
        <Button
          variant="light"
          color="gray.6"
          bg="gray.2"
          onClick={onCancel}
          loading={replyMutation.isLoading}
        >
          Batal
        </Button>
      </div>
    </form>
  );
};
