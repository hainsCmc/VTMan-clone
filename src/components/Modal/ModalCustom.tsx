import React from 'react';
import {useTranslation} from 'react-i18next';
import {ViewStyle} from 'react-native';
import Modal, {ModalProps} from 'react-native-modal';
import {scale} from 'react-native-size-matters';
import {useTheme} from '~/hooks/useTheme';
import {MY_HEIGHT} from '~/themes/sizes';
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

export interface ModalCustomProps extends ModalProps {
  _container: Partial<VStackProps>;
  _footer: Partial<HStackProps>;
  _labelCancelContainer: Partial<PressableProps>;
  _labelCancel: Partial<TextProps>;
  _labelConfirmContainer: Partial<PressableProps>;
  _labelConfirm: Partial<TextProps>;
  children: any;
  onBackdropPress: any;
  onConfirm: any;
  labelConfirm: JSX.Element | string;
  btnConfirmStyle: Partial<ViewStyle>;
  labelConfirmStyle: Partial<ViewStyle>;
  labelCancel: JSX.Element | string;
  btnCancelStyle: Partial<ViewStyle>;
  labelCancelStyle: Partial<ViewStyle>;
  hideConfirmButton: boolean;
  hideCancelButton: boolean;
  footerStyle: Partial<ViewStyle>;
}

export const ModalCustom = (props: Partial<ModalCustomProps>) => {
  const {
    _container,
    _footer,
    _labelCancelContainer,
    _labelCancel,
    _labelConfirmContainer,
    _labelConfirm,
    onBackdropPress,
    onConfirm,
    labelConfirm,
    labelCancel,
    hideConfirmButton = false,
    hideCancelButton = false,
    children,
    ...rest
  } = props;
  const {t} = useTranslation();
  const {colors} = useTheme();

  return (
    <Modal useNativeDriver={true} onBackdropPress={onBackdropPress} {...rest}>
      <VStack
        backgroundColor={colors.white}
        borderRadius={scale(10)}
        maxHeight={0.8 * MY_HEIGHT}
        {..._container}>
        {children}
        {!!hideCancelButton && !!hideConfirmButton ? null : (
          <HStack padding={scale(16)} {..._footer}>
            {!hideCancelButton && (
              <Pressable
                borderRadius={8}
                backgroundColor={colors.gray[30]}
                flex={1}
                paddingVertical={scale(10)}
                justifyContent="center"
                alignItems="center"
                onPress={() => {
                  onBackdropPress?.();
                }}
                {..._labelCancelContainer}>
                <Text
                  color={colors.text[10]}
                  medium
                  fontSize={scale(16)}
                  {..._labelCancel}>
                  {labelCancel || t('common.cancel')}
                </Text>
              </Pressable>
            )}
            {!hideCancelButton && !hideConfirmButton && (
              <VStack width={scale(16)} />
            )}
            {!hideConfirmButton && (
              <Pressable
                borderRadius={8}
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
                  color={colors.white}
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
