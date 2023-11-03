import { AgencyCreateForm } from '../components';

export const AgencyCreate: React.FC = () => {
  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Instansi</h1>
      </div>

      <AgencyCreateForm />
    </main>
  );
};
