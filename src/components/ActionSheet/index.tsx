import React from 'react';
import {useTranslation} from 'react-i18next';
import Modal, {ModalProps} from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '~/hooks/useTheme';
import {
  HStack,
  VStack,
  Text,
  Pressable,
  PressableProps,
  TextProps,
  VStackProps,
  HStackProps,
} from '..';
import {scale} from 'react-native-size-matters';

export interface ActionSheetProps extends ModalProps {
  children: any;
  _titleContainer: Partial<VStackProps>;
  _title: Partial<TextProps>;
  _leftLabelHeaderContainer: Partial<PressableProps>;
  _leftLabelHeader: Partial<TextProps>;
  _rightLabelHeaderContainer: Partial<PressableProps>;
  _rightLabelHeader: Partial<TextProps>;
  _footer: Partial<HStackProps>;
  _labelCancelContainer: Partial<PressableProps>;
  _labelCancel: Partial<TextProps>;
  _labelConfirmContainer: Partial<PressableProps>;
  _labelConfirm: Partial<TextProps>;
  onBackdropPress: any;
  title: any;
  renderLeftHeader: any;
  renderRightHeader: any;
  leftLabelHeader: any;
  rightLabelHeader: any;
  onClickLeftHeader: any;
  onClickRightHeader: any;
  labelCancel: any;
  labelConfirm: any;
  onConfirm: any;
  footerVertical: boolean;
  hideCancelButton: boolean;
  hideConfirmButton: boolean;
}

export const ActionSheet = (props: Partial<ActionSheetProps>) => {
  const {
    children,
    _titleContainer,
    _title,
    _leftLabelHeaderContainer,
    _leftLabelHeader,
    _rightLabelHeaderContainer,
    _rightLabelHeader,
    _footer,
    _labelCancelContainer,
    _labelCancel,
    _labelConfirm,
    _labelConfirmContainer,
    onBackdropPress,
    title,
    renderLeftHeader,
    renderRightHeader,
    leftLabelHeader,
    rightLabelHeader,
    onClickLeftHeader,
    onClickRightHeader,
    labelCancel,
    labelConfirm,
    onConfirm,
    footerVertical,
    hideCancelButton,
    hideConfirmButton,
    ...rest
  } = props;
  const {t} = useTranslation();
  const {bottom} = useSafeAreaInsets();
  const {colors} = useTheme();

  return (
    <Modal
      useNativeDriver={true}
      onBackdropPress={onBackdropPress}
      style={{justifyContent: 'flex-end', margin: 0}}
      {...rest}>
      <VStack
        backgroundColor={colors.white}
        maxHeight="90%"
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
        paddingBottom={bottom}>
        <HStack height={50}>
          {!!renderLeftHeader && renderLeftHeader?.()}
          {!renderLeftHeader && !!leftLabelHeader && (
            <Pressable
              onPress={() => {
                onBackdropPress?.();
                setTimeout(() => {
                  onClickLeftHeader?.();
                }, 200);
              }}
              {..._leftLabelHeaderContainer}>
              <Text color={colors.primary[10]} {..._leftLabelHeader}>
                {leftLabelHeader || t('common.cancel')}
              </Text>
            </Pressable>
          )}
          <VStack flex={1} justifyContent="center" {..._titleContainer}>
            <Text
              _props={{numberOfLines: 1}}
              fontSize={18}
              medium
              alignSelf="center"
              {..._title}>
              {title || t('common.notification')}
            </Text>
          </VStack>
          {!!renderRightHeader && renderRightHeader?.()}
          {!renderRightHeader && !!rightLabelHeader && (
            <Pressable
              onPress={() => {
                onBackdropPress?.();
                setTimeout(() => {
                  onClickRightHeader?.();
                }, 200);
              }}
              {..._rightLabelHeaderContainer}>
              <Text color={colors.primary[10]} {..._rightLabelHeader}>
                {rightLabelHeader || t('common.ok')}
              </Text>
            </Pressable>
          )}
        </HStack>
        {children}
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
              backgroundColor={colors.white}
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
                backgroundColor={colors.white}
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
