import { SelectProps, Select } from '@mantine/core';
import { useMemo } from 'react';

import { ItemQuery, useItems } from '../api';

type Props = Omit<SelectProps, 'data'> & ItemQuery;

export const ItemSelect: React.FC<Props> = ({ brand, product, customer, ...props }) => {
  const { data } = useItems({ params: { brand, product, customer } });

  const installations = useMemo(() => {
    if (!data) return [];

    return data.data.map(({ id, product, serial_number }) => ({
      label: `${product.name} (${serial_number})`,
      value: id.toString(),
    }));
  }, [data]);

  return <Select {...props} data={installations} searchable />;
};
