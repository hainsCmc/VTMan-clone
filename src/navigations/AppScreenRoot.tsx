/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {HStack, Pressable, Text, VStack} from '~/components';
import {NAME_TAB_BAR} from '~/constants/NameTabBar';
import {HOME_SCREEN_ROUTER, SETTING_SCREEN} from '~/constants/ScreenName';
import {useTheme} from '~/hooks';
import {HomeScreen, SettingScreen} from '~/screens';

const Tab = createBottomTabNavigator();

const TabBarRootHome = ({state, descriptors, navigation}) => {
  const {colors} = useTheme();

  const renderIconTabBar = (label: string, isFocused: boolean) => {
    switch (label) {
      case HOME_SCREEN_ROUTER:
        return <Fontisto name="home" size={14} color={isFocused ? colors.base : colors.text[10]} />;

      case SETTING_SCREEN:
        return (
          <Fontisto name="person" size={14} color={isFocused ? colors.base : colors.text[10]} />
        );
      default:
        return <VStack />;
    }
  };
  return (
    <HStack backgroundColor={colors.white}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const handlePress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };
        return (
          <Pressable
            key={route.key}
            flex={1}
            alignItems="center"
            justifyContent="center"
            height={50}
            onPress={handlePress}
          >
            {renderIconTabBar(label, isFocused)}
            <Text fontSize={18} color={isFocused ? colors.base : colors.text[10]}>
              {NAME_TAB_BAR[label]}
            </Text>
          </Pressable>
        );
      })}
    </HStack>
  );
};

const AppScreenRoot = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={HOME_SCREEN_ROUTER}
        tabBar={(props) => <TabBarRootHome {...props} />}
      >
        <Tab.Screen name={HOME_SCREEN_ROUTER} component={HomeScreen} />
        <Tab.Screen name={SETTING_SCREEN} component={SettingScreen} />
      </Tab.Navigator>
    </>
  );
};

export default AppScreenRoot;
