import React from 'react';
import {scale} from 'react-native-size-matters';
import {Text, VStack} from '~/components';
import {useTheme} from '~/hooks';
import User from './User';

const HomeHeader = () => {
  const {colors} = useTheme();
  return (
    <VStack
      backgroundColor={colors.base}
      safeAreaTop={true}
      paddingHorizontal={scale(16)}
      paddingBottom={scale(48)}
    >
      <Text
        fontSize={scale(24)}
        lineHeight={scale(24)}
        bold
        color={colors.white}
        paddingVertical={scale(8)}
      >
        VTMan
      </Text>

      {/* Render thông tin người dùng */}
      <User />
    </VStack>
  );
};

export default HomeHeader;
