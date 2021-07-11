import {profileSelectors, profileSlice} from '@profile';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';
import {useAppDispatch, useAppSelector} from '@store';
import {Button, Screen, TextInput, View} from '@ui';
import React, {useState} from 'react';

const Component = () => {
  const currentProfile = useAppSelector(profileSelectors.profile);
  const {canGoBack, goBack} = useNavigation();
  const [playerId, setPlayerId] = useState<string>(currentProfile.playerId);
  const [playerName, setPlayerName] = useState<string>(
    currentProfile.playerName,
  );
  const dispatch = useAppDispatch();

  const onBack = () => {
    canGoBack() && goBack();
  };

  const onSave = () => {
    dispatch(profileSlice.actions.set({playerId, playerName}));
    onBack();
  };

  return (
    <Screen testID="ProfileScreen">
      <View flex={1} paddingHorizontal="m">
        <TextInput
          placeholder="Enter Player ID"
          onChangeText={setPlayerId}
          value={playerId}
        />

        <TextInput
          placeholder="Enter Player Name"
          onChangeText={setPlayerName}
          value={playerName}
        />
      </View>
      <View padding="m">
        <Button mode="contained" onPress={onSave}>
          Save
        </Button>
      </View>
    </Screen>
  );
};

const options: StackNavigationOptions = {
  headerShown: true,
  title: '',
  headerStyle: {
    shadowColor: 'transparent',
    elevation: 0,
  },
};

export const ProfileScreen = {Component, options};
