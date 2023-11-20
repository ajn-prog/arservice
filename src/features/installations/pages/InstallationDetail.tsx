import { Button, Card, Table } from '@mantine/core';
import { IconArrowLeft, IconPaperclip } from '@tabler/icons-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { LoadingScreen } from '@/components/elements';
import { dayjs } from '@/lib/dayjs';

import { useInstallation } from '../api';

export const InstallationDetail: React.FC = () => {
  const { id } = useParams<'id'>();
  const { data, isLoading, isError } = useInstallation({ id: id as string });
  const navigate = useNavigate();

  if (isLoading)
    return (
      <div className="mt-48">
        <LoadingScreen />
      </div>
    );

  if (isError)
    return (
      <div className="mt-48 text-center">
        <h1 className="text-lg font-bold mb-2">Install base tidak ditemukan</h1>
        <Button onClick={() => navigate(-1)} leftSection={<IconArrowLeft size={14} />}>
          Kembali
        </Button>
      </div>
    );

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Detail Install Base</h1>
      </div>

      <Card shadow="lg">
        <Card.Section p="lg" withBorder>
          <h2 className="font-semibold text-base">
            Instalasi Alat Rumah Sakit ({data.project_number})
          </h2>
        </Card.Section>
        <Card.Section p="lg" withBorder>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="">
              <div className="text-xs text-gray-600">Project Number</div>
              <div className="font-bold text-sm text-gray-900">{data.project_number}</div>
            </div>
            <div className="">
              <div className="text-xs text-gray-600">Nama Kegiatan</div>
              <div className="font-bold text-sm text-gray-900">{data.title}</div>
            </div>
            <div className="">
              <div className="text-xs text-gray-600">Instansi</div>
              <div className="font-bold text-sm text-gray-900">{data.customer.name}</div>
            </div>
            <div className="">
              <div className="text-xs text-gray-600">Tanggal Install</div>
              <div className="font-bold text-sm text-gray-900">{data.installation_date}</div>
            </div>
            <div className="">
              <div className="text-xs text-gray-600">Teknisi</div>
              <div className="font-bold text-sm text-gray-900">
                {data.technical_contract.engineers.map(({ name }) => name).join(', ')}
              </div>
            </div>
            <div className="">
              <div className="text-xs text-gray-600">File</div>
              <div className="font-bold text-sm text-gray-900">
                {data.file ? (
                  <Link
                    to={data.file}
                    target="_blank"
                    className="flex items-center text-sm text-primary-600 line-clamp-1"
                  >
                    <IconPaperclip size={16} className="flex-shrink-0" />
                    <span className="ml-2">View/Download</span>
                  </Link>
                ) : (
                  '-'
                )}
              </div>
            </div>
          </div>

          <Table withColumnBorders withRowBorders withTableBorder>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>#</Table.Th>
                <Table.Th>Serial Number</Table.Th>
                <Table.Th>Nama Alat</Table.Th>
                <Table.Th>Merek</Table.Th>
                <Table.Th>Masa Garansi</Table.Th>
                <Table.Th>Waktu Preventive</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {data.items.map((item, i) => (
                <Table.Tr key={item.id}>
                  <Table.Td>{i + 1}</Table.Td>
                  <Table.Td>{item.serial_number}</Table.Td>
                  <Table.Td>{item.product.name}</Table.Td>
                  <Table.Td>{item.product.brand?.name ?? '[Tanpa Merk]'}</Table.Td>
                  <Table.Td>{item.warranty_month} Bulan</Table.Td>
                  <Table.Td>
                    {dayjs(data.installation_date)
                      .add(item.warranty_month as number, 'M')
                      .format('dddd, D MMMM YYYY')}
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Card.Section>
        <Card.Section p="lg" withBorder>
          <Button component={Link} to="/installation" variant="light" color="gray.6" bg="gray.2">
            Kembali
          </Button>
        </Card.Section>
      </Card>
    </main>
  );
};
