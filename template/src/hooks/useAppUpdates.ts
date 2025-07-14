import { useState, useEffect, useCallback } from 'react';
import appUpdatesService, { UpdateInfo } from '@/services/appUpdates';

export const useAppUpdates = () => {
  const [updateInfo, setUpdateInfo] = useState<UpdateInfo>({ available: false });
  const [isChecking, setIsChecking] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const checkForUpdates = useCallback(async () => {
    setIsChecking(true);
    try {
      const result = await appUpdatesService.checkForUpdates();
      setUpdateInfo(result);
      
      if (result.available) {
        setShowUpdateModal(true);
      }
      
      return result;
    } catch (error) {
      console.error('Error checking for updates:', error);
      return { available: false };
    } finally {
      setIsChecking(false);
    }
  }, []);

  const startUpdate = useCallback(async () => {
    try {
      const success = await appUpdatesService.startUpdate();
      if (success) {
        setShowUpdateModal(false);
      }
      return success;
    } catch (error) {
      console.error('Error starting update:', error);
      return false;
    }
  }, []);

  const closeUpdateModal = useCallback(() => {
    setShowUpdateModal(false);
  }, []);

  // Vérifier automatiquement les mises à jour au montage du composant
  useEffect(() => {
    checkForUpdates();
  }, [checkForUpdates]);

  return {
    updateInfo,
    isChecking,
    showUpdateModal,
    checkForUpdates,
    startUpdate,
    closeUpdateModal,
    setShowUpdateModal,
  };
}; 