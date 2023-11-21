import React, {useMemo} from 'react';
import {
  TextProps as TextPropsRN,
  Text as TextRN,
  TextStyle,
} from 'react-native';
import {useTheme} from '~/hooks';

export interface TextProps extends TextStyle {
  children: any;
  _props: TextPropsRN;
  light: boolean;
  lightItalic: boolean;
  italic: boolean;
  medium: boolean;
  mediumItalic: boolean;
  bold: boolean;
  boldItalic: boolean;
}

export const Text = (props: Partial<TextProps>) => {
  const {
    children,
    _props,
    light,
    lightItalic,
    italic,
    medium,
    mediumItalic,
    bold,
    boldItalic,
    ...rest
  } = props;

  const {colors, fonts} = useTheme();

  const FontFamily = useMemo(() => {
    if (!!light) {
      return fonts.light;
    }
    if (!!lightItalic) {
      return fonts.lightItalic;
    }
    if (!!italic) {
      return fonts.italic;
    }
    if (!!medium) {
      return fonts.medium;
    }
    if (!!mediumItalic) {
      return fonts.mediumItalic;
    }
    if (!!bold) {
      return fonts.bold;
    }
    if (!!boldItalic) {
      return fonts.boldItalic;
    }
    return fonts.normal;
  }, [
    bold,
    boldItalic,
    fonts,
    italic,
    light,
    lightItalic,
    medium,
    mediumItalic,
  ]);

  return (
    <TextRN
      {..._props}
      style={[{fontFamily: FontFamily, color: colors.text[10]}, {...rest}]}>
      {children}
    </TextRN>
  );
};
