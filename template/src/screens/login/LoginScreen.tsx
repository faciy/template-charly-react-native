import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
  Animated,
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
  const [isInputFocused, setIsInputFocused] = useState(false);
  const formAnimatedValue = useRef(new Animated.Value(0)).current;

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

  // Fonction pour gérer le focus sur n'importe quel input
  const handleInputFocus = () => {
    setIsInputFocused(true);
    // Animation pour faire monter tout le formulaire
    // Augmenté la valeur pour compenser l'espace des erreurs
    Animated.timing(formAnimatedValue, {
      toValue: Platform.OS === 'ios' ? -hp(25) : -hp(23), // Valeur augmentée pour prendre en compte les erreurs
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Fonction pour gérer la perte de focus
  const handleInputBlur = () => {
    setIsInputFocused(false);
    // Animation pour remettre le formulaire à sa position initiale
    Animated.timing(formAnimatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={loginScreenStyles.container}>
      <Text style={loginScreenStyles.title}>Retour</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Animated.View
          style={[
            loginScreenStyles.formContainer,
            {
              transform: [{ translateY: formAnimatedValue }],
            },
          ]}
        >
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
                  keyboardType="email-address"
                  errorMessage={errors.login?.message}
                  onBlur={e => {
                    onBlur(e);
                    handleInputBlur();
                  }}
                  onFocus={handleInputFocus}
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
                  onBlur={e => {
                    onBlur(e);
                    handleInputBlur();
                  }}
                  onFocus={handleInputFocus}
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

            {/* Conteneur du bouton avec position absolue quand focused */}
            <View style={loginScreenStyles.formButtonContainer}>
              <MyButton text="Connexion" onPress={handleSubmit(onSubmit)} />
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
