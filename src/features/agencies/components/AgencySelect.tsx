import { SelectProps, Select } from '@mantine/core';
import { useMemo } from 'react';

import { useAgencies } from '../api';

type Props = Omit<SelectProps, 'data'>;

export const AgencySelect: React.FC<Props> = ({ ...props }) => {
  const { data, isLoading } = useAgencies({ params: { limit: 500000 } });

  const agencies = useMemo(() => {
    if (!data) return [];

    return data.data.map(({ id, name }) => ({
      label: name,
      value: id.toString(),
    }));
  }, [data]);

  return <Select {...props} data={agencies} searchable disabled={isLoading} />;
};
