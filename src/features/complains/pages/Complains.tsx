import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

import { ComplainTable } from '../components';

export const Complains: React.FC = () => {
  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Komplain</h1>
        <Button component={Link} to="/complain/create">
          Tambah
        </Button>
      </div>

      <section className="mb-8">
        <ComplainTable />
      </section>
    </main>
  );
};
