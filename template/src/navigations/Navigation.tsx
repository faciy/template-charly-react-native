import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import BottomNavigation from './BottomNavigation';
import { useSelector } from 'react-redux';
import { selectConnected } from '@/store/store/slices/user/user.slice';

const Navigation = () => {
  const connected = useSelector(selectConnected);
  return (
    <>
      {/* {!modalErrBadResponse ? ( */}
      <NavigationContainer>
        {/* <StatusBar animated={true} backgroundColor={app_colors.primary} /> */}
        {connected ? <BottomNavigation /> : <StackNavigation />}
      </NavigationContainer>
      {/* // ) : (
      //   <BadResponseScreen />
      // )} */}
    </>
  );
};

export default Navigation;
