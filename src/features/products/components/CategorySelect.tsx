import { SelectProps, Select } from '@mantine/core';
import { useMemo, useState } from 'react';

import { useCategories } from '../api';

type Props = Omit<SelectProps, 'data'>;

export const CategorySelect: React.FC<Props> = ({ ...props }) => {
  const [search, setSearch] = useState('');
  const { data } = useCategories({ params: { limit: 500000 } });

  const categories = useMemo(() => {
    if (!data) return [];

    return data.data.map(({ id, name }) => ({
      label: name,
      value: id.toString(),
    }));
  }, [data]);

  return (
    <Select
      {...props}
      data={categories}
      searchable
      searchValue={search}
      onSearchChange={setSearch}
    />
  );
};
