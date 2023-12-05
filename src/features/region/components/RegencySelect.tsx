import { SelectProps, Select } from '@mantine/core';
import { useEffect, useMemo, useState } from 'react';

import { useRegencies } from '../api';

type Props = {
  provinceId: number | string | null;
} & Omit<SelectProps, 'data'>;

export const RegencySelect: React.FC<Props> = ({ provinceId, ...props }) => {
  const [search, setSearch] = useState('');
  const { data } = useRegencies({
    provinceId: provinceId || 0,
    config: {
      enabled: !!provinceId,
      cacheTime: 0,
    },
  });

  const regencies = useMemo(() => {
    if (!data || !provinceId) return [];

    return data.map(({ id, name }) => ({
      label: name,
      value: id.toString(),
    }));
  }, [data, provinceId]);

  useEffect(() => {
    setSearch('');
  }, [provinceId]);

  return (
    <Select
      {...props}
      data={regencies}
      searchable
      searchValue={search}
      onSearchChange={setSearch}
    />
  );
};
