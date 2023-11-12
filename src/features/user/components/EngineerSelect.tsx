import { MultiSelect, MultiSelectProps } from '@mantine/core';
import { useMemo } from 'react';

import { useEngineers } from '../api';

type Props = Omit<MultiSelectProps, 'data'>;

export const EngineerSelect: React.FC<Props> = ({ ...props }) => {
  const { data } = useEngineers({ params: { limit: 0 } });

  const engineers = useMemo(() => {
    if (!data) return [];

    return data.data.map(({ id, name }) => ({
      label: name,
      value: id.toString(),
    }));
  }, [data]);

  return <MultiSelect {...props} data={engineers} searchable />;
};
