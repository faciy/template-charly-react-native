import { Platform, useColorScheme } from 'react-native';

export const app_colors = {
  dark: '#252525',
  greyLabel: '#898989',
  primary: '#FEB800',
  black: '#141414',
  red: '#FF5602',
  light: '#F0F0F0',
  white: '#FFFFFF',
  greyBtn: '#E7E7E7',
  green: '#008000',
};

// Hook pour obtenir les couleurs adaptatives selon le mode sombre/clair
export const useAdaptiveColors = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return {
    // Couleurs de fond
    background: isDark ? '#1C1C1E' : '#FFFFFF',
    surface: isDark ? '#2C2C2E' : '#F9FAFB',
    modalBackground: isDark ? '#2C2C2E' : '#FFFFFF',

    // Couleurs de texte
    text: isDark ? '#FFFFFF' : '#000000',
    textSecondary: isDark ? '#8E8E93' : '#8E8E8E',
    textTertiary: isDark ? '#C7C7CC' : '#C7C7CC',

    // Couleurs de bordure
    border: isDark ? '#38383A' : '#EDEDED',
    borderSecondary: isDark ? '#48484A' : '#E5E7EB',

    // Couleurs d'état
    placeholder: isDark ? '#8E8E93' : '#8E8E8E',
    disabled: isDark ? '#48484A' : '#D9E1E8',

    // Couleurs spécifiques pour les composants
    cardBackground: isDark ? '#2C2C2E' : '#F9FAFB',
    inputBackground: isDark ? '#2C2C2E' : '#FFFFFF',
    modalOverlay: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.5)',
  };
};

export const app_radius = {
  r1: 10,
  r2: 20,
  r3: 30,
  r4: 40,
  r5: 50,
  r6: 60,
  r7: 70,
  r8: 60,
  r9: 70,
  r10: 80,
  r11: 90,
  r12: 100,
};

export const app_font_size = {
  h1: 10,
  h2: 12,
  h3: 14,
  h4: 16,
  h5: 18,
  h6: 20,
  h7: 22,
  h8: 24,
  h9: 26,
  h10: 28,
  h11: 30,
  h12: 32,
  h13: 34,
  h14: 36,
  h15: 38,
  h16: 40,
  h17: 42,
  h18: 44,
  h19: 46,
  h20: 48,
  h21: 50,
};



// export const app_font_family = Platform.select({
//   ios: {
//     InterBlack: 'Inter 18pt Black',
//     InterBold: 'Inter 18pt Bold',
//     InterLight: 'Inter 18pt Light',
//     InterMedium: 'Inter 18pt Medium',
//     InterRegular: 'Inter 18pt Regular',
//     PoppinsBold: 'Poppins Bold',
//     PoppinsLight: 'Poppins Light',
//     PoppinsMedium: 'Poppins Medium',
//     PoppinsRegular: 'Poppins Regular',
//   },
//   android: {
//     InterBlack: 'Inter_18pt-Black',
//     InterBold: 'Inter_18pt-Bold',
//     InterLight: 'Inter_18pt-Light',
//     InterMedium: 'Inter_18pt-Medium',
//     InterRegular: 'Inter_18pt-Regular',
//     PoppinsBold: 'Poppins-Bold',
//     PoppinsLight: 'Poppins-Light',
//     PoppinsMedium: 'Poppins-Medium',
//     PoppinsRegular: 'Poppins-Regular',
//   },
// });

export const app_font_family = {
  PoppinsBlack: 'Poppins-Black',
  PoppinsBold: 'Poppins-Bold',
  PoppinsLight: 'Poppins-Light',
  PoppinsMedium: 'Poppins-Medium', 
  PoppinsRegular: 'Poppins-Regular',
  PoppinsThin: 'Poppins-Thin',
  UrbanistBlack: 'Urbanist-Black',
  UrbanistBold: 'Urbanist-Bold',
  UrbanistLight: 'Urbanist-Light',
  UrbanistMedium: 'Urbanist-Medium',
  UrbanistRegular: 'Urbanist-Regular',
  UrbanistThin: 'Urbanist-Thin',
};
