import { useNavigate } from 'react-router-dom';

import { ServiceForm } from '../components';

export const ServiceCreate: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Service</h1>
      </div>

      <ServiceForm onCancel={() => navigate(-1)} onSuccess={() => navigate('/service')} />
    </main>
  );
};
