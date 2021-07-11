import {getGameStatsByPlayerId} from '@api';
import {profileSelectors} from '@profile';
import {StackNavigationOptions} from '@react-navigation/stack';
import {useAppSelector} from '@store';
import {IconButton, Screen, Text, View} from '@ui';
import {format} from 'date-fns';
import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {ActivityIndicator, List} from 'react-native-paper';
import {useQuery} from 'react-query';
import {titleCase} from 'title-case';
import {useShowMore} from './use-show-more';

const Component = () => {
  const {playerId} = useAppSelector(profileSelectors.profile);
  const {isLoading, data, isError, isSuccess, isFetching, refetch} = useQuery(
    ['gameStats', {playerId}],
    async () => await getGameStatsByPlayerId(playerId),
    {retry: false},
  );
  const {limit, onShowMore} = useShowMore(30);

  console.log({isLoading, data, isError, isSuccess, isFetching, refetch});

  return (
    <Screen flex={1} testID="HomeScreen">
      {isError && (
        <View flex={1} justifyContent="center">
          <Text paddingHorizontal="xl" variant="subtitle" color="primary">
            Something Went Wrong
          </Text>
          <Text paddingHorizontal="xl" variant="paragraph">
            We are unable to fetch your information, perhaps you have entered
            the wrong Player ID?
          </Text>
        </View>
      )}
      {isLoading && (
        <View flex={1} justifyContent="center">
          <ActivityIndicator />
        </View>
      )}
      {isSuccess && (
        <FlatList
          ListHeaderComponent={
            <Text paddingHorizontal="m" variant="title" color="primary">
              Stats
            </Text>
          }
          data={data?.slice(0, limit)}
          renderItem={({item}) => (
            <List.Item
              title={`${titleCase(item.gameName)} - ${item.winners.join(', ')}`}
              description={`${format(
                item.startDate,
                'PPp',
              )} - ${item.players.join(', ')}`}
            />
          )}
          keyExtractor={item => item.id}
          onEndReached={onShowMore}
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={refetch} />
          }
        />
      )}
    </Screen>
  );
};

const options = ({navigation}: {navigation: any}): StackNavigationOptions => ({
  headerShown: true,
  title: '',
  headerStyle: {
    shadowColor: 'transparent',
    elevation: 0,
  },
  headerRight: () => (
    <IconButton
      icon="account-circle"
      onPress={() => navigation.navigate('Profile')}
    />
  ),
});

export const HomeScreen = {Component, options};
