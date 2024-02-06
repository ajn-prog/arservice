import { Route, Routes } from 'react-router-dom';

import { AuthLayout, DashboardLayout } from '@/components/layout';
import { lazyImport } from '@/utils/lazyImport';

const { Login } = lazyImport(() => import('@/features/auth'), 'Login');
const { Home } = lazyImport(() => import('@/features/misc'), 'Home');
const { UnderDevelopment } = lazyImport(() => import('@/features/misc'), 'UnderDevelopment');

const { Agencies } = lazyImport(() => import('@/features/agencies'), 'Agencies');
const { AgencyCreate } = lazyImport(() => import('@/features/agencies'), 'AgencyCreate');
const { AgencyUpdate } = lazyImport(() => import('@/features/agencies'), 'AgencyUpdate');

const { Installations } = lazyImport(() => import('@/features/installations'), 'Installations');
const { InstallationDetail } = lazyImport(
  () => import('@/features/installations'),
  'InstallationDetail'
);
const { InstallationCreate } = lazyImport(
  () => import('@/features/installations'),
  'InstallationCreate'
);
const { InstallationUpdate } = lazyImport(
  () => import('@/features/installations'),
  'InstallationUpdate'
);

const { Complains } = lazyImport(() => import('@/features/complains'), 'Complains');
const { ComplainCreate } = lazyImport(() => import('@/features/complains'), 'ComplainCreate');
const { ComplainDetail } = lazyImport(() => import('@/features/complains'), 'ComplainDetail');

const { Carts } = lazyImport(() => import('@/features/tenders'), 'Carts');
const { Checkout } = lazyImport(() => import('@/features/tenders'), 'Checkout');
const { Tenders } = lazyImport(() => import('@/features/tenders'), 'Tenders');

const { Guides } = lazyImport(() => import('@/features/guides'), 'Guides');
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
const { ProductDetail } = lazyImport(() => import('@/features/products'), 'ProductDetail');

const { Services } = lazyImport(() => import('@/features/services'), 'Services');
const { ServiceCreate } = lazyImport(() => import('@/features/services'), 'ServiceCreate');
const { ServiceUpdate } = lazyImport(() => import('@/features/services'), 'ServiceUpdate');

const { Tracking } = lazyImport(() => import('@/features/tracking'), 'Tracking');

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />

        <Route path="/category" element={<Categories />} />
        <Route path="/brand" element={<Brands />} />
        <Route path="/unit" element={<Units />} />
        <Route path="/modality" element={<Modalities />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/:id/update" element={<ProductUpdate />} />
        <Route path="/product/create/main" element={<ProductCreate type="main" />} />
        <Route path="/product/create/accessories" element={<ProductCreate type="accessories" />} />
        <Route path="/product/create/preventive" element={<ProductCreate type="preventive" />} />

        <Route path="/agency" element={<Agencies />} />
        <Route path="/agency/create" element={<AgencyCreate />} />
        <Route path="/agency/:id" element={<AgencyUpdate />} />

        <Route path="/installation" element={<Installations />} />
        <Route path="/installation/create" element={<InstallationCreate />} />
        <Route path="/installation/:id" element={<InstallationDetail />} />
        <Route path="/installation/:id/update" element={<InstallationUpdate />} />

        <Route path="/tender" element={<Tenders />} />

        <Route path="/cart" element={<Carts />} />
        <Route path="/cart/checkout" element={<Checkout />} />

        <Route path="/guide" element={<Guides />} />
        <Route path="/guide/create" element={<GuideCreate />} />
        <Route path="/guide/:id" element={<GuideDetail />} />
        <Route path="/guide/:id/update" element={<GuideUpdate />} />

        <Route path="/complain" element={<Complains />} />
        <Route path="/complain/create" element={<ComplainCreate />} />
        <Route path="/complain/:id" element={<ComplainDetail />} />

        <Route path="/service" element={<Services />} />
        <Route path="/service/create" element={<ServiceCreate />} />
        <Route path="/service/:id" element={<ServiceUpdate />} />

        <Route path="/tracking" element={<Tracking />} />

        <Route path="*" element={<UnderDevelopment />} />
      </Route>

      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};
