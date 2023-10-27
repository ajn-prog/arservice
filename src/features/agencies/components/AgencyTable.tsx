import { ActionIcon } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { useMemo, useState } from 'react';

import { Table } from '@/components/elements';
import { dayjs } from '@/lib/dayjs';
import { Metadata } from '@/types/api';

import { Agency } from '../types';

const agencies: Agency[] = Array(12)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: `Instansi ${i + 1}`,
    address: 'Ini Alamat',
    area: 'Ini Area',
    code: 'Ini Kode',
    group: 'Ini Kelas',
  }));

type Props = {
  toolbar?: React.ReactNode;
};

export const AgencyTable: React.FC<Props> = ({ toolbar }) => {
  const [metadata, setMetadata] = useState<Metadata>({
    limit: 5,
    page: 1,
    total: agencies.length,
    count: 5 <= (agencies?.length ?? 0) ? 5 : agencies?.length ?? 0 % 5,
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

    return (agencies ?? []).slice(start, end);
  }, [metadata]);

  return (
    <Table
      title="Tabel Data Agency"
      toolbar={toolbar}
      header={['Instansi', 'Kelas', 'Alamat', 'Provinsi/Area', 'Created At', '']}
      items={data}
      onPageChange={handlePage}
      metadata={metadata}
      renderItem={(agency) => (
        <tr key={agency.id}>
          <td>{agency.name}</td>
          <td>{agency.group}</td>
          <td>{agency.address}</td>
          <td>{agency.area}</td>
          <td>{dayjs(agency.createdAt).format('D MMMM YYYY H:mm')}</td>
          <td>
            <div className="flex items-center space-x-2">
              <ActionIcon title="Update Instansi" color="primary" radius="lg">
                <IconEdit size={18} />
              </ActionIcon>
              <ActionIcon title="Hapus Instansi" color="red" radius="lg">
                <IconTrash size={18} />
              </ActionIcon>
            </div>
          </td>
        </tr>
      )}
    />
  );
};
