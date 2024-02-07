import { Button } from '@mantine/core';

import { ServiceType } from '../types';

type Props = {
  value?: ServiceType;
  onChange: (v: ServiceType) => void;
};

export const ServiceSelectType: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2.5 overflow-x-auto">
      <Button
        size="xs"
        variant={value == 'Preventive Maintenance' ? 'filled' : 'light'}
        radius="lg"
        onClick={() => onChange('Preventive Maintenance')}
      >
        Preventive Maintenance
      </Button>
      <Button
        size="xs"
        variant={value == 'Customer Visit' ? 'filled' : 'light'}
        radius="lg"
        onClick={() => onChange('Customer Visit')}
      >
        Customer Visit
      </Button>
      <Button
        size="xs"
        variant={value == 'Corective Maintenance' ? 'filled' : 'light'}
        radius="lg"
        onClick={() => onChange('Corective Maintenance')}
      >
        Corective Maintenance
      </Button>
    </div>
  );
};
