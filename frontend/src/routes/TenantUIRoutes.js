import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
//import MinimalLayout from 'layout/MinimalLayout';
import TenantLayout from 'layout/TenantLayout/TenantLayout';

// render
const TenantPage = Loadable(lazy(() => import('../pages/tenant-ui/TenantUI')));

// ==============================|| TENANT UI ROUTING ||============================== //

const TenantUIRoutes = {
  path: '/',
  element: <TenantLayout />,
  children: [
    {
      path: '/TenantsUI',
      element: <TenantPage />
    }
  ]
};

export default TenantUIRoutes;
