import Ping from 'react-native-ping';

const checkNetwork = async (): Promise<boolean> => {
  try {
    const ms = await Ping.start('8.8.8.8', {timeout: 1000}); // Ping Google
    console.log(`Ping réussi: ${ms}ms`);
    return true;
  } catch (error: any) {
    console.log(`Erreur de connexion: ${error.code}, ${error.message}`);
    return false;
  }
};

export default checkNetwork;