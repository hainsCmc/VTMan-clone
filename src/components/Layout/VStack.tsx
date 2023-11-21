import React from 'react';
import {StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';

export interface VStackProps extends ViewStyle {
  children: any;
  _props: ViewProps;
  safeAreaTop: boolean;
  safeAreaBottom: boolean;
}

export const VStack = (props: Partial<VStackProps>) => {
  const {children, _props, safeAreaTop, safeAreaBottom, ...rest} = props;
  const {top, bottom} = useSafeAreaInsets();

  return (
    <View
      {..._props}
      style={[
        styles.container,
        !!safeAreaTop && {paddingTop: scale(top)},
        !!safeAreaBottom && {paddingBottom: scale(bottom)},
        {...rest},
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});
