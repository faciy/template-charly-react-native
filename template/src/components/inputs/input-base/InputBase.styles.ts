import { StyleSheet } from 'react-native';
import { app_colors, app_font_family } from '@/config/theme';

const inputBaseStyles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: app_colors.light,
    borderRadius: 15,
    backgroundColor: app_colors.white,
    paddingHorizontal: 12,
    height: 55,
  },
  inputError: {
    borderColor: app_colors.red || 'red',
  },
  input: {
    flex: 1,
    height: '100%',
    color: app_colors.black,
    fontSize: 14,
  },
  inputWithLeftIcon: {
    paddingLeft: 8,
  },
  inputWithRightIcon: {
    paddingRight: 8,
  },
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 4,
    padding: 4,
  },
  errorText: {
    color: app_colors.red || 'red',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
    fontFamily: app_font_family.UrbanistLight,
  },
  hintText: {
    color: app_colors.greyLabel,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  labelText: {
    fontSize: 14,
    fontFamily: app_font_family.UrbanistMedium,
    color: app_colors.black,
    marginBottom: 8,
    marginLeft: 2,
  },
});

export default inputBaseStyles;
