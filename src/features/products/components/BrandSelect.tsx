import { SelectProps, Select } from '@mantine/core';
import { useMemo, useState } from 'react';

import { useBrands } from '../api';
import { Brand } from '../types';

type Props = {
  onSelectChange?: (brand: Brand | null) => void;
} & Omit<SelectProps, 'data'>;

export const BrandSelect: React.FC<Props> = ({ onSelectChange, ...props }) => {
  const [search, setSearch] = useState('');
  const { data } = useBrands({ params: { limit: 500000 } });

  const brands = useMemo(() => {
    if (!data) return [];

    return data.data.map(({ id, name }) => ({
      label: name,
      value: id.toString(),
    }));
  }, [data]);

  return (
    <Select
      {...props}
      data={brands}
      searchable
      searchValue={search}
      onSearchChange={setSearch}
      onChange={(v) => {
        if (onSelectChange) {
          onSelectChange(data?.data.filter(({ id }) => id.toString() == v).at(0) || null);
        }

        if (props.onChange) props.onChange(v);
      }}
    />
  );
};
