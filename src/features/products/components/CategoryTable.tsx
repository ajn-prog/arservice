import { ActionIcon } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { useMemo, useState } from 'react';

import { Table } from '@/components/elements';
import { dayjs } from '@/lib/dayjs';
import { Metadata } from '@/types/api';

import { Category } from '../types';

const categories: Category[] = Array(12)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: `Kategori ${i + 1}`,
  }));

type Props = {
  toolbar?: React.ReactNode;
};

export const CategoryTable: React.FC<Props> = ({ toolbar }) => {
  const [metadata, setMetadata] = useState<Metadata>({
    limit: 5,
    page: 1,
    total: categories.length,
    count: 5 <= (categories?.length ?? 0) ? 5 : categories?.length ?? 0 % 5,
  });

  function handlePage(page: number) {
    const count =
      page * metadata.limit <= metadata.total ? metadata.limit : metadata.total % metadata.limit;

    setMetadata({
      ...metadata,
      count,
      page,
    });
  }

  const data = useMemo(() => {
    const start = metadata.limit * (metadata.page - 1);
    const end = start + metadata.count;

    return (categories ?? []).slice(start, end);
  }, [metadata]);

  return (
    <Table
      title="Tabel Data Kategori"
      toolbar={toolbar}
      header={['Nama', 'Modified At', '']}
      items={data}
      onPageChange={handlePage}
      metadata={metadata}
      renderItem={(category) => (
        <tr key={category.id}>
          <td>{category.name}</td>
          <td>{dayjs(category.updatedAt).format('D MMMM YYYY H:mm')}</td>
          <td>
            <div className="flex items-center space-x-2">
              <ActionIcon title="Update Kategori" color="primary" radius="lg">
                <IconEdit size={18} />
              </ActionIcon>
              <ActionIcon title="Hapus Kategori" color="red" radius="lg">
                <IconTrash size={18} />
              </ActionIcon>
            </div>
          </td>
        </tr>
      )}
    />
  );
};
