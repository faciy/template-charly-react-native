import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { app_routes } from '../routes/routes';
import SplashScreen from '@/screens/splash/SplashScreen';
import LoginScreen from '@/screens/login/LoginScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={app_routes.splash}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={app_routes.splash}
        component={SplashScreen}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen name={app_routes.login} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
