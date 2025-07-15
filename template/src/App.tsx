/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import Navigation from '@/navigations/Navigation';
import MyToast from '@/components/toast/MyToast';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './config/queryClient';

function App() {
  // const isDarkTheme = useColorScheme() === 'dark';
  return (
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Navigation />
      <MyToast />
    </Provider>
    </QueryClientProvider>
  );
}

export default App;
