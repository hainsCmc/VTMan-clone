import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';
import {Loading} from '~/components';
import {
  ANIMATED_FLATLIST_SCREEN,
  DEMO_SCREEN,
  LOGIN_SCREEN,
  ROOT_HOME_SCREEN,
} from '~/constants/ScreenName';
import {useAppSelector} from '~/hooks/useAppSelector';
import {AnimatedFlatlistScreen, DemoScreen, LoginScreen, RootHomeScreen} from '~/screens';
import {navigationRef} from '~/services/navigationServices';
import i18n from '~/translations';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const {isLoading} = useAppSelector((state) => state.loading);
  const {language} = useAppSelector((state) => state.session);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        setTimeout(() => {
          SplashScreen.hide();
        }, 1000);
      }}
    >
      <Stack.Navigator
        initialRouteName={DEMO_SCREEN}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          animation: 'fade_from_bottom',
          statusBarColor: 'transparent',
          statusBarTranslucent: true,
        }}
      >
        <Stack.Screen name={ROOT_HOME_SCREEN} component={RootHomeScreen} />
        <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={DEMO_SCREEN} component={DemoScreen} />
        <Stack.Screen name={ANIMATED_FLATLIST_SCREEN} component={AnimatedFlatlistScreen} />
      </Stack.Navigator>
      <Loading isLoading={isLoading} />
      <Toast />
    </NavigationContainer>
  );
};

export default AppNavigation;
