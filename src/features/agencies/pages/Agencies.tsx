import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

import { AgencyTable } from '../components';

export const Agencies: React.FC = () => {
  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Instansi</h1>
        <Button component={Link} to="/agency/create">
          Tambah
        </Button>
      </div>

      <section className="mb-8">
        <AgencyTable />
      </section>
    </main>
  );
};
