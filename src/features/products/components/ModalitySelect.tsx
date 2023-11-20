import { SelectProps, Select } from '@mantine/core';
import { useMemo, useState } from 'react';

import { useModalities } from '../api';

type Props = Omit<SelectProps, 'data'>;

export const ModalitySelect: React.FC<Props> = ({ ...props }) => {
  const [search, setSearch] = useState('');
  const { data } = useModalities({ params: { limit: 500000 } });

  const modalities = useMemo(() => {
    if (!data) return [];

    return data.data.map(({ id, name }) => ({
      label: name,
      value: id.toString(),
    }));
  }, [data]);

  return (
    <Select
      {...props}
      data={modalities}
      searchable
      searchValue={search}
      onSearchChange={setSearch}
    />
  );
};
