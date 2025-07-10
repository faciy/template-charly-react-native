export const app_routes = {
  splash: 'splash',
  login: 'login',
  home: 'home',
  settings: 'settings',
} as const;

export type RootStackParamList = {
  [app_routes.splash]: undefined;
  [app_routes.login]: undefined;
  [app_routes.home]: undefined;
  [app_routes.settings]: undefined;
};
