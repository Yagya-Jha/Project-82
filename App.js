import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './Navigators/DrawerNavigator';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import BottomTabNavigator from './Navigators/TabNavigator';

export default function App() {
    return (
      <NavigationContainer>
      <DrawerNavigator />
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
