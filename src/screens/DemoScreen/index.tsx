import React, {useCallback, useMemo, useState} from 'react';
import {FlatList} from 'react-native';
import {scale} from 'react-native-size-matters';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ActionSheet, HStack, MainLayout, ModalConfirm, Pressable, Text, VStack} from '~/components';
import {ANIMATED_FLATLIST_SCREEN, LOGIN_SCREEN, ROOT_HOME_SCREEN} from '~/constants/ScreenName';
import {useAppSelector, useTheme} from '~/hooks';
import {ThemeEnum} from '~/models';
import {navigate, setRoot} from '~/services/navigationServices';
import {useSession} from '~/slices/sessionSlice';
import {showAlert} from '~/utils/alert';

export const DemoScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showActionSheet, setShowActionSheet] = useState(false);

  const {theme} = useAppSelector((state) => state.session);
  const {colors} = useTheme();
  const {changeTheme} = useSession();

  const DATA = useMemo(() => {
    return [
      {
        name: 'Login',
        onPress: () => {
          navigate(LOGIN_SCREEN);
        },
      },
      {
        name: 'Modal confirm',
        onPress: () => {
          setShowModal(true);
          showAlert('Test Alert');
        },
      },
      {
        name: 'Animated Flatlist',
        onPress: () => {
          navigate(ANIMATED_FLATLIST_SCREEN);
        },
      },
      {
        name: 'ActionSheet',
        onPress: () => {
          setShowActionSheet(true);
        },
      },
    ];
  }, []);

  const renderItem = useCallback(({item}) => {
    return (
      <Pressable onPress={item?.onPress}>
        <VStack padding={scale(16)}>
          <Text fontSize={scale(16)}>{item?.name || ''}</Text>
        </VStack>
      </Pressable>
    );
  }, []);

  const changeModeTheme = () => {
    if (theme) {
      changeTheme(ThemeEnum.dark);
    } else {
      changeTheme(ThemeEnum.light);
    }
  };

  return (
    <MainLayout safeAreaTop={true}>
      <HStack gap={10}>
        <Pressable onPress={() => setRoot(ROOT_HOME_SCREEN)}>
          <IonIcons name="home" size={30} color={colors.text[10]} />
        </Pressable>
        <Pressable onPress={changeModeTheme}>
          <MaterialCommunityIcons name="theme-light-dark" size={30} color={colors.text[10]} />
        </Pressable>
      </HStack>
      <FlatList data={DATA} keyExtractor={(_, index) => String(index)} renderItem={renderItem} />
      <ModalConfirm
        isVisible={showModal}
        message={'Modal test confirm nha'}
        onBackdropPress={() => {
          setShowModal(false);
        }}
      />
      <ActionSheet
        isVisible={showActionSheet}
        onBackdropPress={() => {
          setShowActionSheet(false);
        }}
      />
    </MainLayout>
  );
};
