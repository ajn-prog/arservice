import { Button, TextInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';

import { Brand } from '../types';

type Props = {
  onSuccess?: (result: Brand) => void;
  onCancel?: () => void;
};

export const BrandCreateForm: React.FC<Props> = ({ onCancel }) => {
  const form = useForm();

  const handleSubmit = form.onSubmit(async (values) => {
    console.log(values);
    // await mutateAsync(
    //   { data: values },
    //   {
    //     onError({ response }) {
    //       form.setErrors((response?.data as any).errors);
    //     },
    //     onSuccess({ result }) {
    //       notifications.show({
    //         message: 'Brand berhasil dibuat',
    //         color: 'green',
    //         icon: <IconCheck />,
    //       });
    //       if (onSuccess) {
    //         onSuccess(result);
    //       }
    //     },
    //   }
    // );
  });

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <TextInput
          {...form.getInputProps('name')}
          label="Nama"
          placeholder="Masukan Nama"
          required
        />
        <Textarea
          {...form.getInputProps('description')}
          label="Deskripsi"
          placeholder="Masukan Deskripsi"
        />
      </div>

      <div className="flex items-center justify-end gap-4 mt-4">
        <Button
          type="button"
          variant="default"
          onClick={() => {
            if (onCancel) onCancel();
          }}
        >
          Batal
        </Button>
        <Button type="submit">Simpan</Button>
      </div>
    </form>
  );
};