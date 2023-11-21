import {debounce} from 'lodash';
import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, ViewStyle} from 'react-native';

export interface PressableProps extends ViewStyle {
  _props: TouchableOpacityProps;
  children: any;
  onPress?: any;
}

export const Pressable = (props: Partial<PressableProps>) => {
  const {_props, children, onPress, ...rest} = props;

  const debounced = debounce(() => {
    onPress?.();
  }, 200);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={debounced}
      style={[{opacity: !!_props?.disabled ? 0.6 : 1}, {...rest}]}
      {..._props}>
      {children}
    </TouchableOpacity>
  );
};
