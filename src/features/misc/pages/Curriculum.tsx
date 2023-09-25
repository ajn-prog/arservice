import { IconSchool } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const menus = [
  {
    title: 'Program',
    href: '/program',
  },
  {
    title: 'Mata Pelajaran',
    href: '/subject',
  },
  {
    title: 'Kelas',
    href: '/classroom',
  },
  {
    title: 'Jadwal Pelajaran',
    href: '/schedule',
  },
  {
    title: 'Predikat Penilaian',
    href: '/predicate',
  },
];

export const Curriculum: React.FC = () => {
  return (
    <main>
      <section className="max-w-3xl">
        <div className="mb-6">
          <h2 className="text-2xl text-center font-bold">Kurikulum</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full">
          {menus.map(({ title, href }) => (
            <Link key={title} to={href}>
              <button className="aspect-square border border-blue-400 text-blue-500 hover:bg-blue-100 hover:bg-opacity-90 transition bg-blue-50 w-full rounded-lg shadow-lg shadow-gray-200 flex flex-col items-center justify-center space-y-1">
                <IconSchool size={36} />
                <div className="font-bold h-9 px-2 flex items-center justify-center">{title}</div>
              </button>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};
