import { Group } from '@mantine/core';
import { Dropzone, DropzoneProps } from '@mantine/dropzone';
import { notifications } from '@mantine/notifications';
import { IconUpload, IconX } from '@tabler/icons-react';

type Props = {
  label?: string;
  value?: File;
  error?: string;
} & DropzoneProps;

export const FileDropzone: React.FC<Props> = ({ value, label, error, ...props }) => {
  return (
    <>
      {label && <div className="text-sm mb-1">{label}</div>}

      <Dropzone
        onReject={() => notifications.show({ message: 'File tidak sesuai', color: 'red' })}
        {...props}
      >
        <Group
          position="center"
          spacing="md"
          className="pointer-events-none text-center min-h-[4rem] text-gray-600"
        >
          <Dropzone.Accept>
            <IconUpload size={32} stroke={1.5} className="text-primary-600" />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX size={32} stroke={1.5} className="text-red-600" />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconUpload size={32} stroke={1.5} />
          </Dropzone.Idle>

          {value ? <div>{value.name}</div> : <div>Klik atau drag file untuk upload</div>}
        </Group>
      </Dropzone>
      {error && <div className="text-xs text-red-600 mt-1.5">{error}</div>}
    </>
  );
};
