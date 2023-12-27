import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme} from '~/hooks';
import {goBack, pop} from '~/services/navigationServices';
import {Pressable} from '../Pressable';
export interface ButtonBackProps {
  size: Number;
  onCallBack: () => void | undefined;
  popTo: Number | undefined;
}
export const ButtonBack = (props) => {
  const {colors} = useTheme();
  const {size = 24, onCallBack, popTo, ...rest} = props;
  const handlePress = () => {
    if (onCallBack) {
      onCallBack();
    } else if (popTo) {
      pop(popTo);
    } else {
      goBack();
    }
  };
  return (
    <Pressable onPress={handlePress} {...rest}>
      <AntDesign name="arrowleft" size={size} color={colors.black} />
    </Pressable>
  );
};
