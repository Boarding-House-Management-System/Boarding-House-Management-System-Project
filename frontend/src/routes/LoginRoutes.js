import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// render - login
const Land = Loadable(lazy(() => import('pages/landing/Landing')));
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const TenantReg = Loadable(lazy(() => import('pages/authentication/TenantsRegistration')));
const TenantRegReq = Loadable(lazy(() => import('pages/authentication/RequestRegister')));
const AdminReg = Loadable(lazy(() => import('pages/authentication/AdminRegistration')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/',
      element: <Land />
    },
    {
      path: 'tenant-register',
      element: <TenantReg />
    },
    {
      path: 'admin-register',
      element: <AdminReg />
    },
    {
      path: 'register-request',
      element: <TenantRegReq />
    },
    {
      path: 'login',
      element: <AuthLogin />
    }
  ]
};

export default LoginRoutes;
