import { app_font_family, app_font_size } from '@/config/theme';
import {StyleSheet } from 'react-native';


export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: app_font_size.h8,
    fontFamily: app_font_family.PoppinsBold,
  },
 
});
