// assets
import { DashboardOutlined, HomeOutlined, UserOutlined, RiseOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  HomeOutlined,
  UserOutlined,
  RiseOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'hostels',
      title: 'Hostels',
      type: 'item',
      url: '/hostels',
      icon: icons.HomeOutlined,
      breadcrumbs: false
    },
    {
      id: 'tenants',
      title: 'Tenants',
      type: 'item',
      url: '/tenants',
      icon: icons.UserOutlined,
      breadcrumbs: false
    },
    {
      id: 'finance',
      title: 'Finance',
      type: 'item',
      url: '/finance',
      icon: icons.RiseOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
