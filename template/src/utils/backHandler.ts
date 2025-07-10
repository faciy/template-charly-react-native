import { clearStorage } from '@/services/storage';
import { MMKV_Keys } from '@/config/local.storage';
import { app_routes } from '@/routes/routes';
import { Alert, BackHandler, Platform } from 'react-native';

const handleFocusEffect = (navigation: any, currentRoute: any) => {
  // Flag pour éviter les conflits de navigation
  let isNavigationInProgress = false;

  const showExitAlert = () => {
    const alertTitle = 'Retour DOCK PASS';
    const alertMessage = 'Voulez-vous retourner au premier écran ?';

    Alert.alert(alertTitle, alertMessage, [
      {
        text: 'NON',
        onPress: () => {
          console.log('Cancel Pressed');
          isNavigationInProgress = false;
        },
        style: 'cancel',
      },
      {
        text: 'OUI',
        onPress: () => {
          isNavigationInProgress = true;

          setTimeout(() => {
            // navigation.reset({
            //   index: 0,
            //   routes: [{ name: app_routes.first_screen }],
            // });
          }, 100);
        },
      },
    ]);
  };

  // Définir les écrans où on veut intercepter le retour
  const screensThatShouldShowExitAlert = [
    app_routes.login, // écran principal
    app_routes.splash, // premier écran
    // Ajoutez d'autres écrans selon vos besoins
  ];

  const shouldInterceptBack =
    screensThatShouldShowExitAlert.includes(currentRoute);

  if (Platform.OS === 'android') {
    // Android : utilise le bouton back physique
    const backAction = () => {
      if (shouldInterceptBack && !isNavigationInProgress) {
        console.log('Back button pressed on Android - showing exit alert');
        showExitAlert();
        return true; // Empêche le comportement par défaut
      }
      return false; // Laisse le comportement par défaut pour les autres écrans
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => {
      backHandler.remove();
    };
  } else if (Platform.OS === 'ios' && shouldInterceptBack) {
    // iOS : intercepter la navigation avec beforeRemove
    const unsubscribe = navigation.addListener('beforeRemove', (e: any) => {
      // Si navigation déjà en cours, laisser passer
      if (isNavigationInProgress) {
        return;
      }

      // Empêcher l'action par défaut
      e.preventDefault();

      // Afficher l'alerte
      showExitAlert();
    });

    return unsubscribe;
  }

  // Pas d'interception nécessaire
  return () => {};
};

export default handleFocusEffect;
