import { Group, rem } from '@mantine/core';
import { Dropzone, DropzoneProps } from '@mantine/dropzone';
import { notifications } from '@mantine/notifications';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';

type Props = {
  label?: string;
  value?: File;
  error?: string;
} & Omit<DropzoneProps, 'children'>;

export const FileDropzone: React.FC<Props> = ({ value, label, error, ...props }) => {
  return (
    <>
      {label && <div className="text-sm mb-1">{label}</div>}

      <Dropzone
        onReject={() => notifications.show({ message: 'File tidak sesuai', color: 'red' })}
        style={{
          border: '2px dashed #cecece',
        }}
        {...props}
      >
        <Group justify="center" gap="xl" mih={120} style={{ pointerEvents: 'none' }}>
          <Dropzone.Accept>
            <IconUpload
              style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
              stroke={1.5}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
              stroke={1.5}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto
              style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
              stroke={1.5}
            />
          </Dropzone.Idle>

          {value ? <div>{value.name}</div> : <div>Klik atau drag file untuk upload</div>}
        </Group>
      </Dropzone>
      {error && <div className="text-xs text-red-600 mt-1.5">{error}</div>}
    </>
  );
};
