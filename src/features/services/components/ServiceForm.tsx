import { Button, Card, Group, Radio, TextInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';
import { useState } from 'react';

import { AgencySelect } from '@/features/agencies';
import { ItemSelect } from '@/features/installations';
import { BrandSelect, ProductSelect } from '@/features/products';

import { useCreateService } from '../api';
import { Service, ServiceExternalDTO, ServiceInternalDTO } from '../types';

import { ServiceSelectType } from './ServiceSelectType';

type Props = {
  onSuccess?: (result: Service) => void;
  onCancel?: () => void;
};

export const ServiceForm: React.FC<Props> = ({ onCancel, onSuccess }) => {
  const createMutation = useCreateService();
  const form = useForm<ServiceInternalDTO | ServiceExternalDTO>({
    initialValues: {
      type_service: 'Preventive Maintenance',
      buying: 'internal',
      description: '',
      customer_id: undefined,
      installbase_id: undefined,
      pic_name: '',
      pic_phone: '',
      placement_space: '',
      serial_number: '',
      brand_name: '',
      product_name: '',
    },
  });
  const [state, setState] = useState<{ product?: string; brand?: string }>({
    product: undefined,
    brand: undefined,
  });

  const handleSubmit = form.onSubmit(async (values) => {
    await createMutation.mutateAsync(
      { type: values.buying as any, data: values },
      {
        onError({ response }) {
          form.setErrors((response?.data as any).errors);
        },
        onSuccess({ data }) {
          notifications.show({
            message: 'Service berhasil dibuat',
            color: 'green',
            icon: <IconCheck />,
          });
          if (onSuccess) {
            onSuccess(data);
          }
        },
      }
    );
  });

  return (
    <Card shadow="sm" component="form" onSubmit={handleSubmit}>
      <Card.Section withBorder>
        <div className="flex items-center justify-between py-4 px-5">
          <div className="font-semibold text-base">
            <h2 className="text-gray-800">Tambah Data Service</h2>
          </div>
        </div>
      </Card.Section>

      <Card.Section p="md" withBorder>
        <div className="space-y-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <div className="text-sm mb-2">Jenis Perawatan</div>
              <ServiceSelectType
                value={form.values['type_service']}
                onChange={(v) => form.setFieldValue('type_service', v)}
              />
            </div>

            <AgencySelect
              {...form.getInputProps('customer_id')}
              label="Rumah Sakit"
              placeholder="Pilih RS (Isi untuk mencari)"
              className="col-span-12 lg:col-span-9"
            />

            <TextInput
              {...form.getInputProps('placement_space')}
              label="Ruang Penempatan (Opsional)"
              placeholder="Ex: Radiologi"
              className="col-span-12 lg:col-span-3"
            />

            <div className="col-span-12">
              <Radio.Group {...form.getInputProps('buying')} label="Pembelian Produk">
                <Group mt="xs">
                  <Radio value="internal" label="Di Kami" />
                  <Radio value="external" label="Di Tempat Lain" />
                </Group>
              </Radio.Group>
            </div>
          </div>

          {form.values['buying'] == 'internal' ? (
            <div className="grid grid-cols-12 gap-4">
              <ItemSelect
                {...form.getInputProps('installbase_id')}
                label="Produk"
                placeholder={
                  form.values['customer_id']
                    ? 'Pilih Produk (Isi untuk mencari)'
                    : 'Harap isi rumah sakit terlebih dahulu'
                }
                className="col-span-12 lg:col-span-9"
                clearable
                disabled={!form.values['customer_id']}
                customer={form.values['customer_id']}
                nothingFoundMessage="Produk tidak ditemukan pada rumah sakit"
              />
              <TextInput
                {...form.getInputProps('serial_number')}
                label="Serial Number"
                placeholder="Masukan Serial Number"
                className="col-span-12 lg:col-span-3"
              />
            </div>
          ) : (
            <div className="grid grid-cols-12 gap-4">
              <BrandSelect
                label="Brand"
                placeholder="Masukan Brand"
                className="col-span-12 lg:col-span-4"
                value={state.brand}
                onChange={(v) => setState({ ...state, brand: v || undefined })}
                onSelectChange={(v) => form.setFieldValue('brand_name', v?.name)}
              />
              <ProductSelect
                label="Produk"
                placeholder={state.brand ? 'Masukan Product' : 'Harap isi brand terlebih dahulu'}
                className="col-span-12 lg:col-span-4"
                value={state.product}
                onChange={(v) => setState({ ...state, product: v || undefined })}
                disabled={!state.brand}
                brand={state.brand}
                nothingFoundMessage="Produk tidak ditemukan"
                onSelectChange={(v) => form.setFieldValue('product_name', v?.name)}
              />
              <TextInput
                {...form.getInputProps('serial_number')}
                label="Serial Number"
                placeholder="Masukan Serial Number"
                className="col-span-12 lg:col-span-4"
              />
            </div>
          )}

          <div className="grid grid-cols-12 gap-4">
            <TextInput
              {...form.getInputProps('pic_name')}
              label="Nama PIC"
              placeholder="Masukan Nama PIC"
              className="col-span-12 lg:col-span-4"
            />
            <TextInput
              {...form.getInputProps('pic_phone')}
              label="Nomor HP"
              placeholder="Masukan Nomor HP"
              className="col-span-12 lg:col-span-4"
            />
            <Textarea
              {...form.getInputProps('description')}
              label="Detail Masalah"
              placeholder="Masukan Detail Masalah"
              className="col-span-12 lg:col-span-12"
            />
          </div>
        </div>
      </Card.Section>

      <Card.Section p="md" pt={0} withBorder>
        <div className="flex flex-row-reverse items-center justify-end gap-2 mt-4">
          <Button
            type="button"
            variant="default"
            onClick={() => {
              if (onCancel) onCancel();
            }}
            loading={createMutation.isLoading}
          >
            Batal
          </Button>
          <Button type="submit" loading={createMutation.isLoading}>
            Simpan
          </Button>
        </div>
      </Card.Section>
    </Card>
  );
};
