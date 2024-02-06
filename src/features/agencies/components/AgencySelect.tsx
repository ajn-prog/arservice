import { SelectProps, Select } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { useMemo, useState } from 'react';

import { useAgencies } from '../api';

type Props = Omit<SelectProps, 'data'>;

export const AgencySelect: React.FC<Props> = ({ ...props }) => {
  const [search, setSearch] = useState('');
  const [params] = useDebouncedValue({ limit: 5, search }, 300);
  const { data, isLoading } = useAgencies({ params });

  const agencies = useMemo(() => {
    if (!data) return [];

    return data.data.map(({ id, name }) => ({
      label: name,
      value: id.toString(),
    }));
  }, [data]);

  return (
    <Select
      {...props}
      data={agencies}
      searchable
      disabled={isLoading}
      clearable
      nothingFoundMessage="Data tidak ditemukan"
      searchValue={search}
      onSearchChange={(v) => setSearch(v)}
      filter={({ options }) => options}
    />
  );
};
