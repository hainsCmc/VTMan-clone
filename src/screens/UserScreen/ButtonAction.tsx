import React from 'react';
import {HStack, Pressable, Text} from '~/components';
import {useTheme} from '~/hooks';

const ButtonAction = () => {
  const {colors} = useTheme();
  return (
    <HStack
      width={'100%'}
      alignItems="center"
      justifyContent="center"
      backgroundColor={colors.base}
      paddingVertical={10}
      marginVertical={8}
      borderRadius={5}
    >
      <Pressable>
        <Text color={colors.white} bold fontSize={18}>
          Đăng ký ngay
        </Text>
      </Pressable>
    </HStack>
  );
};
export default ButtonAction;
