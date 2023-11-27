import { Button, Card } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { useNavigate, useParams } from 'react-router-dom';

import { LoadingScreen } from '@/components/elements';
import { dayjs } from '@/lib/dayjs';

import { useGuide } from '../api';

export const GuideDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<'id'>();
  const { data: guide, isLoading, isError } = useGuide({ id: id as string });

  if (isLoading)
    return (
      <div className="mt-48">
        <LoadingScreen />
      </div>
    );

  if (isError)
    return (
      <div className="mt-48 text-center">
        <h1 className="text-lg font-bold mb-2">Produk tidak ditemukan</h1>
        <Button onClick={() => navigate(-1)} leftSection={<IconArrowLeft size={14} />}>
          Kembali
        </Button>
      </div>
    );

  return (
    <main>
      <Card p="lg">
        <article className="max-w-2xl w-full mx-auto">
          <header>
            <h1 className="text-xl font-bold">{guide.title}</h1>
            <div className="text-base text-primary-600">
              {dayjs(guide.createdAt).format('D MMMM YYYY')}
            </div>
          </header>

          <section className="w-full aspect-video bg-gray-200 rounded-md overflow-hidden relative my-4">
            {guide.video ? (
              <iframe
                src={guide.video}
                title="Kenapa Kita Susah Menabung?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full inset-0 absolute object-cover object-center"
              ></iframe>
            ) : (
              <img
                src={guide.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            )}
          </section>

          <section
            className="prose"
            dangerouslySetInnerHTML={{ __html: guide.description }}
          ></section>
        </article>
      </Card>
    </main>
  );
};
