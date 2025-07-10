import { app_colors, app_font_size, app_font_family } from '@/config/theme';
import {StyleSheet} from 'react-native';

export const myButtonStyles = StyleSheet.create({
  containBtn: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:100,
    flexDirection:'row',
  },
  texteBouton: {
    color: app_colors.light,
    fontSize:16,
    fontFamily:app_font_family.PoppinsBold,
  },
 
});
