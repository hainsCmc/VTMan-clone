import {Avatar} from 'native-base';
import React from 'react';
import {scale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {HStack, Pressable, Text, VStack} from '~/components';
import {useTheme} from '~/hooks';

const Logo = require('~/assets/icon/ic_home.png');

const User = () => {
  const {colors} = useTheme();
  return (
    <Pressable>
      <HStack alignItems="center" justifyContent="space-between">
        <HStack alignItems="stretch">
          <Avatar
            width={67}
            height={67}
            source={Logo}
            backgroundColor={colors.white}
            padding={scale(1)}
            marginRight={scale(18)}
          />
          <VStack alignItems="flex-start" justifyContent="space-evenly">
            <Text fontSize={scale(24)} bold color={colors.white} _props={{numberOfLines: 1}}>
              Đặng Thị Hằng
            </Text>
            <Text
              fontSize={scale(15)}
              lineHeight={scale(24)}
              color={colors.white}
              _props={{numberOfLines: 1}}
            >
              Mã NV: - TN2
            </Text>
          </VStack>
        </HStack>

        <FontAwesome name="angle-right" size={24} color={colors.white} />
      </HStack>
    </Pressable>
  );
};

export default User;
