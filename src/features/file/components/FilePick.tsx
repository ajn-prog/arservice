import { Button } from '@mantine/core';

import { useInfiniteFiles } from '../api';
import { File, FileQuery } from '../types';

import { MediaList } from './MediaList';

type Props = {
  onPick: (file: File) => void;
  onClose: () => void;
};

const defaultParams: FileQuery = {
  page: 1,
  limit: 6,
};

export const FilePick: React.FC<Props> = ({ onPick, onClose }) => {
  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteFiles({
    params: { ...defaultParams },
  });

  const files = data?.pages.reduce((prev, { result }) => [...prev, ...result], [] as File[]) ?? [];

  return (
    <>
      <div className="my-2">
        <MediaList size="sm" files={files} onChange={onPick} />

        <div className="flex items-center justify-center mt-2">
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
      </div>

      <div className="flex justify-end items-center space-x-2 mt-2">
        <Button variant="default" onClick={onClose}>
          Batal
        </Button>
        <Button onClick={onClose}>Pilih</Button>
      </div>
    </>
  );
};
