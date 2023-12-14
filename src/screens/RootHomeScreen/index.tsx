import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HOME_SCREEN, SETTING_SCREEN} from '~/constants/ScreenName';
import {HomeScreen, SettingScreen} from '~/screens';

const Tab = createBottomTabNavigator();

export const RootHomeScreen = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: 'transparent'},
          tabBarActiveBackgroundColor: 'pink',
        }}
      >
        <Tab.Screen name={HOME_SCREEN} component={HomeScreen} />
        <Tab.Screen name={SETTING_SCREEN} component={SettingScreen} />
      </Tab.Navigator>
    </>
  );
};
