import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigation from '~/navigations/AppNavigation';
import {persistor, store} from '~/stores';
import '~/translations';
import {NativeBaseProvider} from 'native-base';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <BottomSheetModalProvider>
            <NativeBaseProvider>
              <AppNavigation />
            </NativeBaseProvider>
          </BottomSheetModalProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
