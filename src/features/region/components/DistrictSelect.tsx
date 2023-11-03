import { SelectProps, Select } from '@mantine/core';
import { useEffect, useMemo, useState } from 'react';

import { useDistricts } from '../api';

type Props = {
  regencyId: number | string | null;
} & Omit<SelectProps, 'data'>;

export const DistrictSelect: React.FC<Props> = ({ regencyId, ...props }) => {
  const [search, setSearch] = useState('');
  const { data } = useDistricts({
    regencyId: regencyId || 0,
    config: {
      enabled: !!regencyId,
    },
  });

  const districts = useMemo(() => {
    if (!data || !regencyId) return [];

    return data.map(({ id, name }) => ({
      label: name,
      value: id.toString(),
    }));
  }, [data, regencyId]);

  useEffect(() => {
    setSearch('');
  }, [regencyId]);

  return (
    <Select
      {...props}
      data={districts}
      searchable
      searchValue={search}
      onSearchChange={setSearch}
    />
  );
};
