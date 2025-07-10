/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import Navigation from '@/navigations/Navigation';

function App() {
  // const isDarkTheme = useColorScheme() === 'dark';
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Navigation />
    </>
  );
}

export default App;
