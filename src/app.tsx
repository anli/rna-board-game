import {RootNavigator} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {store} from '@store';
import {theme} from '@themes';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider as ReduxProvider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

const queryClient = new QueryClient();

export const App = () => {
  const persistor = persistStore(store);

  console.log('1.0');

  return (
    <ThemeProvider theme={theme}>
      <PaperProvider>
        <QueryClientProvider client={queryClient}>
          <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <NavigationContainer>
                <RootNavigator />
              </NavigationContainer>
            </PersistGate>
          </ReduxProvider>
        </QueryClientProvider>
      </PaperProvider>
    </ThemeProvider>
  );
};
