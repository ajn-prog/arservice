import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';

import { ModalityCreateForm, ModalityTable } from '../components';

export const Modalities: React.FC = () => {
  function handleAdd() {
    modals.open({
      title: 'Tambah Modality',
      children: (
        <ModalityCreateForm
          onSuccess={() => modals.closeAll()}
          onCancel={() => modals.closeAll()}
        />
      ),
    });
  }

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Modality</h1>
        <Button onClick={handleAdd}>Tambah</Button>
      </div>

      <section className="mb-8">
        <ModalityTable />
      </section>
    </main>
  );
};
