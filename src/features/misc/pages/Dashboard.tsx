import { IconClipboardText, IconMessages, IconShoppingCart, IconTool } from '@tabler/icons-react';

export const Dashboard: React.FC = () => {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-6">Selamat Datang</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-5 shadow-lg shadow-gray-200">
          <div className="p-1.5 rounded-lg bg-red-100 text-red-600 inline-block">
            <IconMessages size={18} />
          </div>
          <h2 className="font-medium text-sm text-gray-600">Jumlah Komplain</h2>
          <div className="mt-1">
            <span className="font-bold text-4xl">12</span>
            <span className="text-sm font-medium ml-2 text-gray-600"></span>
          </div>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-lg shadow-gray-200">
          <div className="p-1.5 rounded-lg bg-orange-100 text-orange-600 inline-block">
            <IconTool size={18} />
          </div>
          <h2 className="font-medium text-sm text-gray-600">Jumlah Install Base</h2>
          <div className="mt-1">
            <span className="font-bold text-4xl">50</span>
            <span className="text-sm font-medium ml-2 text-gray-600"></span>
          </div>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-lg shadow-gray-200">
          <div className="p-1.5 rounded-lg bg-teal-100 text-teal-600 inline-block">
            <IconShoppingCart size={18} />
          </div>
          <h2 className="font-medium text-sm text-gray-600">Jumlah Penawaran</h2>
          <div className="mt-1">
            <span className="font-bold text-4xl">42</span>
            <span className="text-sm font-medium ml-2 text-gray-600"></span>
          </div>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-lg shadow-gray-200">
          <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600 inline-block">
            <IconClipboardText size={18} />
          </div>
          <h2 className="font-medium text-sm text-gray-600">Jumlah Panduan</h2>
          <div className="mt-1">
            <span className="font-bold text-4xl">243</span>
            <span className="text-sm font-medium ml-2 text-gray-600"></span>
          </div>
        </div>
      </div>
    </main>
  );
};
