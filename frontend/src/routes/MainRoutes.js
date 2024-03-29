import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import HostelDashboard from 'pages/hostels/index';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const Finance = Loadable(lazy(() => import('pages/Finance/FinancePage')));

// render - hostels
const Hostels = Loadable(lazy(()=>import('pages/hostels')));

// render - tenants
const Tenants = Loadable(lazy(()=>import('pages/tenants/TenantsPage')));

// render - utilities
// const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <Finance />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'addHostel',
      element: <HostelDashboard/>
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    },
    {
      path: 'hostels',
      element:<Hostels/>
    },
    {
      path: 'finance',
      element:<Finance/>
    },
    {
      path:'tenants',
      element:<Tenants/>
    }
  ]
};

export default MainRoutes;
