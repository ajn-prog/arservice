import { SelectProps, Select } from '@mantine/core';
import { useMemo, useState } from 'react';

import { useAgencies } from '../api';

type Props = Omit<SelectProps, 'data'>;

export const AgencySelect: React.FC<Props> = ({ ...props }) => {
  const [search, setSearch] = useState('');
  const { data } = useAgencies({ params: { limit: 0 } });

  const agencies = useMemo(() => {
    if (!data) return [];

    return data.data.map(({ id, name }) => ({
      label: name,
      value: id.toString(),
    }));
  }, [data]);

  return (
    <Select {...props} data={agencies} searchable searchValue={search} onSearchChange={setSearch} />
  );
};
