import { ActionIcon } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { useMemo, useState } from 'react';

import { Table } from '@/components/elements';
import { dayjs } from '@/lib/dayjs';
import { Metadata } from '@/types/api';

import { Brand } from '../types';

const brands: Brand[] = Array(12)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: `Brand ${i + 1}`,
  }));

type Props = {
  toolbar?: React.ReactNode;
};

export const BrandTable: React.FC<Props> = ({ toolbar }) => {
  const [metadata, setMetadata] = useState<Metadata>({
    limit: 5,
    page: 1,
    total: brands.length,
    count: 5 <= (brands?.length ?? 0) ? 5 : brands?.length ?? 0 % 5,
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

    return (brands ?? []).slice(start, end);
  }, [metadata]);

  return (
    <Table
      title="Tabel Data Brand"
      toolbar={toolbar}
      header={['Nama', 'Modified At', '']}
      items={data}
      onPageChange={handlePage}
      metadata={metadata}
      renderItem={(brand) => (
        <tr key={brand.id}>
          <td>{brand.name}</td>
          <td>{dayjs(brand.updatedAt).format('D MMMM YYYY H:mm')}</td>
          <td>
            <div className="flex items-center space-x-2">
              <ActionIcon
                title="Hapus Brand"
                className="hover:bg-gray-100 active:bg-gray-200 text-red-500 rounded-full p-1"
              >
                <IconTrash size={18} />
              </ActionIcon>
              <ActionIcon
                title="Update Brand"
                className="hover:bg-gray-100 active:bg-gray-200 text-gray-700 rounded-full p-1"
              >
                <IconEdit size={18} />
              </ActionIcon>
            </div>
          </td>
        </tr>
      )}
    />
  );
};
