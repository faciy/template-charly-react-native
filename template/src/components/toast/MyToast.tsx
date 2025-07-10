import {app_colors, app_font_size, app_font_family} from '@/config/theme';
import {View, Text, StyleSheet, Image} from 'react-native';
import Toast, {
  ToastConfig,
} from 'react-native-toast-message';
import {device_properties} from '@/config/device.properties';
import Icon from 'react-native-vector-icons/FontAwesome6';
import images from '@/utils/images';

const logoImg = {
  logo: images.wave,
};

const toastConfig: ToastConfig = {
  success: ({text1, text2}) => (
    <View style={styles.container}>
      <Image
        style={{
          ...styles.img,
          aspectRatio:
            Image.resolveAssetSource(logoImg.logo).width /
            Image.resolveAssetSource(logoImg.logo).height,
        }}
        source={logoImg.logo}
      />
      <View style={{width:'75%'}}>
        <Text style={styles.texte1}>{text1}</Text>
        <Text numberOfLines={1} style={styles.texte2}>{text2}</Text>
      </View>
      <View style={styles.icon}>
        <Icon name="check" color={app_colors.white} size={15} />
      </View>
    </View>
  ),

  error: ({text1, text2}) => (
    <View style={styles.container}>
      <Image
        style={{
          ...styles.img,
          aspectRatio:
            Image.resolveAssetSource(logoImg.logo).width /
            Image.resolveAssetSource(logoImg.logo).height,
        }}
        source={logoImg.logo}
      />
      <View style={{}}>
        <Text style={styles.texte1}>{text1}</Text>
        <Text numberOfLines={1} style={styles.texte2}>{text2}</Text>
      </View>
      <View style={[styles.icon, {backgroundColor: app_colors.red}]}>
        <Icon name="xmark" color={app_colors.white} size={15} />
      </View>
    </View>
  ),
};

const MyToast = () => {
  return <Toast config={toastConfig} />;
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 70,
    width: device_properties.screenWidth - 40,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: app_colors.white,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  img: {
    width: 50,
    height: 50,
  },
  texte1: {
    color: app_colors.black,
    fontFamily: app_font_family.UrbanistMedium,
    fontSize: app_font_size.h3,
  },
  texte2: {
    color: app_colors.black,
    fontFamily: app_font_family.UrbanistMedium,
    fontSize: app_font_size.h4,
  },
  icon: {
    backgroundColor: app_colors.green,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
});

export default MyToast;