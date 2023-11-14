import { Badge } from '@mantine/core';
import { IconPaperclip, IconUser } from '@tabler/icons-react';

import { ComplainReply } from '../types';

type Props = {
  replies: ComplainReply[];
};

export const ComplainReplies: React.FC<Props> = ({ replies }) => {
  console.log(replies);

  if (replies.length == 0) return <div className="text-gray-600">Belum ada balasan</div>;

  return (
    <div className="space-y-4">
      <div className="border border-gray-300 rounded-md">
        <div className="p-4 border-b border-gray-300 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gray-200 text-gray-600 rounded-full">
              <IconUser size={24} />
            </div>
            <div>
              <div className="font-semibold text-sm">awe</div>
              <div className="text-xs text-gray-600">24 Desember 2023 16.00</div>
            </div>
          </div>
          <Badge color="green" radius="sm" variant="light">
            Client
          </Badge>
        </div>
        <div className="p-4">
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quibusdam, a voluptate
            harum libero nisi earum recusandae illo alias commodi magni voluptatum dolor nobis ipsa!
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quibusdam, a voluptate
            harum libero nisi earum recusandae illo alias commodi magni voluptatum dolor nobis ipsa!
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
  );
};
