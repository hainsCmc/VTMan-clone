import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HOME_SCREEN, USER_SCREEN} from '~/constants/ScreenName';
import {useTheme} from '~/hooks';
import {HomeScreen} from '~/screens';
import UserScreen from '~/screens/UserScreen';

const Stack = createNativeStackNavigator();
const HomeScreenRoot = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      initialRouteName={HOME_SCREEN}
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen
        name={USER_SCREEN}
        component={UserScreen}
        options={{
          statusBarColor: colors.base,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenRoot;
