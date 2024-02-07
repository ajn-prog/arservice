import { Button, Select } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

import { useVisitComplain } from '../api';

type Props = {
  complain: number;
  onCancel?: () => void;
  onSuccess?: () => void;
};

export const VisitForm: React.FC<Props> = ({ complain, onCancel, onSuccess }) => {
  const visitMutation = useVisitComplain();
  const form = useForm({
    initialValues: {
      complain_id: complain,
      visit_date: undefined,
      visit_type: undefined,
    },
  });

  const handleSubmit = form.onSubmit(async (data) => {
    await visitMutation.mutateAsync(
      { data },
      {
        onSuccess: () => {
          notifications.show({
            color: 'green',
            message: 'Balasan berhasil dibuat',
          });
          if (onSuccess) onSuccess();
        },
        onError: ({ response }) => {
          form.setErrors((response?.data as any).errors);
          notifications.show({
            color: 'red',
            message: 'Balasan gagal dibuat',
          });
        },
      }
    );
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-12 gap-x-6 gap-y-4">
        <DateInput
          {...form.getInputProps('visit_date')}
          label="Tanggal Rencana Kunjungan"
          placeholder="Pilih Tanggal"
          className="col-span-12"
          valueFormat="D MMMM YYYY"
        />
        <Select
          {...form.getInputProps('visit_type')}
          label="Jenis Kunjungan"
          placeholder="Pilih Jenis Kunjungan"
          data={['Customer Visit', 'Corective Maintenance', 'Preventive Maintenance']}
          className="col-span-12"
        />
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <Button type="submit" loading={visitMutation.isLoading}>
          Simpan
        </Button>
        <Button
          variant="light"
          color="gray.6"
          bg="gray.2"
          onClick={onCancel}
          loading={visitMutation.isLoading}
        >
          Batal
        </Button>
      </div>
    </form>
  );
};
