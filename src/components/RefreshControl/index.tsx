import React from 'react';
import {RefreshControl, RefreshControlProps} from 'react-native';
import {useTheme} from '~/hooks';

export const RefreshControlComponent = (props: RefreshControlProps) => {
  const {colors} = useTheme();
  return <RefreshControl tintColor={colors.primary[10]} {...props} />;
};
