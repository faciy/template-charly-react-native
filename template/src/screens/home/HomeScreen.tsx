import React from 'react';
import { View, Text } from 'react-native';
import { homeScreenStyles } from './HomeScreen.styles';

const HomeScreen = () => {
  return (
    <View style={homeScreenStyles.container}>
      <Text style={homeScreenStyles.title}> HomeScreen </Text>
    </View>
  );
};

export default HomeScreen;
