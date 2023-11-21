import React from 'react';
import {ActivityIndicator} from 'react-native';
import {VStack, VStackProps} from '..';
import {useTheme} from '~/hooks';

interface Props extends VStackProps {
  isLoading: Boolean;
}

export const Loading = (props: Partial<Props>) => {
  const {isLoading, ...rest} = props;
  const {colors} = useTheme();

  if (!isLoading) {
    return null;
  }
  return (
    <VStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      position="absolute"
      backgroundColor={'rgba(0,0,0,0.2)'}
      left={0}
      right={0}
      top={0}
      bottom={0}
      {...rest}>
      <ActivityIndicator size="large" color={colors.primary[10]} />
    </VStack>
  );
};
