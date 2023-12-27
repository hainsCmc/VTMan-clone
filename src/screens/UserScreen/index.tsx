import React from 'react';
import {HStack, MainLayout, VStack} from '~/components';
import {ButtonBack} from '~/components/ButtonBack';
import {ScaleImage} from '~/components/ScaleImage';
import {useTheme} from '~/hooks';
import Guide from './Guide';
import ButtonAction from './ButtonAction';

const icHome = require('~/assets/image/user_screen_1.png');
const UserScreen = () => {
  const {colors} = useTheme();
  return (
    <MainLayout
      safeAreaTop={true}
      paddingHorizontal={20}
      backgroundColor={colors.background[20]}
    >
      <VStack flex={1} justifyContent="center">
        <HStack position="absolute" left={20} top={50}>
          <ButtonBack />
        </HStack>
        <ScaleImage source={icHome} fullScreen={true} />
        <Guide />
      </VStack>
      <ButtonAction />
    </MainLayout>
  );
};

export default UserScreen;
