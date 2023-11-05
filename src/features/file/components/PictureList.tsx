import { modals } from '@mantine/modals';
import { IconEye, IconTrash } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

type Props = {
  files: Array<File | string>;
  onChange?: (files: Array<File | string>) => void;
};

export const PictureList: React.FC<Props> = ({ files, onChange }) => {
  const [previews, setPreviews] = useState<string[]>([]);

  useEffect(() => {
    const imagePromises = files.map((file) => {
      return new Promise((resolve, reject) => {
        if (typeof file == 'string') return resolve(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          resolve(e.target?.result);
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises).then((results: any) => {
      setPreviews(results);
    });
  }, [files]);

  function handleClick(src: string) {
    return () => {
      modals.open({
        title: 'Detail',
        children: <img src={src} alt="" />,
        size: 'xl',
      });
    };
  }

  function handleRemove(index: number) {
    return () => {
      if (!onChange) return;

      onChange(files.filter((_, i) => index != i));
    };
  }

  return (
    <>
      {previews.map((preview, i) => (
        <div
          key={`picture_${i}`}
          className="bg-gray-200 rounded w-full h-44 relative overflow-hidden [&>div]:hover:block"
        >
          <img
            src={preview}
            loading="lazy"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute z-10 bg-black hidden transition-all bg-opacity-20 w-full h-full inset-0 p-2">
            <div className="flex items-end justify-end h-full">
              <button
                className="bg-white hover:bg-gray-100 p-1 rounded-full"
                onClick={handleClick(preview)}
                type="button"
              >
                <IconEye className="w-5 h-5" />
              </button>
              <button className="bg-white hover:bg-gray-100 p-1 rounded-full ml-2">
                <IconTrash
                  className="w-5 h-5 text-red-700"
                  onClick={handleRemove(i)}
                  type="button"
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
