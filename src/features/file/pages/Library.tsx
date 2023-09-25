import { Anchor, Button, Drawer, FileButton, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconUpload, IconX, IconCheck } from '@tabler/icons-react';
import { useState } from 'react';

import { dayjs } from '@/lib/dayjs';
import { formatBytes } from '@/utils/format';

import { useDeleteFile, useInfiniteFiles, useUploadFile } from '../api';
import { MediaList } from '../components';
import { File, FileBlob, FileQuery } from '../types';

const initialParams: FileQuery = {
  page: 1,
  limit: 12,
};

export const Library: React.FC = () => {
  const [media, setMedia] = useState<File | null>(null);
  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteFiles({
    params: {
      ...initialParams,
    },
  });
  const uploadMutation = useUploadFile();
  const deleteMutation = useDeleteFile();

  const files = data?.pages.reduce((prev, { result }) => [...prev, ...result], [] as File[]) ?? [];

  async function handleChange(file: FileBlob) {
    await uploadMutation.mutateAsync({ data: { file } });
  }

  function handleDelete(id: number) {
    return () => {
      setMedia(null);
      modals.openConfirmModal({
        title: 'Hapus File',
        children: <Text size="sm">Apakah anda yakin untuk menghapus file ini?</Text>,
        centered: true,
        closeOnConfirm: true,
        onConfirm: async () => {
          await deleteMutation.mutateAsync(
            { id },
            {
              onSuccess: () => {
                notifications.show({
                  message: 'File berhasil dihapus',
                  color: 'green',
                  icon: <IconCheck />,
                });
              },
              onError: () => {
                notifications.show({
                  message: 'File tidak bisa dihapus karena masih digunakan',
                  color: 'red',
                  icon: <IconX />,
                });
              },
            }
          );
        },
      });
    };
  }

  return (
    <main>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Library</h1>

        <FileButton onChange={handleChange}>
          {(props) => (
            <Button {...props} leftIcon={<IconUpload size={16} />}>
              Upload
            </Button>
          )}
        </FileButton>
      </div>

      <section className="mb-8">
        <MediaList files={files} onChange={(file) => setMedia(file)} />

        <div className="flex items-center justify-center mt-4">
          {isFetching ? (
            <div className="text-center">loading...</div>
          ) : (
            hasNextPage && (
              <Button variant="subtle" size="xs" onClick={() => fetchNextPage()}>
                Lihat Semua
              </Button>
            )
          )}
        </div>
      </section>

      <Drawer
        opened={!!media}
        position="right"
        onClose={() => setMedia(null)}
        size="24rem"
        padding="lg"
      >
        {media && (
          <>
            <div className="bg-gray-300 rounded-md w-full aspect-video overflow-hidden mb-2 relative border border-gray-200">
              <img
                src={media.path}
                alt={media.originalname}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-center object-cover"
              />
            </div>
            <h2 className="font-bold mb-4">{media.originalname}</h2>

            <div className="divide-y divide-y-200 divide-gray-300 font-semibold mb-4">
              <h3 className="py-2 font-semibold">Information</h3>
              <div className="py-2 flex items-center justify-between">
                <div className="flex-shrink-0 text-gray-600">Ukuran</div>
                <div className="flex-shrink-0 line-clamp-1">{formatBytes(media.size)}</div>
              </div>
              <div className="py-2 flex items-center justify-between">
                <div className="flex-shrink-0 text-gray-600">Path</div>
                <div className="flex-shrink-0 line-clamp-1">
                  <Anchor href={media.path} target="_blank">
                    Buka
                  </Anchor>
                </div>
              </div>
              <div className="py-2 flex items-center justify-between">
                <div className="flex-shrink-0 text-gray-600">Ekstensi</div>
                <div className="flex-shrink-0">{media.extension}</div>
              </div>
              <div className="py-2 flex items-center justify-between">
                <div className="flex-shrink-0 text-gray-600">Terakhir diubah</div>
                <div className="flex-shrink-0">{dayjs(media.updatedAt).format('D MMMM YYYY')}</div>
              </div>
            </div>

            <Button onClick={handleDelete(media.id)} color="red" fullWidth>
              Hapus
            </Button>
          </>
        )}
      </Drawer>
    </main>
  );
};
