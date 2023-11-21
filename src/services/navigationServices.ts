import {createRef} from 'react';
import {CommonActions, StackActions} from '@react-navigation/native';

export const navigationRef = createRef<any>();

export function navigate(name?: any, params?: any) {
  navigationRef.current?.navigate(name, params);
}

export function navPush(name?: any, params?: any) {
  navigationRef.current &&
    navigationRef.current.dispatch(StackActions.push(name, params));
}

export function replace(name?: any, params?: any) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

export function pop(number = 1) {
  navigationRef.current?.dispatch(StackActions.pop(number));
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function setRoot(routeName, params = {}) {
  navigationRef.current?.reset({
    index: 0,
    routes: [
      {
        name: routeName,
        params,
      },
    ],
  });
}

export function resetWithNav(navigation, routeName, params = {}) {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: routeName, params: params}],
    }),
  );
}

export function getCurrentRoute() {
  return navigationRef.current?.getCurrentRoute().name;
}
