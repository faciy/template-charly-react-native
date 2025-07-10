import {MMKW_Storage } from '@/config/local.storage';

export const saveLocalStorage = async (key: any, data: string) => {
  try {
    await MMKW_Storage.set(key, data);
  } catch (error) {
    console.log('error Save Local', error);
    return null;
  }
};

export const getLocalStorage = (key: any) => {
  try {
    const infoData = MMKW_Storage.getString(key);
    return infoData != null ? JSON.parse(infoData) : null;
  } catch (error) {
    console.log('Erreur lors de la récupération des données', error);
    return null;
  }
};

export const clearStorage = async (key: any) => {
  try {
    await MMKW_Storage.delete(key);
    console.log('Données utilisateur supprimées avec succès');
  } catch (error) {
    console.log('Erreur lors de la suppression des données utilisateur');
  }
};
