import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
  tabsLayout?: boolean;
  apiBasePath?: string;
} = {
  navTheme: 'light',
  headerTheme: 'light',
  primaryColor: '#65ac1e',
  layout: 'side',
  splitMenus: false,
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Ant Design Pro',
  menu:{
    locale:false
  },
  pwa: false,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
  tabsLayout: true,
  apiBasePath: '/api',
};

export default Settings;



{
  // "navTheme": "light",
  // "headerTheme": "light",
  // "primaryColor": "#25ba83",
  // "layout": "side",
  // "splitMenus": false,
  // "contentWidth": "Fluid",
  // "fixedHeader": true,
  // "fixSiderbar": true,
  // "pwa": false,
  // "logo": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  // "tabsLayout": true,
  // "apiBasePath": "/api",
  // "headerHeight": 48
}
