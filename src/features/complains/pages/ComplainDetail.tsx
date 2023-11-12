import { Card } from '@mantine/core';

export const ComplainDetail: React.FC = () => {
  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Detail Komplain</h1>
      </div>

      <Card>
        <Card.Section p="lg" withBorder>
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-base">Detail Komplain #1029</h2>
            <div>
              Priority: <span className="text-primary-600">Medium</span>
            </div>
          </div>
        </Card.Section>
      </Card>
    </main>
  );
};
