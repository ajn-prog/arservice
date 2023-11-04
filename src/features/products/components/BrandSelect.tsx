import { SelectProps, Select } from '@mantine/core';
import { useMemo, useState } from 'react';

import { useBrands } from '../api';

type Props = Omit<SelectProps, 'data'>;

export const BrandSelect: React.FC<Props> = ({ ...props }) => {
  const [search, setSearch] = useState('');
  const { data } = useBrands({ params: { limit: 0 } });

  const brands = useMemo(() => {
    if (!data) return [];

    return data.data.map(({ id, name }) => ({
      label: name,
      value: id.toString(),
    }));
  }, [data]);

  return (
    <Select {...props} data={brands} searchable searchValue={search} onSearchChange={setSearch} />
  );
};
