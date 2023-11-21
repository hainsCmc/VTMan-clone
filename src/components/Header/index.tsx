import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '~/hooks';
import {
  HStack,
  HStackProps,
  Pressable,
  Text,
  TextProps,
  VStack,
  VStackProps,
} from '..';

interface Props extends HStackProps {
  title: string;
  _titleContainer: Partial<VStackProps>;
  _title: Partial<TextProps>;
  hasLeftIcon: Boolean;
  customLeftIcon: any;
  customRightIcon: any;
  onPressBackIcon: any;
}

export const Header = (props: Partial<Props>) => {
  const {
    title,
    _titleContainer,
    _title,
    hasLeftIcon = true,
    customLeftIcon,
    customRightIcon,
    onPressBackIcon,
    ...rest
  } = props;
  const navigation = useNavigation();
  const {colors} = useTheme();

  const getLeftIcon = () => {
    if (customLeftIcon) {
      return customLeftIcon?.();
    }
    if (!hasLeftIcon && !customLeftIcon) {
      return <VStack width={scale(60)} height={scale(40)} />;
    }
    return (
      <Pressable
        paddingHorizontal={scale(16)}
        paddingVertical={scale(4)}
        onPress={() => {
          if (!!onPressBackIcon) {
            onPressBackIcon?.();
          } else {
            navigation.goBack();
          }
        }}>
        <IonIcons
          name="arrow-back"
          size={scale(25)}
          color={colors.primary[10]}
        />
      </Pressable>
    );
  };

  const getRightIcon = () => {
    if (customRightIcon) {
      return customRightIcon?.();
    }
    return <VStack width={scale(60)} height={scale(40)} />;
  };

  return (
    <HStack alignItems="center" paddingVertical={scale(8)} {...rest}>
      {getLeftIcon()}
      <VStack flex={1} alignItems="center" {..._titleContainer}>
        {!!title && (
          <Text
            fontSize={scale(20)}
            bold
            color={colors.text[10]}
            _props={{numberOfLines: 1}}
            {..._title}>
            {title}
          </Text>
        )}
      </VStack>
      {getRightIcon()}
    </HStack>
  );
};
