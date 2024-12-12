import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const mainNavTree = [
  {
    key: "main",
    path: `${APP_PREFIX_PATH}/main`,
    title: "sidenav.main",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "main-dashboard",
        path: `${APP_PREFIX_PATH}/main/dashboard`,
        title: "sidenav.main.dashboard",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-catalog",
        path: `${APP_PREFIX_PATH}/main/catalog`,
        title: "sidenav.main.catalog",
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "main-catalog-products",
            path: `${APP_PREFIX_PATH}/main/catalog/products`,
            title: "sidenav.main.catalog.products",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "main-catalog-categories",
            path: `${APP_PREFIX_PATH}/main/catalog/categories`,
            title: "sidenav.main.catalog.categories",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "main-catalog-collections",
            path: `${APP_PREFIX_PATH}/main/catalog/collections`,
            title: "sidenav.main.catalog.collections",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "main-catalog-combo",
            path: `${APP_PREFIX_PATH}/main/catalog/combo`,
            title: "sidenav.main.catalog.combo",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "main-orders",
        path: `${APP_PREFIX_PATH}/main/orders`,
        title: "sidenav.main.orders",
        icon: ShoppingOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "main-clients",
        path: `${APP_PREFIX_PATH}/main/clients`,
        title: "sidenav.main.clients",
        icon: UserOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "main-clients-list",
            path: `${APP_PREFIX_PATH}/main/clients/list`,
            title: "sidenav.main.clients.list",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "main-clients-groups",
            path: `${APP_PREFIX_PATH}/main/clients/groups`,
            title: "sidenav.main.clients.groups",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "main-banners",
        path: `${APP_PREFIX_PATH}/main/banners`,
        title: "sidenav.main.banners",
        icon: PictureOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "main-promocodes",
        path: `${APP_PREFIX_PATH}/main/promocodes`,
        title: "sidenav.main.promocodes",
        icon: GiftOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "main-offlinePoints",
        path: `${APP_PREFIX_PATH}/main/offlinePoints`,
        title: "sidenav.main.offlinePoints",
        icon: ShopOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "main-offlinePoints-addresses",
            path: `${APP_PREFIX_PATH}/main/offlinePoints/addresses`,
            title: "sidenav.main.offlinePoints.addresses",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "main-offlinePoints-geozones",
            path: `${APP_PREFIX_PATH}/main/offlinePoints/geozones`,
            title: "sidenav.main.offlinePoints.geozones",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "main-employees",
        path: `${APP_PREFIX_PATH}/main/employees`,
        title: "sidenav.main.employees",
        icon: UsergroupAddOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "main-mailings",
        path: `${APP_PREFIX_PATH}/main/mailings`,
        title: "sidenav.main.mailings",
        icon: MailOutlined,
        breadcrumb: true,
        submenu: [],
      },
    ],
  },
];

const systemNavTree = [
  {
    key: "system",
    path: `${APP_PREFIX_PATH}/main`,
    title: "sidenav.system",
    icon: SettingOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "system-settings",
        path: `${APP_PREFIX_PATH}/system/settings`,
        title: "sidenav.system.settings",
        icon: SettingOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "system-mobileApp",
        path: `${APP_PREFIX_PATH}/system/mobileApp`,
        title: "sidenav.system.mobileApp",
        icon: MobileOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "system-logs",
        path: `${APP_PREFIX_PATH}/system/logs`,
        title: "sidenav.system.logs",
        icon: FileTextOutlined,
        breadcrumb: true,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...mainNavTree, ...systemNavTree];

export default navigationConfig;