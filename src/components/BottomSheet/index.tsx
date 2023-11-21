import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProps,
} from '@gorhom/bottom-sheet';
import React, {RefObject} from 'react';
import {useTranslation} from 'react-i18next';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '~/hooks';
import {HStack, HStackProps} from '../Layout/HStack';
import {VStack, VStackProps} from '../Layout/VStack';
import {Pressable, PressableProps} from '../Pressable';
import {Text, TextProps} from '../Text';

export interface BottomSheetProps extends BottomSheetModalProps {
  bottomSheetRef: RefObject<any>;
  _container: Partial<VStackProps>;
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
  hasCloseIcon: boolean;
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
  onCancel: any;
  footerVertical: boolean;
  hideCancelButton: boolean;
  hideConfirmButton: boolean;
}

export const BottomSheet = (props: Partial<BottomSheetProps>) => {
  const {
    bottomSheetRef,
    children,
    _container,
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
    hasCloseIcon,
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
    onCancel,
    footerVertical,
    hideCancelButton,
    hideConfirmButton,
    ...rest
  } = props;
  const {top, bottom} = useSafeAreaInsets();
  const {t} = useTranslation();
  const {colors} = useTheme();

  return (
    <BottomSheetModal
      keyboardBlurBehavior="restore"
      // eslint-disable-next-line react/no-unstable-nested-components
      backdropComponent={backdropProps => (
        <BottomSheetBackdrop
          {...backdropProps}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      )}
      handleComponent={null}
      topInset={top}
      bottomInset={bottom}
      ref={bottomSheetRef}
      index={0}
      enableDismissOnClose
      snapPoints={['100%']}
      {...rest}>
      <VStack flex={1} {..._container}>
        <HStack alignItems="center" maxHeight={scale(60)}>
          {!!hasCloseIcon && <VStack width={scale(61)} />}
          {!!renderLeftHeader && renderLeftHeader?.()}
          {!renderLeftHeader && !!leftLabelHeader && (
            <Pressable
              height="100%"
              justifyContent="center"
              paddingHorizontal={scale(16)}
              onPress={() => {
                bottomSheetRef?.current?.close();
                setTimeout(() => {
                  onClickLeftHeader?.();
                }, 200);
              }}
              {..._leftLabelHeaderContainer}>
              <Text
                color={colors.primary[10]}
                fontSize={scale(16)}
                {..._leftLabelHeader}>
                {leftLabelHeader || t('common.cancel')}
              </Text>
            </Pressable>
          )}
          {!!title && (
            <VStack
              height={scale(60)}
              flex={1}
              justifyContent="center"
              {..._titleContainer}>
              <Text
                _props={{numberOfLines: 1}}
                fontSize={scale(18)}
                medium
                alignSelf="center"
                {..._title}>
                {title}
              </Text>
            </VStack>
          )}
          {!!renderRightHeader && renderRightHeader?.()}
          {!renderRightHeader && !!rightLabelHeader && (
            <Pressable
              height="100%"
              justifyContent="center"
              paddingHorizontal={scale(16)}
              onPress={() => {
                bottomSheetRef?.current?.close();
                setTimeout(() => {
                  onClickRightHeader?.();
                }, 200);
              }}
              {..._rightLabelHeaderContainer}>
              <Text
                color={colors.primary[10]}
                fontSize={scale(16)}
                {..._rightLabelHeader}>
                {rightLabelHeader || t('common.ok')}
              </Text>
            </Pressable>
          )}
          {!!hasCloseIcon && (
            <Pressable
              height="100%"
              justifyContent="center"
              paddingHorizontal={scale(16)}
              onPress={() => {
                bottomSheetRef?.current?.close();
              }}>
              <IonIcons name="close" color={colors.black} size={25} />
            </Pressable>
          )}
        </HStack>
        {children}
        {!!footerVertical && (
          <VStack padding={scale(16)} {..._footer}>
            <Pressable
              borderRadius={scale(8)}
              backgroundColor={colors.primary[10]}
              paddingVertical={scale(12)}
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
              paddingVertical={scale(12)}
              justifyContent="center"
              alignItems="center"
              onPress={() => {
                bottomSheetRef?.current?.close();
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
                paddingVertical={scale(12)}
                justifyContent="center"
                alignItems="center"
                onPress={() => {
                  bottomSheetRef?.current?.close();
                  onCancel?.();
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
                paddingVertical={scale(12)}
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
    </BottomSheetModal>
  );
};
