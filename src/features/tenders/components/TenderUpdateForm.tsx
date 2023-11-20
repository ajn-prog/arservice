import { Button, Group, NumberInput, Radio } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';

import { useUpdateTender } from '../api';
import { Tender, TenderUpdateDTO } from '../types';

type Props = {
  tender: Tender;
  onSuccess?: () => void;
  onCancel?: () => void;
};

export const TenderUpdateForm: React.FC<Props> = ({ tender, onCancel, onSuccess }) => {
  const { mutateAsync, isLoading } = useUpdateTender();
  const form = useForm<TenderUpdateDTO>({
    initialValues: {
      status: 'rejected',
      contract_value: 0,
      delivery_cost: 0,
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    await mutateAsync(
      { id: tender.id, data: values },
      {
        onError({ response }) {
          form.setErrors((response?.data as any).errors);
        },
        onSuccess() {
          notifications.show({
            message: 'Penawaran berhasil diubah',
            color: 'green',
            icon: <IconCheck />,
          });
          if (onSuccess) {
            onSuccess();
          }
        },
      }
    );
  });

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Radio.Group {...form.getInputProps('status')} label="Status Penawaran">
          <Group mt="xs">
            <Radio value="approved" label="Terima" />
            <Radio value="rejected" label="Tolak" />
          </Group>
        </Radio.Group>
        {form.values['status'] == 'approved' && (
          <>
            <NumberInput
              {...form.getInputProps('contract_value')}
              label="Nilai Kontrak"
              placeholder="Masukan nilai kontrak"
              leftSection={<span className="text-xs">Rp.</span>}
              decimalSeparator=","
              thousandSeparator="."
              hideControls
            />
            <NumberInput
              {...form.getInputProps('delivery_cost')}
              label="Ongkos Kirim"
              placeholder="Masukan ongkos kirim"
              leftSection={<span className="text-xs">Rp.</span>}
              decimalSeparator=","
              thousandSeparator="."
              hideControls
            />
          </>
        )}
      </div>

      <div className="flex items-center gap-4 mt-6">
        <Button type="submit" loading={isLoading}>
          Konfirmasi
        </Button>
        <Button
          type="button"
          variant="default"
          onClick={() => {
            if (onCancel) onCancel();
          }}
          loading={isLoading}
        >
          Batal
        </Button>
      </div>
    </form>
  );
};
