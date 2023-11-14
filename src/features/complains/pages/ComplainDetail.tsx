import { Badge, Button, Card } from '@mantine/core';
import { IconPaperclip, IconUser } from '@tabler/icons-react';

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
        <Card.Section p="lg" withBorder>
          <div className="space-y-4">
            <div className="border border-gray-300 rounded-md">
              <div className="p-4 border-b border-gray-300 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-200 text-gray-600 rounded-full">
                    <IconUser size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Budi Teknisi AJN</div>
                    <div className="text-xs text-gray-600">24 Desember 2023 16.00</div>
                  </div>
                </div>
                <Badge color="green" radius="sm" variant="light">
                  Client
                </Badge>
              </div>
              <div className="p-4">
                <p className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quibusdam, a
                  voluptate harum libero nisi earum recusandae illo alias commodi magni voluptatum
                  dolor nobis ipsa!
                </p>

                <div className="space-y-1 mt-4">
                  <div className="flex items-center text-sm text-primary-600">
                    <IconPaperclip size={16} />
                    <span className="ml-2">awewewe.jpg</span>
                  </div>
                  <div className="flex items-center text-sm text-primary-600">
                    <IconPaperclip size={16} />
                    <span className="ml-2">awewewe.jpg</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-300 rounded-md">
              <div className="p-4 border-b border-gray-300 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-200 text-gray-600 rounded-full">
                    <IconUser size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Budi Teknisi AJN</div>
                    <div className="text-xs text-gray-600">24 Desember 2023 16.00</div>
                  </div>
                </div>
                <div>Client</div>
              </div>
              <div className="p-4">
                <p className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quibusdam, a
                  voluptate harum libero nisi earum recusandae illo alias commodi magni voluptatum
                  dolor nobis ipsa!
                </p>

                <div className="space-y-1 mt-4">
                  <div className="flex items-center text-sm text-primary-600">
                    <IconPaperclip size={16} />
                    <span className="ml-2">awewewe.jpg</span>
                  </div>
                  <div className="flex items-center text-sm text-primary-600">
                    <IconPaperclip size={16} />
                    <span className="ml-2">awewewe.jpg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card.Section>
        <Card.Section p="lg">
          <div className="flex items-center space-x-2">
            <Button>Reply</Button>
            <Button color="red">Close</Button>
          </div>
        </Card.Section>
      </Card>
    </main>
  );
};
