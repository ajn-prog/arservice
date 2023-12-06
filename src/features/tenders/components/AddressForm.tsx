import { Button, NumberInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';

type Value = {
  phone: string;
  address: string;
};

type Props = {
  onSubmit: (v: Value) => void;
  onCancel: () => void;
};

export const AddressForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
  const form = useForm<Value>({
    initialValues: {
      phone: '',
      address: '',
    },
  });

  const handleSubmit = form.onSubmit(async () => {
    onSubmit(form.values);
    form.reset();
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-2">
        <NumberInput
          {...form.getInputProps('phone')}
          hideControls
          required
          label="No Telepon"
          placeholder="Masukan No Telepon"
        />
        <Textarea
          {...form.getInputProps('address')}
          required
          label="Alamat"
          placeholder="Masukan Alamat"
        />
      </div>

      <div className="flex items-center gap-4 mt-4">
        <Button type="submit">Simpan</Button>
        <Button type="button" variant="default" onClick={onCancel}>
          Batal
        </Button>
      </div>
    </form>
  );
};
