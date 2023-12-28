import React from 'react';
import {Text, VStack} from '~/components';
import {useTheme} from '~/hooks';
import {checkCameraPermission} from '~/utils/devicesPermission';

const Guide = () => {
  const {colors} = useTheme();
  return (
    <VStack>
      <Text bold fontSize={18} textAlign="center" marginBottom={20}>
        Để bắt đầu định danh thông tin tài khoản, vui lòng chuẩn bị:
      </Text>
      <Text medium>1. CMND hoặc CCCD còn hiệu lực theo quy định</Text>
      <Text medium>
        2. Điện thoại có Camera.{' '}
        <Text color={colors.link[10]} _props={{onPress: checkCameraPermission}}>
          Nhấn để kiểm tra
        </Text>
      </Text>
    </VStack>
  );
};
export default Guide;
