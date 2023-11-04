import { SelectProps, Select } from '@mantine/core';
import { useMemo, useState } from 'react';

import { useUnits } from '../api';

type Props = Omit<SelectProps, 'data'>;

export const UnitSelect: React.FC<Props> = ({ ...props }) => {
  const [search, setSearch] = useState('');
  const { data } = useUnits({ params: { limit: 0 } });

  const units = useMemo(() => {
    if (!data) return [];

    return data.data.map(({ id, name }) => ({
      label: name,
      value: id.toString(),
    }));
  }, [data]);

  return (
    <Select {...props} data={units} searchable searchValue={search} onSearchChange={setSearch} />
  );
};
