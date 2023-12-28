import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  HOME_SCREEN_ROUTER,
  USER_PROFILE,
  USER_SCREEN,
} from '~/constants/ScreenName';
import {useTheme} from '~/hooks';
import UserProfile from '~/screens/UserProfile';
import UserScreen from '~/screens/UserScreen';
import HomeScreenRoot from './HomeScreenRoot';

const StackAppScreen = createNativeStackNavigator();

const AppScreenRoot = () => {
  const {colors} = useTheme();
  return (
    <>
      <StackAppScreen.Navigator
        initialRouteName={HOME_SCREEN_ROUTER}
        screenOptions={{
          headerShown: false,
        }}
      >
        <StackAppScreen.Screen
          name={HOME_SCREEN_ROUTER}
          component={HomeScreenRoot}
        />
        <StackAppScreen.Screen
          name={USER_SCREEN}
          component={UserScreen}
          options={{statusBarColor: colors.base}}
        />
        <StackAppScreen.Screen name={USER_PROFILE} component={UserProfile} />
      </StackAppScreen.Navigator>
    </>
  );
};

export default AppScreenRoot;
