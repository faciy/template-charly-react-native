import React from 'react';
import { View, Text } from 'react-native';
import { settingsScreenStyles } from './SettingsScreen.styles';

const SettingsScreen = () => {
  return (
    <View style={settingsScreenStyles.container}>
      <Text style={settingsScreenStyles.title}>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;
