import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HOME_SCREEN, USER_SCREEN} from '~/constants/ScreenName';
import {HomeScreen} from '~/screens';
import UserScreen from '~/screens/UserScreen';

const Stack = createNativeStackNavigator();
const HomeScreenRoot = () => {
  return (
    <Stack.Navigator initialRouteName={HOME_SCREEN}>
      <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={USER_SCREEN} component={UserScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreenRoot;
