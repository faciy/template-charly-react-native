export const app_routes = {
  splash: 'splash',
  login: 'login',
} as const;

export type RootStackParamList = {
  [app_routes.splash]: undefined;
  [app_routes.login]: undefined;
};
