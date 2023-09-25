import { Input, InputWrapperProps, Tabs } from '@mantine/core';
import { closeAllModals, openModal } from '@mantine/modals';
import { IconPhoto, IconUpload } from '@tabler/icons-react';
import { useState } from 'react';

import { File } from '../types';

import { FilePick } from './FilePick';
import { FileUpload } from './FileUpload';

type Props = {
  onPick: (value: File) => void;
} & Omit<InputWrapperProps, 'children'>;

export const FileInsert: React.FC<Props> = ({ onPick, ...props }) => {
  const [pick, setPick] = useState<File | null>(null);

  function handlePick(file: File) {
    setPick(file);
    onPick(file);
  }

  function handleClose() {
    closeAllModals();
  }

  function handleClick() {
    openModal({
      title: 'File Insert',
      size: 'xl',
      children: (
        <div>
          <Tabs defaultValue="upload">
            <Tabs.List>
              <Tabs.Tab value="upload" icon={<IconUpload size={14} />}>
                Upload
              </Tabs.Tab>
              <Tabs.Tab value="library" icon={<IconPhoto size={14} />}>
                Library
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="upload">
              <FileUpload onUpload={handlePick} onClose={handleClose} />
            </Tabs.Panel>
            <Tabs.Panel value="library">
              <FilePick onPick={handlePick} onClose={handleClose} />
            </Tabs.Panel>
          </Tabs>
        </div>
      ),
    });
  }

  return (
    <Input.Wrapper {...props}>
      <Input component="button" onClick={handleClick}>
        {pick ? pick.originalname : <span className="text-gray-500 text-sm">Pilih Thumbnail</span>}
      </Input>
    </Input.Wrapper>
  );
};
