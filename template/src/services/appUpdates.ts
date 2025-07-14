import InAppUpdates from 'sp-react-native-in-app-updates';
import { Platform } from 'react-native';
import { APP_UPDATES_CONFIG, getUpdateType } from '@/config/appUpdates.config';

export interface UpdateInfo {
  available: boolean;
  version?: string;
  currentVersion?: string;
}

class AppUpdatesService {
  private static instance: AppUpdatesService;
  private inAppUpdates: InAppUpdates;

  private constructor() {
    this.inAppUpdates = new InAppUpdates(false); // false = ne pas forcer la mise à jour automatiquement
  }

  public static getInstance(): AppUpdatesService {
    if (!AppUpdatesService.instance) {
      AppUpdatesService.instance = new AppUpdatesService();
    }
    return AppUpdatesService.instance;
  }

  /**
   * Vérifie s'il y a une mise à jour disponible
   */
  public async checkForUpdates(): Promise<UpdateInfo> {
    try {
      const result = await this.inAppUpdates.checkNeedsUpdate();
      
      console.log('App update check result:', result);
      
      return {
        available: result.shouldUpdate,
        version: result.storeVersion,
      };
    } catch (error) {
      console.error('Error checking for app updates:', error);
      return {
        available: false,
      };
    }
  }

  /**
   * Démarre la mise à jour
   */
  public async startUpdate(): Promise<boolean> {
    try {
      const result = await this.inAppUpdates.startUpdate({
        updateType: getUpdateType(),
      });
      console.log('App update started:', result);
      return true;
    } catch (error) {
      console.error('Error starting app update:', error);
      return false;
    }
  }

  /**
   * Vérifie et propose la mise à jour si disponible
   */
  public async checkAndProposeUpdate(): Promise<UpdateInfo> {
    const updateInfo = await this.checkForUpdates();
    
    if (updateInfo.available) {
      // On retourne l'info pour afficher une modal de confirmation
      console.log('Update available:', updateInfo);
    }
    
    return updateInfo;
  }
}

export default AppUpdatesService.getInstance(); 