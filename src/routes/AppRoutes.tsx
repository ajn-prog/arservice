import { Route, Routes } from 'react-router-dom';

import { AuthLayout, DashboardLayout } from '@/components/layout';
import { lazyImport } from '@/utils/lazyImport';

const { Login } = lazyImport(() => import('@/features/auth'), 'Login');
const { Dashboard } = lazyImport(() => import('@/features/misc'), 'Dashboard');
const { UnderDevelopment } = lazyImport(() => import('@/features/misc'), 'UnderDevelopment');

const { Agencies } = lazyImport(() => import('@/features/agencies'), 'Agencies');
const { AgencyCreate } = lazyImport(() => import('@/features/agencies'), 'AgencyCreate');
const { AgencyUpdate } = lazyImport(() => import('@/features/agencies'), 'AgencyUpdate');

const { Installations } = lazyImport(() => import('@/features/installations'), 'Installations');
const { InstallationCreate } = lazyImport(
  () => import('@/features/installations'),
  'InstallationCreate'
);

const { Guides } = lazyImport(() => import('@/features/guides'), 'Guides');
const { ProductGuides } = lazyImport(() => import('@/features/guides'), 'ProductGuides');
const { GuideCreate } = lazyImport(() => import('@/features/guides'), 'GuideCreate');
const { GuideDetail } = lazyImport(() => import('@/features/guides'), 'GuideDetail');
const { GuideUpdate } = lazyImport(() => import('@/features/guides'), 'GuideUpdate');

const { Categories } = lazyImport(() => import('@/features/products'), 'Categories');
const { Brands } = lazyImport(() => import('@/features/products'), 'Brands');
const { Units } = lazyImport(() => import('@/features/products'), 'Units');
const { Modalities } = lazyImport(() => import('@/features/products'), 'Modalities');
const { Products } = lazyImport(() => import('@/features/products'), 'Products');
const { ProductCreate } = lazyImport(() => import('@/features/products'), 'ProductCreate');
const { ProductUpdate } = lazyImport(() => import('@/features/products'), 'ProductUpdate');

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="/category" element={<Categories />} />
        <Route path="/brand" element={<Brands />} />
        <Route path="/unit" element={<Units />} />
        <Route path="/modality" element={<Modalities />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<ProductUpdate />} />
        <Route path="/product/create/main" element={<ProductCreate type="main" />} />
        <Route path="/product/create/accessories" element={<ProductCreate type="accessories" />} />
        <Route path="/product/create/preventive" element={<ProductCreate type="preventive" />} />

        <Route path="/agency" element={<Agencies />} />
        <Route path="/agency/create" element={<AgencyCreate />} />
        <Route path="/agency/:id" element={<AgencyUpdate />} />

        <Route path="/installation" element={<Installations />} />
        <Route path="/installation/create" element={<InstallationCreate />} />
        <Route path="/installation/:id" element={<Installations />} />

        <Route path="/guide" element={<Guides />} />
        <Route path="/guide/:productId" element={<ProductGuides />} />
        <Route path="/guide/:productId/create" element={<GuideCreate />} />
        <Route path="/guide/:productId/:guideId" element={<GuideDetail />} />
        <Route path="/guide/:productId/:guideId/update" element={<GuideUpdate />} />

        <Route path="*" element={<UnderDevelopment />} />
      </Route>

      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};
