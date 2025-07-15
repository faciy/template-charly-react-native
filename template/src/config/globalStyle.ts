import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { app_font_family } from './theme';
import Colors from './Colors';

const paddingGlobal = 15;

export const GlobalStyle = StyleSheet.create({
  h1: {
    fontFamily: app_font_family.PoppinsBold,
    color: Colors.black,
    fontSize: normalize(16),
  },
  h4: {
    fontFamily: app_font_family.PoppinsBold,
    color: Colors.black,
    fontSize: normalize(12),
  },
  h2: {
    fontFamily: app_font_family.PoppinsMedium,
    color: Colors.black,
    fontSize: normalize(14),
  },
  h3: {
    fontFamily: app_font_family.PoppinsMedium,
    color: Colors.black,
    fontSize: normalize(12),
  },
  subtitle: {
    fontFamily: app_font_family.PoppinsRegular,
    color: Colors.black,
    fontSize: normalize(12),
  },
  serviceText: {
    fontFamily: app_font_family.PoppinsBold,
    color: Colors.black,
    fontSize: normalize(14),
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.blackRGB(0.2),
  },
  listCardContainer: {
    // flex: 1,
  },
  listCardDotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(12),
    justifyContent: 'center',
    paddingTop: normalize(12),
    paddingBottom: normalize(12),
  },
  listCardDot: {
    width: normalize(8),
    height: normalize(8),
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: normalize(10),
    borderColor: Colors.white,
  },
  backgroundImage: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  bottomContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  input: {
    backgroundColor: Colors.white,
    borderColor: Colors.gray,
    borderRadius: normalize(16),
    padding: normalize(10),
    fontSize: normalize(14),
    fontFamily: app_font_family.PoppinsRegular,
    color: Colors.black,
  },
  InputLabel: {
    fontFamily: app_font_family.PoppinsMedium,
    fontSize: normalize(12),
    color: Colors.gray,
  },
  InputErrorLabel: {
    ...this.InputLabel,
    color: Colors.danger,
    // marginLeft: normalize(10)
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  blockIcon: {
    height: normalize(38),
    width: normalize(38),
    borderRadius: normalize(12),
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  smalButton: {
    height: normalize(38),
    width: normalize(38),
    borderRadius: normalize(12),
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(12),
    paddingHorizontal: paddingGlobal,
  },
  headerStepWrapper: {
    width: normalize(44),
    height: normalize(44),
    borderRadius: normalize(44 / 2),
    borderColor: Colors.primary,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStepNumber: {
    fontFamily: app_font_family.PoppinsBold,
    fontSize: normalize(23),
    color: Colors.primary,
  },
  headerStepTitle: {
    fontFamily: app_font_family.PoppinsBold,
    fontSize: normalize(16),
    color: Colors.black,
  },
  headerStepSubTitle: {
    fontFamily: app_font_family.PoppinsRegular,
    fontSize: normalize(14),
    color: Colors.gray,
  },

  progressBarContainer: {
    backgroundColor: Colors.tertiary,
  },
  progressBarContent: {
    height: normalize(6),
    backgroundColor: Colors.primary,
    borderRadius: normalize(10),
  },

  headerBlockWrapper: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    gap: normalize(12),
    alignItems: 'center',
    padding: normalize(20),
    borderRadius: normalize(15),
    marginHorizontal: paddingGlobal,
  },
  headerBlockWrapperIcon: {
    width: normalize(45),
    height: normalize(45),
    backgroundColor: Colors.tertiary,
    borderRadius: normalize(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: normalize(10),
    paddingTop: 10,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingHorizontal: paddingGlobal,
    elevation: 5,
  },
  buttonContainerList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: normalize(10),
    paddingTop: 10,
    backgroundColor: Colors.white,
  },

  i18nWrapper: {
    padding: normalize(8),
    flexDirection: 'row',
    gap: normalize(4),
    borderRadius: normalize(4),
    alignItems: 'center',
  },
  shadow5: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  shadow4: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  codeFieldRoot: {
    justifyContent: 'center',
    gap: normalize(20),
  },
  cell: {
    width: 40,
    height: 40,
    fontFamily: app_font_family.PoppinsBold,
    fontSize: normalize(23),
    textAlign: 'center',
    color: Colors.black,
  },
  focusCell: {
    borderColor: '#000',
  },
  IverlayView: {
    backgroundColor: Colors.tertiary, // Couleur de fond blanche
    borderRadius: 20,
    marginHorizontal: paddingGlobal,
  },
});
