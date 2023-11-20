import { Button, Card, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useLocalStorage } from '@mantine/hooks';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoadingScreen } from '@/components/elements';
import { useBiodata } from '@/features/user';

import { OrderRequest, useCreateOrder } from '../api';
import { AddressForm, CartList } from '../components';
import { useCart } from '../hooks';

export const Checkout: React.FC = () => {
  const { carts } = useCart();
  const navigate = useNavigate();
  const { data: biodata, isLoading, isError } = useBiodata();
  const orderMutation = useCreateOrder();
  const form = useForm<OrderRequest['data']>({
    initialValues: {
      name: '',
      carts: [],
      address: '',
      kecamatan_id: undefined,
      phone: '',
      position: '',
    },
  });
  const [selected, setSelected] = useLocalStorage<number[]>({
    key: 'selected-cart',
    defaultValue: [],
  });

  const handleSubmit = form.onSubmit(async (values) => {
    modals.openConfirmModal({
      title: 'Checkout',
      children: <div className="text-sm">Apakah data yang Anda masukan sudah benar?</div>,
      onConfirm: async () => {
        await orderMutation.mutateAsync(
          {
            data: { ...values, carts: selected },
          },
          {
            onSuccess: () => {
              notifications.show({
                message: 'Penawaran berhasil dibuat',
                color: 'green',
              });
              setSelected([]);
              navigate('/tender');
            },
            onError: () => {
              notifications.show({
                message: 'Penawaran gagal dibuat',
                color: 'green',
              });
            },
          }
        );
      },
    });
  });

  useEffect(() => {
    if (!biodata) return;

    form.setValues({
      ...form.values,
      address: biodata.address,
      kecamatan_id: biodata.kecamatan_id,
      phone: biodata.phone_number,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [biodata]);

  const count = useMemo(() => {
    return carts
      .filter(({ product_id }) => selected.includes(product_id))
      .reduce((prev, curr) => prev + curr.quantity, 0);
  }, [carts, selected]);

  function handleAddress() {
    modals.open({
      modalId: 'address-modal',
      title: 'Ubah Alamat',
      centered: true,
      children: (
        <AddressForm
          onCancel={() => modals.close('address-modal')}
          onSubmit={(v) => {
            form.setFieldValue('address', v.address);
            form.setFieldValue('phone', v.phone);
            modals.close('address-modal');
          }}
        />
      ),
    });
  }

  if (isLoading || isError)
    return (
      <div className="my-24">
        <LoadingScreen />
      </div>
    );

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Checkout</h1>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 lg:col-span-9 space-y-6">
          <div className="space-y-2">
            <Card p="lg">
              <div className="border-b border-gray-200 pb-2">
                <h2 className="text-base text-gray-900 font-medium">Penanggung Jawab</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6 py-2">
                <TextInput
                  {...form.getInputProps('name')}
                  required
                  label="Nama PIC"
                  placeholder="Ex :  Sarimin"
                />
                <TextInput
                  {...form.getInputProps('position')}
                  required
                  label="Jabatan"
                  placeholder="Ex : Direktur"
                />
                <TextInput label="Nomor HP" required placeholder="Ex : 085752140606" />
              </div>

              <div className="border-b border-gray-200 pb-2 mt-4">
                <h2 className="text-base text-gray-900 font-medium">Alamat Pengiriman</h2>
              </div>

              <div className="pt-2">
                <div className="text-primary-600 font-bold mb-1">{biodata.name}</div>
                <div className="font-bold">{form.values['phone']}</div>
                <div className="text-sm text-gray-600">{form.values['address']}</div>

                <Button onClick={handleAddress} variant="outline" className="mt-4" size="xs">
                  Ganti Alamat Lain
                </Button>
              </div>
            </Card>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Pesanan</h2>
            <div className="rounded-md overflow-hidden">
              <CartList
                carts={carts.filter(({ product_id }) => selected.includes(product_id))}
                selected={selected}
                onChange={(v) => setSelected(v)}
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="bg-white w-full p-4 rounded-md">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-base text-gray-800 font-medium mb-2">Ringkasan Belanja</h3>
              <p className="text-primary-600 text-sm">Jumlah Barang ({count})</p>
            </div>
            <div className="pt-4">
              <Button
                type="submit"
                fullWidth
                disabled={selected.length == 0}
                loading={orderMutation.isLoading}
              >
                Penawaran
              </Button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};
