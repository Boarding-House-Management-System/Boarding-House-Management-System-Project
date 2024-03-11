// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  //FontSizeOutlined,
  HomeOutlined,
  LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
  //FontSizeOutlined,
  HomeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Hostels',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Hostel Overview',
      type: 'item',
      url: '/typography',
      icon: icons.HomeOutlined
    },
    {
      id: 'util-color',
      title: 'Hostel Adding',
      type: 'item',
      url: '/color',
      icon: icons.AppstoreAddOutlined
    },
    {
      id: 'util-shadow',
      title: 'Shadow',
      type: 'item',
      url: '/shadow',
      icon: icons.BarcodeOutlined
    },
    {
      id: 'ant-icons',
      title: 'Ant Icons',
      type: 'item',
      url: '/icons/ant',
      icon: icons.AntDesignOutlined,
      breadcrumbs: false
    }
  ]
};

export default utilities;
