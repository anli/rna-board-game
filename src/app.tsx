import {RootNavigator} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

export const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};
