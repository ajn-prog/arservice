import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

import { Authorization } from '@/features/auth';

import { GuideTable } from '../components';

export const Guides: React.FC = () => {
  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Panduan</h1>

        <Authorization role={['Admin', 'Superadmin']}>
          <Button component={Link} to="/guide/create">
            Tambah
          </Button>
        </Authorization>
      </div>

      <section className="mb-8">
        <GuideTable />
      </section>
    </main>
  );
};
