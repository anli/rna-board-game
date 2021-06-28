import {StackNavigationOptions} from '@react-navigation/stack';
import {Screen, Text, View} from '@ui';
import React from 'react';

const Component = () => {
  return (
    <Screen testID="HomeScreen">
      <View padding="s" paddingBottom="none">
        <Text variant="title">App</Text>
        <Text variant="title">Title</Text>
        <Text variant="subtitle">Subtitle</Text>
        <Text variant="paragraph">Paragraph</Text>
      </View>
    </Screen>
  );
};

const options: StackNavigationOptions = {
  headerShown: false,
};

export const HomeScreen = {Component, options};
