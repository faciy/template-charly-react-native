import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { UpdateInfo } from '@/services/appUpdates';
import appUpdatesService from '@/services/appUpdates';
import { app_font_family } from '@/config/theme';

interface UpdateModalProps {
  visible: boolean;
  updateInfo: UpdateInfo;
  onClose: () => void;
  onUpdate: () => void;
}

const { width, height } = Dimensions.get('window');

const UpdateModal: React.FC<UpdateModalProps> = ({
  visible,
  updateInfo,
  onClose,
  onUpdate,
}) => {
  const handleUpdate = async () => {
    try {
      await appUpdatesService.startUpdate();
      onUpdate();
    } catch (error) {
      console.error('Error starting update:', error);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.content}>
            <Text style={styles.title}>Mise à jour disponible</Text>
            
            <Text style={styles.description}>
              Une nouvelle version de l'application est disponible.
            </Text>
            
            {updateInfo.version && (
              <Text style={styles.version}>
                Version {updateInfo.version}
              </Text>
            )}
            
            <Text style={styles.message}>
              Nous vous recommandons de mettre à jour l'application pour bénéficier des dernières améliorations et corrections.
            </Text>
          </View>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.cancelButtonText}>Plus tard</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.button, styles.updateButton]}
              onPress={handleUpdate}
            >
              <Text style={styles.updateButtonText}>Mettre à jour</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    margin: 20,
    width: width - 50,
    maxWidth: 400,
  },
  content: {
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: app_font_family.PoppinsBold
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 12,
    fontFamily: app_font_family.PoppinsRegular
  },
  version: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 16,
    fontStyle: 'italic',
  },
  message: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    fontFamily: app_font_family.PoppinsRegular
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  updateButton: {
    backgroundColor: '#007AFF',
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
    fontFamily: app_font_family.PoppinsRegular
  },
  updateButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: app_font_family.PoppinsBold
  },
});

export default UpdateModal; 