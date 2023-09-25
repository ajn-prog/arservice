import { Route, Routes } from 'react-router-dom';

import { AuthLayout, DashboardLayout } from '@/components/layout';
import { lazyImport } from '@/utils/lazyImport';

const { Login } = lazyImport(() => import('@/features/auth'), 'Login');
const { Dashboard } = lazyImport(() => import('@/features/misc'), 'Dashboard');
const { UnderDevelopment } = lazyImport(() => import('@/features/misc'), 'UnderDevelopment');

const { Categories } = lazyImport(() => import('@/features/products'), 'Categories');
const { Brands } = lazyImport(() => import('@/features/products'), 'Brands');
const { Units } = lazyImport(() => import('@/features/products'), 'Units');
const { Products } = lazyImport(() => import('@/features/products'), 'Products');
const { ProductCreate } = lazyImport(() => import('@/features/products'), 'ProductCreate');

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="/category" element={<Categories />} />
        <Route path="/brand" element={<Brands />} />
        <Route path="/unit" element={<Units />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/create" element={<ProductCreate />} />

        <Route path="*" element={<UnderDevelopment />} />
      </Route>

      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};
