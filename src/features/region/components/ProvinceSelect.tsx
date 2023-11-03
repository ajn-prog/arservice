import { SelectProps, Select } from '@mantine/core';
import { useMemo } from 'react';

import { useProvinces } from '../api';

type Props = Omit<SelectProps, 'data'>;

export const ProvinceSelect: React.FC<Props> = ({ ...props }) => {
  const { data } = useProvinces();

  const provinces = useMemo(() => {
    if (!data) return [];

    return data.map(({ id, name }) => ({
      label: name,
      value: id.toString(),
    }));
  }, [data]);

  return <Select {...props} data={provinces} searchable />;
};
