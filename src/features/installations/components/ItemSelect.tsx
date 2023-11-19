import { SelectProps, Select } from '@mantine/core';
import { useMemo } from 'react';

import { useItems } from '../api';

type Props = Omit<SelectProps, 'data'>;

export const ItemSelect: React.FC<Props> = ({ ...props }) => {
  const { data } = useItems();

  const installations = useMemo(() => {
    if (!data) return [];

    return data.data.map(({ id, product, serial_number }) => ({
      label: `${product.name} (${serial_number})`,
      value: id.toString(),
    }));
  }, [data]);

  return <Select {...props} data={installations} searchable />;
};
