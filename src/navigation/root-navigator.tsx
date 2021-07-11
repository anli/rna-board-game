import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, ProfileScreen} from '@screens';
import React from 'react';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  console.log('2.0');
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen.Component}
        options={HomeScreen.options}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen.Component}
        options={ProfileScreen.options}
      />
    </Stack.Navigator>
  );
};
