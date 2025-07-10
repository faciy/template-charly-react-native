import { Platform, PermissionsAndroid, Alert, Linking } from 'react-native';

export const requestCameraPermission = async (): Promise<boolean> => {
  if (Platform.OS !== 'android') {
    return true; // Sur iOS, les permissions sont gérées automatiquement
  }

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Permission Caméra',
        message: 'Cette application a besoin d\'accéder à votre caméra pour prendre des photos de documents.',
        buttonNeutral: 'Activer',
        buttonNegative: 'Annuler',
        buttonPositive: 'OK',
      }
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Permission caméra accordée');
      return true;
    } else {
      console.log('Permission caméra refusée');
      return false;
    }
  } catch (err) {
    console.warn('Erreur lors de la demande de permission caméra:', err);
    return false;
  }
};

export const showPermissionAlert = (onSettingsPress: () => void) => {
  Alert.alert(
    'Permission Caméra Requise',
    'Pour utiliser toutes les fonctionnalités de l\'application, vous devez autoriser l\'accès à la caméra dans les paramètres.',
    [
      {
        text: 'Annuler',
        style: 'cancel',
      },
      {
        text: 'Paramètres',
        onPress: onSettingsPress,
      },
    ]
  );
};

export const openSettings = () => {
  Linking.openSettings();
};

// Fonction pour vérifier si la permission est déjà accordée
export const checkCameraPermission = async (): Promise<boolean> => {
  if (Platform.OS !== 'android') {
    return true;
  }

  try {
    const result = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
    return result;
  } catch (err) {
    console.warn('Erreur lors de la vérification de la permission caméra:', err);
    return false;
  }
}; 