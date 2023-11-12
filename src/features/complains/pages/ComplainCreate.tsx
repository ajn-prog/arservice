import { ComplainForm } from '../components';

export const ComplainCreate: React.FC = () => {
  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Komplain</h1>
      </div>

      <ComplainForm />
    </main>
  );
};
