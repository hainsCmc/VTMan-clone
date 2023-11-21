import React, {useCallback, useMemo, useState} from 'react';
import {FlatList} from 'react-native';
import {scale} from 'react-native-size-matters';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {
  ActionSheet,
  MainLayout,
  ModalConfirm,
  Pressable,
  Text,
  VStack,
} from '~/components';
import {ANIMATED_FLATLIST_SCREEN, LOGIN_SCREEN} from '~/constants/ScreenName';
import {navigate} from '~/services/navigationServices';
import {showAlert} from '~/utils/alert';

export const HomeScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showActionSheet, setShowActionSheet] = useState(false);

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
        <VStack height={scale(50)} padding={scale(16)}>
          <Text fontSize={scale(16)}>{item?.name || ''}</Text>
        </VStack>
      </Pressable>
    );
  }, []);

  return (
    <MainLayout>
      <IonIcons name="home" size={30} />
      <FlatList
        data={DATA}
        keyExtractor={(_, index) => String(index)}
        renderItem={renderItem}
      />
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
