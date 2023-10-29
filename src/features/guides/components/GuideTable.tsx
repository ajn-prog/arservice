import { ActionIcon } from '@mantine/core';
import { IconDotsCircleHorizontal, IconEdit, IconTrash } from '@tabler/icons-react';
import { useMemo, useState } from 'react';

import { Table } from '@/components/elements';
import { Brand, Category, Product } from '@/features/products';
import { dayjs } from '@/lib/dayjs';
import { Metadata } from '@/types/api';

const brands: Brand[] = [
  {
    id: 1,
    name: 'Brand A',
  },
  {
    id: 2,
    name: 'Brand B',
  },
];

const categories: Category[] = [
  {
    id: 1,
    name: 'Brand A',
  },
  {
    id: 2,
    name: 'Brand B',
  },
];

const products: Product[] = Array(15)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: `Produk ${i + 1}`,
    brand: brands[(i + 1) % 2],
    category: categories[i % 2],
    code: `TX${i + 1}`,
    unit: {
      id: 1,
      name: 'Buah',
    },
    date_entry: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

type Props = {
  toolbar?: React.ReactNode;
};

export const ProductTable: React.FC<Props> = ({ toolbar }) => {
  const [metadata, setMetadata] = useState<Metadata>({
    limit: 5,
    page: 1,
    total: products.length,
    count: 5 <= (products?.length ?? 0) ? 5 : products?.length ?? 0 % 5,
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

    return (products ?? []).slice(start, end);
  }, [metadata]);

  return (
    <Table
      title="Tabel Data Produk"
      toolbar={toolbar}
      header={['Produk', 'Unit', 'Kategori', 'Brand', 'Modified At', '']}
      items={data}
      onPageChange={handlePage}
      metadata={metadata}
      renderItem={(product) => (
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>{product.unit.name}</td>
          <td>{product.category.name}</td>
          <td>{product.brand.name}</td>
          <td>{dayjs(product.updatedAt).format('D MMMM YYYY H:mm')}</td>
          <td>
            <div className="flex items-center space-x-2">
              <ActionIcon title="Detail Produk" color="gray" radius="lg">
                <IconDotsCircleHorizontal size={18} />
              </ActionIcon>
              <ActionIcon title="Update Produk" color="primary" radius="lg">
                <IconEdit size={18} />
              </ActionIcon>
              <ActionIcon title="Hapus Produk" color="red" radius="lg">
                <IconTrash size={18} />
              </ActionIcon>
            </div>
          </td>
        </tr>
      )}
    />
  );
};
