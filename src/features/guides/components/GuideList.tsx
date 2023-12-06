import { Button, Pagination } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconEdit, IconPlus, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Authorization } from '@/features/auth';

import { useDeleteGuide, useGuides } from '../api';
import { Guide, GuideQuery } from '../types';

type Props = GuideQuery;

export const GuideList: React.FC<Props> = (props) => {
  const [params, setParams] = useState<GuideQuery>({
    page: 1,
    limit: 8,
    search: '',
    sort: 'desc',
    sort_by: 'created_at',
  });
  const { data, isLoading, isError } = useGuides({ params: { ...params, ...props } });
  const deleteMutation = useDeleteGuide();

  function getExcerpt(html: string, maxWords: number) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const textContent = doc.body.textContent || '';
    const words = textContent.split(/\s+/);
    return words.slice(0, maxWords).join(' ');
  }

  function handleDelete(guide: Guide) {
    return () => {
      modals.openConfirmModal({
        modalId: 'guide-delete',
        title: 'Hapus Panduan',
        children: <div className="text-sm">Apakah Anda yakin untuk menghapus panduan ini?</div>,
        closeOnConfirm: false,
        centered: true,
        onConfirm: async () => {
          await deleteMutation.mutateAsync(
            {
              id: guide.id,
            },
            {
              onSuccess: () => {
                notifications.show({
                  color: 'green',
                  message: 'Panduan berhasil dihapus',
                });
                modals.close('guide-delete');
              },
              onError: () => {
                notifications.show({
                  color: 'red',
                  message: 'Panduan gagal dihapus',
                });
                modals.close('guide-delete');
              },
            }
          );
        },
      });
    };
  }

  if (isLoading || isError)
    return (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={`skp_${i}`} className="w-full bg-white rounded-lg overflow-hidden">
              <div className="w-full aspect-video bg-gray-200 animate-pulse"></div>
              <div className="p-4">
                <div className="h-5 w-20 bg-gray-200 animate-pulse rounded-lg mt-1 mb-2"></div>
                <div className="bg-gray-200 animate-pulse h-5 w-full rounded-md mb-2"></div>
                <div className="bg-gray-200 animate-pulse h-5 w-1/2 rounded-md mb-2"></div>

                <div className="h-4 w-12 bg-gray-200 rounded-md animate-pulse"></div>

                <div className="space-y-2 mt-2">
                  <div className="bg-gray-200 w-full h-7 rounded-md"></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.data.map((guide) => (
          <div key={guide.id} className="w-full bg-white rounded-lg overflow-hidden">
            <Link to={`/guide/${guide.id}`}>
              <div className="w-full aspect-video bg-gray-200 relative">
                {guide.image && (
                  <img
                    src={guide.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                )}
              </div>
            </Link>
            <div className="p-4">
              <Link to={`/guide/${guide.id}`}>
                <h2 className="line-clamp-2 text-base font-bold mb-1 hover:underline">
                  {guide.title}
                </h2>
                <p className="text-sm line-clamp-2 text-gray-600">
                  {getExcerpt(guide.description, 15)}
                </p>
              </Link>

              <Authorization role={['-Customer']}>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <Button
                    component={Link}
                    to={`/guide/${guide.id}/update`}
                    variant="light"
                    leftSection={<IconEdit size={16} />}
                    fullWidth
                    size="xs"
                  >
                    Edit
                  </Button>
                  <Button
                    color="red"
                    variant="light"
                    leftSection={<IconTrash size={16} />}
                    fullWidth
                    size="xs"
                    onClick={handleDelete(guide)}
                  >
                    Hapus
                  </Button>
                </div>
              </Authorization>
            </div>
          </div>
        ))}
      </div>

      {data.data.length == 0 && (
        <div className="col-span-12 flex flex-col items-center justify-center py-24 mx-auto max-w-md">
          <p className="text-lg font-bold mb-4 text-center">
            Belum ada panduan untuk produk ini
            <Authorization role={['-Customer']}>
              , tekan tombol dibawah untuk menambahkan
            </Authorization>
          </p>
          <Authorization role={['-Customer']}>
            <Button component={Link} to="/guide/create" leftSection={<IconPlus size={16} />}>
              Tambah Panduan
            </Button>
          </Authorization>
        </div>
      )}

      <div className="my-6">
        <Pagination
          total={data.last_page}
          value={data.current_page}
          onChange={(page) => setParams({ ...params, page })}
          withEdges
        />
      </div>
    </>
  );
};
