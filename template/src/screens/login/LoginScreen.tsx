import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { loginScreenStyles } from './LoginScreen.styles';

const LoginScreen = () => {
  return (
    <SafeAreaView style={loginScreenStyles.container}>
      <Text style={loginScreenStyles.title}>Login</Text>
    </SafeAreaView>
  );
}

export default LoginScreen;
