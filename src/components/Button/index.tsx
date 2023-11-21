import React from 'react';
import {scale} from 'react-native-size-matters';
import {useTheme} from '~/hooks';
import {Pressable, PressableProps, Text, TextProps} from '..';

interface Props extends PressableProps {
  _text: Partial<TextProps>;
}

export const Button = (props: Partial<Props>) => {
  const {children, _text, ...rest} = props;
  const {colors} = useTheme();

  return (
    <Pressable
      width={'100%'}
      justifyContent="center"
      alignItems="center"
      minHeight={scale(48)}
      paddingHorizontal={scale(16)}
      paddingVertical={scale(10)}
      borderRadius={scale(8)}
      backgroundColor={colors.primary[10]}
      opacity={!!rest?._props?.disabled ? 0.4 : 1}
      {...rest}>
      <Text medium fontSize={scale(16)} color={colors.white} {..._text}>
        {children}
      </Text>
    </Pressable>
  );
};
