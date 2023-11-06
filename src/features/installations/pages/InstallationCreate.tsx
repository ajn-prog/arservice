import { InstallationCreateForm } from '../components';

export const InstallationCreate: React.FC = () => {
  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Install Base</h1>
      </div>

      <InstallationCreateForm />
    </main>
  );
};
