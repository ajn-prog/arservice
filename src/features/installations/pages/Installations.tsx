import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

import { Authorization } from '@/features/auth';

import { InstallationTable } from '../components';

export const Installations: React.FC = () => {
  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Install Base</h1>
        <Authorization role={['-Customer']}>
          <Button component={Link} to="/installation/create">
            Tambah
          </Button>
        </Authorization>
      </div>

      <section className="mb-8">
        <InstallationTable />
      </section>
    </main>
  );
};
