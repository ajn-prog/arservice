import { modals } from '@mantine/modals';
import { IconEye, IconTrash } from '@tabler/icons-react';

type Props = {
  src: string;
  onRemove: () => void;
};

export const FilePicture: React.FC<Props> = ({ src, onRemove }) => {
  function handleClick() {
    modals.open({
      title: 'Gallery Detail',
      children: <img src={src} alt="" />,
      size: 'xl',
    });
  }

  return (
    <div className="bg-gray-200 rounded w-full h-44 relative overflow-hidden [&>div]:hover:block">
      <img src={src} loading="lazy" alt="" className="w-full h-full object-cover object-center" />
      <div className="absolute z-10 bg-black hidden transition-all bg-opacity-20 w-full h-full inset-0 p-2">
        <div className="flex items-end justify-end h-full">
          <button className="bg-white hover:bg-gray-100 p-1 rounded-full" onClick={handleClick}>
            <IconEye className="w-5 h-5" />
          </button>
          <button className="bg-white hover:bg-gray-100 p-1 rounded-full ml-2">
            <IconTrash className="w-5 h-5 text-red-700" onClick={onRemove} />
          </button>
        </div>
      </div>
    </div>
  );
};
