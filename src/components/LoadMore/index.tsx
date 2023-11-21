import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';
import {useTheme} from '~/hooks';

export const LoadMore = (props: ActivityIndicatorProps) => {
  const {colors} = useTheme();
  return (
    <ActivityIndicator size="small" color={colors.primary[10]} {...props} />
  );
};
