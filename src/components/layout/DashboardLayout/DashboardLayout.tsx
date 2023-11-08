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
} from '@tabler/icons-react';
import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Sidebar } from '@/components/navigation';
import { useAuth } from '@/features/auth';
import { SidebarNavigation } from '@/types/navigation';

import { Header } from './Header';

const adminNavigations: SidebarNavigation = [
  {
    title: 'Menu',
    routes: [
      { title: 'Dashboard', href: '/', icon: IconLayout },
      {
        title: 'Data Master',
        icon: IconArchive,
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
      { title: 'Panduan', href: '/guide', icon: IconClipboardText },
      { title: 'Instansi', href: '/agency', icon: IconBuildingCommunity },
      { title: 'Install Base', href: '/installation', icon: IconTool },
      { title: 'Produk', href: '/product', icon: IconShoppingBag },
      { title: 'Penawaran', href: '/tender', icon: IconShoppingCart },
      { title: 'Komplain', href: '/complain', icon: IconMessage2 },
      { title: 'Tracking', href: '/tracking', icon: IconTruck },
    ],
  },
];

const customerNavigations: SidebarNavigation = [
  {
    title: 'Menu',
    routes: [
      { title: 'Profile', href: '/', icon: IconUser },
      { title: 'Install Base', href: '/installation', icon: IconTool },
      { title: 'Panduan', href: '/guide', icon: IconClipboardText },
      { title: 'Penawaran', href: '/tender', icon: IconShoppingCart },
      { title: 'Produk', href: '/product', icon: IconShoppingBag },
      { title: 'Komplain', href: '/complain', icon: IconMessage2 },
      { title: 'Tracking', href: '/tracking', icon: IconTruck },
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
      <Sidebar navigations={creds.role == 'Customer' ? customerNavigations : adminNavigations} />

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
