import { IconPaperclip } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

type Props = {
  files: string[];
};

export const AttachmentList: React.FC<Props> = ({ files }) => {
  function getFileName(link: string): string | null {
    try {
      const url = new URL(link);
      const pathname = url.pathname;
      const parts = pathname.split('/');
      const filename = parts[parts.length - 1];
      return filename !== '' ? filename : null;
    } catch (error) {
      return 'unknown file';
    }
  }

  return (
    <div className="space-y-1">
      {files.map((file, i) => (
        <Link
          to={file}
          target="_blank"
          key={`${file}_${i}`}
          className="flex items-center text-sm text-primary-600 line-clamp-1"
        >
          <IconPaperclip size={16} className="flex-shrink-0" />
          <span className="ml-2">{getFileName(file)}</span>
        </Link>
      ))}
    </div>
  );
};
