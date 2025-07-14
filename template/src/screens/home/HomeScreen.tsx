import { View, Text } from 'react-native';
import { homeScreenStyles } from './HomeScreen.styles';
import { useAppUpdates } from '@/hooks/useAppUpdates';
import UpdateModal from '@/components/modals/update-modal/UpdateModal';

const HomeScreen = () => {

    // Hook pour les mises à jour
    const { updateInfo, showUpdateModal, closeUpdateModal, startUpdate } =
    useAppUpdates();


  return (
    <View style={homeScreenStyles.container}>
      <Text style={homeScreenStyles.title}> HomeScreen </Text>

      <UpdateModal
        visible={true}
        updateInfo={updateInfo}
        onClose={closeUpdateModal}
        onUpdate={startUpdate}
      />
    </View>
  );
};

export default HomeScreen;
