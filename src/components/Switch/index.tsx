import React from 'react';
import {SwitchProps, Switch as SwitchRN} from 'react-native';
import {useTheme} from '~/hooks';

interface Props extends SwitchProps {}

export const Switch = (props: Props) => {
  const {colors} = useTheme();
  const {...rest} = props;

  return (
    <SwitchRN
      trackColor={{true: colors.primary[10]}}
      thumbColor={colors.white}
      {...rest}
    />
  );
};
