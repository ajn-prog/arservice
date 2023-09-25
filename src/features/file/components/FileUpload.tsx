import { Button, Group, Text } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { closeAllModals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';
import { useState } from 'react';

import { useUploadFile } from '../api';
import { File, FileBlob } from '../types';

type Props = {
  onUpload: (file: File) => void;
  onClose: () => void;
};

export const FileUpload: React.FC<Props> = ({ onUpload, onClose }) => {
  const [file, setFile] = useState<FileBlob | null>(null);
  const uploadMutation = useUploadFile({
    config: {
      onSuccess: () => {
        closeAllModals();
      },
    },
  });

  async function handleUpload() {
    if (!file) return notifications.show({ message: 'File tidak boleh kosong' });

    const { result } = await uploadMutation.mutateAsync({ data: { file } });
    onUpload(result);
  }

  return (
    <>
      <div className="my-2">
        <Dropzone
          onDrop={(files) => setFile(files[0])}
          onReject={() => notifications.show({ message: 'File tidak sesuai', color: 'red' })}
          maxSize={5 * 1024 ** 2}
          maxFiles={1}
          accept={['image/*']}
        >
          <Group
            position="center"
            spacing="xl"
            className="pointer-events-none text-center min-h-[12rem]"
          >
            <Dropzone.Accept>
              <IconUpload size={50} stroke={1.5} className="text-primary-600" />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size={50} stroke={1.5} className="text-red-600" />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto size={50} stroke={1.5} />
            </Dropzone.Idle>

            {file ? (
              <div>
                <Text>{file.name}</Text>
              </div>
            ) : (
              <div>
                <Text size="xl" inline>
                  Drag thumbnail disini atau klik untuk memilih file
                </Text>
                <Text size="sm" color="dimmed" inline mt={7}>
                  Ukuran file tidak boleh melebihi 5mb
                </Text>
              </div>
            )}
          </Group>
        </Dropzone>
      </div>

      <div className="flex justify-end items-center space-x-2 mt-4">
        <Button variant="default" onClick={() => onClose()} loading={uploadMutation.isLoading}>
          Batal
        </Button>
        <Button onClick={handleUpload} loading={uploadMutation.isLoading}>
          Upload
        </Button>
      </div>
    </>
  );
};
