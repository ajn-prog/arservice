import { Badge } from '@mantine/core';

import { TenderStatus } from '../types';

type Props = {
  status: TenderStatus;
};

export const TenderBadge: React.FC<Props> = ({ status }) => {
  switch (status) {
    case 'pending':
      return (
        <Badge variant="light" color="gray">
          Menunggu
        </Badge>
      );
    case 'approved':
      return (
        <Badge variant="light" color="green">
          Diterima
        </Badge>
      );
    case 'rejected':
      return (
        <Badge variant="light" color="red">
          Ditolak
        </Badge>
      );
    default:
      return (
        <Badge variant="light" color="gray">
          Pending
        </Badge>
      );
  }
};
