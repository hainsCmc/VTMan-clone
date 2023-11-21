import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Loading} from '~/components';
import {
  ANIMATED_FLATLIST_SCREEN,
  HOME_SCREEN,
  LOGIN_SCREEN,
} from '~/constants/ScreenName';
import {useAppSelector} from '~/hooks/useAppSelector';
import {AnimatedFlatlistScreen, HomeScreen, LoginScreen} from '~/screens';
import {navigationRef} from '~/services/navigationServices';
import i18n from '~/translations';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const {isLoading} = useAppSelector(state => state.loading);
  const {language} = useAppSelector(state => state.session);

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
      }}>
      <Stack.Navigator
        initialRouteName={HOME_SCREEN}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          animation: 'fade_from_bottom',
        }}>
        <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen
          name={ANIMATED_FLATLIST_SCREEN}
          component={AnimatedFlatlistScreen}
        />
      </Stack.Navigator>
      <Loading isLoading={isLoading} />
      <Toast />
    </NavigationContainer>
  );
};

export default AppNavigation;
