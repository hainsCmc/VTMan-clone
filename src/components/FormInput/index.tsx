import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {StyleSheet, TextInput, TextInputProps, TextStyle} from 'react-native';
import {scale} from 'react-native-size-matters';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '~/hooks';
import {store} from '~/stores';
import {HStack, HStackProps, Pressable, Text, VStack} from '..';

export interface FormInputProps extends TextStyle {
  _container: Partial<HStackProps>;
  isPassword: boolean;
  name: any;
  control: any;
  errorMessage: any;
  renderLeftElement: any;
  renderRightElement: any;
  _props: Partial<TextInputProps>;
  font: any;
}

export const FormInput = (props: Partial<FormInputProps>) => {
  const {
    _props,
    _container,
    isPassword,
    name,
    control,
    errorMessage,
    renderLeftElement,
    renderRightElement,
    font = store.getState().session.font,
    ...rest
  } = props;
  const [showText, setShowText] = useState(isPassword ? false : true);
  const {colors, fonts} = useTheme();

  if (control) {
    return (
      <VStack>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <HStack
              width="100%"
              height={scale(45)}
              borderRadius={scale(8)}
              backgroundColor={colors.gray[30]}
              borderColor={colors.red[10]}
              borderWidth={!!errorMessage ? 1 : 0}
              {..._container}>
              {renderLeftElement && renderLeftElement?.()}
              <TextInput
                style={[
                  styles.input,
                  {
                    color: colors.text[10],
                    fontFamily: fonts.normal,
                    fontSize: scale(16),
                  },
                  {...rest},
                ]}
                secureTextEntry={!showText}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholderTextColor={colors.text[20]}
                {..._props}
              />
              {!!renderRightElement && renderRightElement()}
              {!renderRightElement && !!isPassword && (
                <Pressable
                  onPress={() => setShowText(!showText)}
                  paddingRight={scale(16)}
                  justifyContent="center"
                  alignItems="center">
                  <IonIcons
                    name={!showText ? 'eye' : 'eye-off'}
                    size={20}
                    color={'gray'}
                  />
                </Pressable>
              )}
            </HStack>
          )}
          name={name}
        />
        {!!errorMessage && (
          <>
            <VStack height={scale(4)} />
            <Text color={colors.red[10]}>{errorMessage}</Text>
          </>
        )}
      </VStack>
    );
  }
  return (
    <HStack
      width="100%"
      height={scale(45)}
      borderRadius={scale(8)}
      backgroundColor={colors.gray[30]}
      {..._container}>
      {renderLeftElement && renderLeftElement?.()}
      <TextInput
        style={[
          styles.input,
          {
            color: colors.text[10],
            fontFamily: fonts.normal,
            fontSize: scale(16),
          },
          {...rest},
        ]}
        secureTextEntry={!showText}
        placeholderTextColor={colors.text[20]}
        {..._props}
      />
      {!!renderRightElement && renderRightElement()}
      {!renderRightElement && !!isPassword && (
        <Pressable
          onPress={() => setShowText(!showText)}
          paddingRight={scale(16)}
          justifyContent="center"
          alignItems="center">
          <IonIcons
            name={!showText ? 'eye' : 'eye-off'}
            size={20}
            color={'gray'}
          />
        </Pressable>
      )}
    </HStack>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: scale(14),
    paddingHorizontal: scale(16),
    borderRadius: scale(8),
  },
});
