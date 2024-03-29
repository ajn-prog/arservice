import { Center, Loader } from '@mantine/core';
import {
  IconLayout,
  IconArchive,
  IconClipboardText,
  IconBuildingCommunity,
  IconTruck,
  IconTool,
  IconShoppingBag,
  IconShoppingCart,
  IconMessage2,
  IconUser,
  IconBasket,
  IconSettings,
} from '@tabler/icons-react';
import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Sidebar } from '@/components/navigation';
import { useAuth } from '@/features/auth';
import { SidebarNavigation } from '@/types/navigation';

import { Header } from './Header';

const navigations: SidebarNavigation = [
  {
    title: 'Menu',
    routes: [
      { title: 'Dashboard', href: '/', icon: IconLayout, role: ['-Customer'] },
      { title: 'Profile', href: '/', icon: IconUser, role: ['Customer'] },
      {
        title: 'Data Master',
        icon: IconArchive,
        role: ['Superadmin'],
        routes: [
          {
            title: 'Data Satuan',
            href: '/unit',
          },
          {
            title: 'Data Kategori',
            href: '/category',
          },
          {
            title: 'Data Modality',
            href: '/modality',
          },
          {
            title: 'Data Brand',
            href: '/brand',
          },
        ],
      },
      { title: 'Install Base', href: '/installation', icon: IconTool, role: ['-Logistic'] },
      { title: 'Panduan', href: '/guide', icon: IconClipboardText, role: ['-Logistic'] },
      {
        title: 'Instansi',
        href: '/agency',
        icon: IconBuildingCommunity,
        role: ['Superadmin', 'Engineer'],
      },
      { title: 'Produk', href: '/product', icon: IconShoppingBag },
      { title: 'Keranjang', href: '/cart', icon: IconShoppingCart, role: ['Customer'] },
      { title: 'Penawaran', href: '/tender', icon: IconBasket, role: ['Superadmin', 'Customer'] },
      { title: 'Komplain', href: '/complain', icon: IconMessage2 },
      { title: 'Tracking', href: '/tracking', icon: IconTruck },
      { title: 'Service', href: '/service', icon: IconSettings, role: ['Superadmin', 'Engineer'] },
    ],
  },
];

const LoadingScreen = () => (
  <Center className="w-full h-full bg-body">
    <Loader />
  </Center>
);

export const DashboardLayout: React.FC = () => {
  const { creds } = useAuth();

  if (!creds) return <Navigate to="/login" replace />;

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar navigations={navigations} />

      <div
        className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden pb-12"
        id="content"
      >
        <Header />
        <Suspense fallback={<LoadingScreen />}>
          <div className="px-4 sm:px-6 lg:px-8 py-8 pb-14 w-full max-w-8xl mx-auto">
            <Outlet />
          </div>
        </Suspense>
      </div>
    </div>
  );
};
