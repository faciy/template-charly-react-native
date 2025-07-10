import {app_colors, app_font_family} from '@/config/theme';
import {StyleSheet} from 'react-native';

const ligthButtonStyles = StyleSheet.create({
  bottomTextContainer: {
    width: '100%',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 18,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    color: app_colors.black,
    fontFamily: app_font_family.PoppinsRegular,
    fontSize: 16,
  },
  signupText: {
    color: app_colors.primary,
    fontFamily: app_font_family.PoppinsBold,
    fontSize: 16,
  },
});

export default ligthButtonStyles;
