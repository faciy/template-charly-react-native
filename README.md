# React Native Template MonTemplate

## Installation

`bash ou Zsh`
npx react-native-template-charlytemplate MonProjet

Utilisation de plusieurs packages

Pour les formualaires

- Utilisation dde React Hook form
- Utlisation de Yup pour la validation des formulaires

Pour le management
-Utilisation de Redux & Redux Toolkit

Splash Screen
-Initialisation d'un composant splash screen par défaut avec possibilité de changer l'image

Pour le stockage local
-Utilisation de react-native-mmkv

Pour le Toast
-Création d'un composant pour le Toast
Exemple d'utilisation :
Toast.show({
type: 'success',
text1: 'Connexion Smart',
text2: response?.message,
visibilityTime:4000
});

Pour le Ping (Vérification de la connexion internet)
-Utilisation ping_connection

Pour l'affichage du modal de mise a jour côté App store et Play store
-Utilisation d'un package "sp-react-native-in-app-updates" et configuration de hooks et services

Pour la navigation
-Utilisation de react navigations
* Les Satcks et les Bottom Navigation

Pour les reponsivites des ecrans
-Utiliser dd'un fichier device.proprieties dans configs

Pour la responsivite des polices et autres
-Utilisation du package react-native-responsive-screen

Pour la gestion du cache 
-Utilisation de tanstack/react-query