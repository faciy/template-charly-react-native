import { Platform } from 'react-native';

export const APP_UPDATES_CONFIG = {
  // Configuration pour les mises à jour automatiques
  checkOnAppStart: true, // Vérifier les mises à jour au démarrage de l'app
  checkOnAppForeground: true, // Vérifier les mises à jour quand l'app revient au premier plan
  checkInterval: 24 * 60 * 60 * 1000, // Vérifier toutes les 24 heures (en millisecondes)
  
  // Configuration pour les types de mises à jour
  updateTypes: {
    ios: 0, // 0 = flexible update (téléchargement en arrière-plan)
    android: 1, // 1 = immediate update (mise à jour immédiate)
  },
  
  // Configuration pour les priorités de mise à jour
  priorities: {
    critical: 1, // Mise à jour critique - forcer la mise à jour
    recommended: 2, // Mise à jour recommandée - afficher une modal
    optional: 3, // Mise à jour optionnelle - afficher une notification discrète
  },
  
  // Messages personnalisés
  messages: {
    title: 'Mise à jour disponible',
    description: 'Une nouvelle version de l\'application est disponible.',
    updateButton: 'Mettre à jour',
    laterButton: 'Plus tard',
    criticalMessage: 'Cette mise à jour est obligatoire pour continuer à utiliser l\'application.',
    recommendedMessage: 'Nous vous recommandons de mettre à jour l\'application pour bénéficier des dernières améliorations.',
    optionalMessage: 'Une nouvelle version est disponible avec des améliorations.',
  },
  
  // Configuration pour les tests
  testing: {
    forceUpdate: false, // Forcer l'affichage de la modal de mise à jour (pour les tests)
    mockUpdateAvailable: false, // Simuler une mise à jour disponible (pour les tests)
  },
};

export const getUpdateType = () => {
  return Platform.OS === 'ios' 
    ? APP_UPDATES_CONFIG.updateTypes.ios 
    : APP_UPDATES_CONFIG.updateTypes.android;
};

export const getUpdateMessage = (priority?: number) => {
  switch (priority) {
    case APP_UPDATES_CONFIG.priorities.critical:
      return APP_UPDATES_CONFIG.messages.criticalMessage;
    case APP_UPDATES_CONFIG.priorities.recommended:
      return APP_UPDATES_CONFIG.messages.recommendedMessage;
    case APP_UPDATES_CONFIG.priorities.optional:
      return APP_UPDATES_CONFIG.messages.optionalMessage;
    default:
      return APP_UPDATES_CONFIG.messages.recommendedMessage;
  }
}; 