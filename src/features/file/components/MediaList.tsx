import { useState } from 'react';

import { clsx, formatBytes } from '@/utils/format';

import { File } from '../types';

const sizes = {
  sm: 'grid md:grid-cols-2 lg:grid-cols-3 gap-6',
  md: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8',
};

type Props = {
  size?: keyof typeof sizes;
  onChange?: (file: File) => void;
  files: File[] | null;
};

export const MediaList: React.FC<Props> = ({ files, onChange, size = 'md' }) => {
  const [media, setMedia] = useState<File | null>(null);

  function handleClick(file: File) {
    return () => {
      setMedia(file);
      if (onChange) onChange(file);
    };
  }

  if (files == null)
    return (
      <div className={sizes[size]}>
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={`ms_${i}`}>
              <div className="bg-gray-300 rounded-md w-full aspect-video animate-pulse mb-3"></div>
              <div className="bg-gray-300 rounded w-3/4 h-5 animate-pulse mb-2"></div>
              <div className="bg-gray-300 rounded w-1/4 h-4 animate-pulse"></div>
            </div>
          ))}
      </div>
    );

  return (
    <div className={sizes[size]}>
      {files.map((file) => (
        <div
          className={clsx(
            'cursor-pointer',
            media?.id == file.id && '[&>div]:ring-2 [&>div]:ring-primary-600'
          )}
          key={file.id}
          onClick={handleClick(file)}
          aria-hidden
        >
          <div className="bg-gray-300 rounded-md w-full aspect-video overflow-hidden mb-2 relative">
            <img
              src={file.path}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-center object-cover"
            />
          </div>
          <h2 className="font-bold text-lg line-clamp-1">{file.originalname}</h2>
          <p className="text-sm">{formatBytes(file.size)}</p>
        </div>
      ))}
    </div>
  );
};
