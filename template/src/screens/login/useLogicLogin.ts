import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TLogin } from '@/types/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { app_routes, RootStackParamList } from '@/routes/routes';
import Toast from 'react-native-toast-message';
import { store } from '@/store/store';
import { setConnected } from '@/store/store/slices/user/user.slice';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

/**
 * Hook personnalisé pour gérer la logique de connexion
 */
const useLogicLogin = () => {
  const navigation = useNavigation<NavigationProp>();
  // Schéma de validation avec Yup
  const loginSchema = yup.object({
    login: yup.string().required('Entrez votre email/numéro de téléphone'),
    password: yup.string().required('Entrez votre mot de passe'),
  });

  // Configuration de React Hook Form
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    reset,
    getValues,
  } = useForm<TLogin>({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
    mode: 'onChange', // Validation à chaque changement
  });

  // Fonction pour effectuer la connexion
  const loginUser = async (dataSend: TLogin) => {
    try {
      const dataSendFormat = {
        username: dataSend.login,
        password: dataSend.password,
      };
      
      console.log('Données de connexion:', dataSendFormat);
    } catch (error) {
      console.error('Erreur lors de la connexion1:', error);
      throw error;
    }
  };

  // Fonction de soumission du formulaire
  const onSubmit = async (data: TLogin) => {
    console.log('Données de connexion:', data);
    store.dispatch(setConnected(true));
  };

  // Surveillance des valeurs du formulaire
  const loginValue = watch('login');
  const passwordValue = watch('password');

  return {
    // État du formulaire
    control,
    errors,
    isValid,

    // Valeurs actuelles
    loginValue,
    passwordValue,
    getValues,

    // Fonctions de manipulation
    setValue,
    reset,

    // Fonctions de soumission
    handleSubmit,
    onSubmit,
    loginUser,
  };
};

export default useLogicLogin;
