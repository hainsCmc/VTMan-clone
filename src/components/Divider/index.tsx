import React from 'react';
import {ViewProps, ViewStyle} from 'react-native';
import {useTheme} from '~/hooks';
import {VStack} from '../Layout/VStack';

interface Props extends ViewProps {
  vertical?: Boolean;
}

export const Divider = (props: Props & ViewStyle) => {
  const {vertical, ...rest} = props;
  const {colors} = useTheme();

  if (!vertical) {
    return (
      <VStack
        width="100%"
        height={1}
        backgroundColor={colors.gray[10]}
        {...rest}
      />
    );
  }
  return (
    <VStack
      height="100%"
      width={1}
      backgroundColor={colors.gray[10]}
      {...rest}
    />
  );
};
