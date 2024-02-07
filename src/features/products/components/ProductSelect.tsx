import { SelectProps, Select } from '@mantine/core';
import { useMemo } from 'react';

import { useProducts } from '../api';
import { Product, ProductQuery } from '../types';

type Props = {
  onSelectChange?: (product: Product | null) => void;
} & Omit<SelectProps, 'data'> &
  ProductQuery;

export const ProductSelect: React.FC<Props> = ({
  onSelectChange,
  brand,
  category,
  type,
  ...props
}) => {
  const { data } = useProducts({ params: { limit: 500000, brand, category, type } });

  const products = useMemo(() => {
    if (!data) return [];

    return data.data.map(({ id, name }) => ({
      label: name,
      value: id.toString(),
    }));
  }, [data]);

  return (
    <Select
      {...props}
      data={products}
      onChange={(v) => {
        if (onSelectChange) {
          onSelectChange(data?.data.filter(({ id }) => id.toString() == v).at(0) || null);
        }

        if (props.onChange) props.onChange(v);
      }}
      searchable
    />
  );
};
