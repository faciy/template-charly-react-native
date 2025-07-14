module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
          '@/components': './src/components',
          '@/config': './src/config',
          '@/hooks': './src/hooks',
          '@/screens': './src/screens',
          '@/store': './src/store',
          '@/utils': './src/utils',
          '@/types': './src/types',
          '@/assets': './src/assets',
          '@/services': './src/services',
          '@/navigation': './src/navigation',
          '@/routes': './src/routes',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
