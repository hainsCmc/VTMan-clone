import {get} from 'lodash';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import error from './icons/error';
import info from './icons/info';
import success from './icons/success';

const iconName = {
  info,
  error,
  success,
};

export const SvgIcon = props => {
  return <SvgXml xml={get(iconName, props.name, 'info')} {...props} />;
};
