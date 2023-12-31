import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useHeaderHeight} from '@react-navigation/elements';

export const CustomKeyboardAvoidingView = ({children, style}: any) => {
  const insets = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();

  return (
    <KeyboardAvoidingView
      style={StyleSheet.compose(style, {marginBottom: insets.bottom})}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={true}
      keyboardVerticalOffset={headerHeight + insets.bottom}>
      {children}
    </KeyboardAvoidingView>
  );
};
