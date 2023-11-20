import { SelectProps, Select } from '@mantine/core';
import { useMemo } from 'react';

import { useInstallations } from '../api';

type Props = Omit<SelectProps, 'data'>;

export const InstallationSelect: React.FC<Props> = ({ ...props }) => {
  const { data } = useInstallations({ params: { limit: 500000 } });

  const installations = useMemo(() => {
    if (!data) return [];

    return data.data.map(({ id, title, project_number }) => ({
      label: `${title} (${project_number})`,
      value: id.toString(),
    }));
  }, [data]);

  return <Select {...props} data={installations} searchable />;
};
