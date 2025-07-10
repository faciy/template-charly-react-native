
import {Dimensions, Platform, StatusBar} from 'react-native';

export const device_properties = {
  screenHeight:
    Dimensions.get('window').height + (StatusBar.currentHeight || 0),
  screenWidth: Dimensions.get('window').width,
  statusBarHeight: Platform.OS === 'ios' ? 60 : StatusBar.currentHeight,
  platform: Platform.OS,
  responsiveValue: (mobile: any, tablette: any): any => {
    if (
      Dimensions.get('window').width > 0 &&
      Dimensions.get('window').width < 500
    ) {
      return mobile;
    } else if (
      Dimensions.get('window').width > 500 &&
      Dimensions.get('window').width < 1000
    ) {
      return tablette;
    } else {
      return null;
    }
  },
  platformValue: (ios: any, android: any) => {
    return Platform.OS === 'ios' ? ios : android;
  },
};
