import images from '@/utils/images';
import React, { useEffect, useRef } from 'react';
import { Animated, Image, View } from 'react-native';
import { splashScreenStyles } from './SplashScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { app_routes } from '@/routes/routes';

const SplashScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    let isMounted = true;
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
    const timer = setTimeout(() => {
      if (isMounted) {
        navigation.reset({
          index: 0,
          routes: [{ name: app_routes.login as never }],
        });
      }
    }, 200);
    return () => {
      isMounted = false;
      clearTimeout(timer);
      fadeAnim.stopAnimation && fadeAnim.stopAnimation();
      scaleAnim.stopAnimation && scaleAnim.stopAnimation();
    };
  }, [navigation]);

  return (
      <View style={splashScreenStyles.container}>
        <Image
          source={images.wave}
          style={splashScreenStyles.logo}
          resizeMode="contain"
        />
      </View>
  );
};

export default SplashScreen;
