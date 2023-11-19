import { Button, TextInput } from '@mantine/core';

export const Tracking: React.FC = () => {
  return (
    <main>
      <div className="w-full h-[38rem] flex flex-col items-center justify-center">
        <div className="max-w-lg w-full p-8 h-56 flex flex-col items-center justify-center rounded-lg bg-white shadow-lg shadow-gray-300">
          <h1 className="mb-4 text-lg font-bold text-center">
            Tracking produk pesanan anda disini!
          </h1>
          <div className="flex items-end space-x-4 max-w-sm w-full">
            <TextInput label="Nomor Resi" placeholder="Masukan Nomor Resi" className="flex-grow" />
            <Button size="sm">Cek</Button>
          </div>
        </div>
      </div>
    </main>
  );
};
