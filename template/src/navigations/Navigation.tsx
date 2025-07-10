import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './StackNavigation';

const Navigation = () => {
  return (
    <>
      {/* {!modalErrBadResponse ? ( */}
      <NavigationContainer>
        {/* <StatusBar animated={true} backgroundColor={app_colors.primary} /> */}
        <StackNavigation />
      </NavigationContainer>
      {/* // ) : (
      //   <BadResponseScreen />
      // )} */}
    </>
  );
};

export default Navigation;
