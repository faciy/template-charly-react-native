import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { loginScreenStyles } from './LoginScreen.styles';
import InputBase from '@/components/inputs/input-base/InputBase';
import useLogicLogin from './useLogicLogin';
import { useRef, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { app_colors } from '@/config/theme';
import MyButton from '@/components/buttons/my-button/MyButton';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Controller } from 'react-hook-form';

const LoginScreen = () => {
  const passwordInputRef = useRef<TextInput>(null);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Utilisation du hook personnalisé
  const {
    control,
    errors,
    isValid,
    loginValue,
    passwordValue,
    setValue,
    handleSubmit,
    onSubmit,
  } = useLogicLogin();

  return (
    <SafeAreaView style={loginScreenStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <Text style={loginScreenStyles.title}>Retour</Text>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={loginScreenStyles.formContainer}>
            <Text style={loginScreenStyles.formTitle}>Connexion</Text>
            <View style={loginScreenStyles.formInputContainer}>
              <Controller
                control={control}
                name="login"
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputBase
                    label="Email/Numéro de téléphone"
                    placeholder="Saisissez votre email/numéro de téléphone"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    keyboardType="email-address"
                    errorMessage={errors.login?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputBase
                    label="Mot de passe"
                    ref={passwordInputRef}
                    placeholder="Mot de passe"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    isPassword={true}
                    showPassword={showPassword}
                    togglePasswordVisibility={togglePasswordVisibility}
                    rightIcon={
                      <Feather
                        name={showPassword ? 'eye' : 'eye-off'}
                        size={16}
                        color={app_colors.black}
                      />
                    }
                    errorMessage={errors.password?.message}
                  />
                )}
              />
              <View style={loginScreenStyles.formButtonContainer}>
                <MyButton text="Connexion" onPress={handleSubmit(onSubmit)} />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
