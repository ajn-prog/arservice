import { TenderTable } from '../components';

export const Tenders: React.FC = () => {
  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Penawaran</h1>
      </div>

      <section className="mb-8">
        <TenderTable />
      </section>
    </main>
  );
};
