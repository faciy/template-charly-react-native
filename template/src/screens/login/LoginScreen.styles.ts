import { app_colors, app_font_family, app_font_size } from '@/config/theme';
import { Dimensions, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');

export const loginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: hp(3),
  },
  title: {
    fontSize: app_font_size.h8,
    fontFamily: app_font_family.PoppinsBold
  },
  formContainer: {
    marginTop: hp(16),
  },
  formTitle: {
    fontSize: app_font_size.h8,
    fontFamily: app_font_family.PoppinsBold,
    textAlign: 'center',
  },
  formInputContainer: {
    marginTop: hp(10),
  },
  formButtonContainer: {
    marginTop: hp(10),
  },
});
