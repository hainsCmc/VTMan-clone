import React from 'react';
import {HStack, Pressable, Text} from '~/components';
import {USER_PROFILE} from '~/constants/ScreenName';
import {useTheme} from '~/hooks';
import {navigate} from '~/services/navigationServices';

const ButtonAction = () => {
  const {colors} = useTheme();

  const handleRegister = () => {
    navigate(USER_PROFILE);
  };
  return (
    <Pressable onPress={handleRegister}>
      <HStack
        width={'100%'}
        alignItems="center"
        justifyContent="center"
        backgroundColor={colors.base}
        paddingVertical={10}
        marginVertical={8}
        borderRadius={5}
      >
        <Text color={colors.white} bold fontSize={18}>
          Đăng ký ngay
        </Text>
      </HStack>
    </Pressable>
  );
};
export default ButtonAction;
