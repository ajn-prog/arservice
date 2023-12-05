import { Loader } from '@mantine/core';
import { IconClipboardText, IconMessages, IconShoppingCart, IconTool } from '@tabler/icons-react';

import { useDashboard } from '../api';

export const Dashboard: React.FC = () => {
  const { data } = useDashboard();

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
            {data?.complain ? (
              <>
                <span className="font-bold text-4xl">{data.complain}</span>
                <span className="text-sm font-medium ml-2 text-gray-600"></span>
              </>
            ) : (
              <Loader type="dots" />
            )}
          </div>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-lg shadow-gray-200">
          <div className="p-1.5 rounded-lg bg-orange-100 text-orange-600 inline-block">
            <IconTool size={18} />
          </div>
          <h2 className="font-medium text-sm text-gray-600">Jumlah Install Base</h2>
          <div className="mt-1">
            {data?.install_base ? (
              <>
                <span className="font-bold text-4xl">{data?.install_base}</span>
                <span className="text-sm font-medium ml-2 text-gray-600"></span>
              </>
            ) : (
              <Loader type="dots" />
            )}
          </div>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-lg shadow-gray-200">
          <div className="p-1.5 rounded-lg bg-teal-100 text-teal-600 inline-block">
            <IconShoppingCart size={18} />
          </div>
          <h2 className="font-medium text-sm text-gray-600">Jumlah Penawaran</h2>
          <div className="mt-1">
            {data?.tender ? (
              <>
                <span className="font-bold text-4xl">{data?.tender}</span>
                <span className="text-sm font-medium ml-2 text-gray-600"></span>
              </>
            ) : (
              <Loader type="dots" />
            )}
          </div>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-lg shadow-gray-200">
          <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600 inline-block">
            <IconClipboardText size={18} />
          </div>
          <h2 className="font-medium text-sm text-gray-600">Jumlah Panduan</h2>
          <div className="mt-1">
            {data?.guide_product ? (
              <>
                <span className="font-bold text-4xl">{data?.guide_product}</span>
                <span className="text-sm font-medium ml-2 text-gray-600"></span>
              </>
            ) : (
              <Loader type="dots" />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
