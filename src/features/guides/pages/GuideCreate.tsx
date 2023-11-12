import { GuideCreateForm } from '../components';

export const GuideCreate: React.FC = () => {
  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Panduan</h1>
      </div>

      <GuideCreateForm />
    </main>
  );
};
