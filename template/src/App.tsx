// template/App.tsx
import React, { JSX } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { app_colors, app_font_family } from './config/theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bienvenue dans !</Text>
      <Text style={styles.subtitle}>
        Votre projet est prêt à être développé{' '}
        <FontAwesome5 name="user" size={15} color={app_colors.primary} />
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: app_font_family.UrbanistThin,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
