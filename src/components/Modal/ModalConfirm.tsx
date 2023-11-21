import React from 'react';
import {useTranslation} from 'react-i18next';
import Modal, {ModalProps} from 'react-native-modal';
import {scale} from 'react-native-size-matters';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {MY_HEIGHT} from '~/constants/common';
import {useTheme} from '~/hooks';
import {
  HStack,
  HStackProps,
  Pressable,
  PressableProps,
  Text,
  TextProps,
  VStack,
  VStackProps,
} from '..';

interface Props extends ModalProps {
  _container: Partial<VStackProps>;
  _title: Partial<TextProps>;
  _footer: Partial<HStackProps>;
  _labelCancelContainer: Partial<PressableProps>;
  _labelCancel: Partial<TextProps>;
  _labelConfirmContainer: Partial<PressableProps>;
  _labelConfirm: Partial<TextProps>;
  hasCloseIcon: boolean;
  onBackdropPress: any;
  title: any;
  message: any;
  labelCancel: any;
  labelConfirm: any;
  onConfirm: any;
  footerVertical: boolean;
  hideCancelButton: boolean;
  hideConfirmButton: boolean;
}

export const ModalConfirm = (props: Partial<Props>) => {
  const {
    _container,
    _title,
    _footer,
    _labelCancelContainer,
    _labelCancel,
    _labelConfirm,
    _labelConfirmContainer,
    hasCloseIcon,
    onBackdropPress,
    title,
    message,
    labelCancel,
    labelConfirm,
    onConfirm,
    footerVertical,
    hideCancelButton,
    hideConfirmButton,
    ...rest
  } = props;
  const {t} = useTranslation();
  const {colors} = useTheme();

  return (
    <Modal useNativeDriver={true} onBackdropPress={onBackdropPress} {...rest}>
      <VStack
        backgroundColor={colors.white}
        maxHeight={0.8 * MY_HEIGHT}
        borderRadius={scale(10)}
        {..._container}>
        <HStack padding={scale(16)} paddingRight={0} alignItems="center">
          <VStack flex={1}>
            <Text _props={{numberOfLines: 1}} bold fontSize={scale(20)}>
              {title || t('common.notification')}
            </Text>
          </VStack>
          {!!hasCloseIcon && (
            <Pressable paddingHorizontal={scale(16)} onPress={onBackdropPress}>
              <IonIcons name="close" color={colors.black} size={25} />
            </Pressable>
          )}
        </HStack>
        <VStack padding={scale(16)} paddingTop={0} minHeight={scale(60)}>
          <Text fontSize={scale(16)} {..._title}>
            {message || ''}
          </Text>
        </VStack>
        {!!footerVertical && (
          <VStack padding={scale(16)} {..._footer}>
            <Pressable
              borderRadius={scale(8)}
              backgroundColor={colors.primary[10]}
              paddingVertical={scale(10)}
              justifyContent="center"
              alignItems="center"
              onPress={onConfirm}
              {..._labelConfirmContainer}>
              <Text
                medium
                fontSize={scale(16)}
                color="white"
                {..._labelConfirm}>
                {labelConfirm || t('common.ok')}
              </Text>
            </Pressable>
            <VStack height={scale(16)} />
            <Pressable
              borderRadius={scale(8)}
              backgroundColor={colors.gray[30]}
              paddingVertical={scale(10)}
              justifyContent="center"
              alignItems="center"
              onPress={() => {
                onBackdropPress?.();
              }}
              {..._labelCancelContainer}>
              <Text medium fontSize={scale(16)} {..._labelCancel}>
                {labelCancel || t('common.cancel')}
              </Text>
            </Pressable>
          </VStack>
        )}
        {!!footerVertical ||
        (!!hideCancelButton && !!hideConfirmButton) ? null : (
          <HStack padding={scale(16)}>
            {!hideCancelButton && (
              <Pressable
                borderRadius={scale(8)}
                backgroundColor={colors.gray[30]}
                flex={1}
                paddingVertical={scale(10)}
                justifyContent="center"
                alignItems="center"
                onPress={() => {
                  onBackdropPress?.();
                }}
                {..._labelCancelContainer}>
                <Text medium fontSize={scale(16)} {..._labelCancel}>
                  {labelCancel || t('common.cancel')}
                </Text>
              </Pressable>
            )}
            {!hideCancelButton && !hideConfirmButton && (
              <VStack width={scale(16)} />
            )}
            {!hideConfirmButton && (
              <Pressable
                borderRadius={scale(8)}
                backgroundColor={colors.primary[10]}
                flex={1}
                paddingVertical={scale(10)}
                justifyContent="center"
                alignItems="center"
                onPress={onConfirm}
                {..._labelConfirmContainer}>
                <Text
                  medium
                  fontSize={scale(16)}
                  color="white"
                  {..._labelConfirm}>
                  {labelConfirm || t('common.ok')}
                </Text>
              </Pressable>
            )}
          </HStack>
        )}
      </VStack>
    </Modal>
  );
};
