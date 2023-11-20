import { Badge, BadgeProps } from '@mantine/core';

import { ComplainStatus } from '../types';

type Props = {
  status: ComplainStatus;
} & BadgeProps;

export const ComplainBadge: React.FC<Props> = ({ status, ...props }) => {
  switch (status) {
    case 'progress':
      return (
        <Badge variant="light" color="gray" {...props}>
          Diproses
        </Badge>
      );
    case 'close':
      return (
        <Badge variant="light" color="green" {...props}>
          Selesai
        </Badge>
      );
    case 'waiting':
      return (
        <Badge variant="light" color="red" {...props}>
          Menunggu
        </Badge>
      );
    default:
      return null;
  }
};
