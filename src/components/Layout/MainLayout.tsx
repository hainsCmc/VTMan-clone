import React from 'react';
import {useTheme} from '~/hooks';
import {VStack, VStackProps} from '..';

export const MainLayout = (props: Partial<VStackProps>) => {
  const {children, ...rest} = props;
  const {colors} = useTheme();

  return (
    <VStack flex={1} backgroundColor={colors.white} {...rest}>
      {children}
    </VStack>
  );
};

// safeAreaTop = false -> khi bọc header vì xử lý safeAreaTop trong header để full screen
MainLayout.defaultProps = {
  safeAreaTop: false,
  safeAreaBottom: true,
  safeAreaLeft: true,
  safeAreaRight: true,
};
