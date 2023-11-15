import { Badge, BadgeProps } from '@mantine/core';

import { ComplainStatus } from '../types';

type Props = {
  status: ComplainStatus;
} & BadgeProps;

export const ComplainBadge: React.FC<Props> = ({ status, ...props }) => {
  switch (status) {
    case 'open':
      return (
        <Badge variant="light" color="red" {...props}>
          Open
        </Badge>
      );
    case 'closed':
      return (
        <Badge variant="light" color="gray" {...props}>
          Closed
        </Badge>
      );
    default:
      return null;
  }
};
