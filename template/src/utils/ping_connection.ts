import NetInfo from '@react-native-community/netinfo';

const checkNetwork = async (): Promise<boolean> => {
  try {
    const state = await NetInfo.fetch();
    
    if (state.isConnected && state.isInternetReachable) {
      console.log('Réseau connecté et Internet accessible');
      return true;
    } else {
      console.log('Pas de connexion réseau ou Internet non accessible');
      return false;
    }
  } catch (error: any) {
    console.log(`Erreur de vérification réseau: ${error.message}`);
    return false;
  }
};

export default checkNetwork;
