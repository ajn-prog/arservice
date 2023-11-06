import { SelectProps, Select } from '@mantine/core';
import { useMemo } from 'react';

import { useProducts } from '../api';

type Props = Omit<SelectProps, 'data'>;

export const ProductSelect: React.FC<Props> = ({ ...props }) => {
  const { data } = useProducts({ params: { limit: 0 } });

  const products = useMemo(() => {
    if (!data) return [];

    return data.data.map(({ id, name }) => ({
      label: name,
      value: id.toString(),
    }));
  }, [data]);

  return <Select {...props} data={products} searchable />;
};
