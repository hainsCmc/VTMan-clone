import {ThemeEnum} from '~/models/common';

export default {
  [ThemeEnum.dark]: {
    white: '#000000',
    black: '#ffffff',
    base: '#EE0033',
    primary: {
      10: '#EE0033',
    },
    text: {
      // 10: '#3D4144',
      10: '#ffffff',
      20: '#8B8C90',
    },
    background: {
      10: '#FBE8E2',
    },
    gray: {
      10: '#D6DEE5',
      20: '#EDEEF0',
    },
    red: {
      10: '#ef4444',
    },
  },
  [ThemeEnum.light]: {
    white: '#ffffff',
    black: '#000000',
    base: '#EE0033',
    primary: {
      10: '#EE0033',
    },
    text: {
      10: '#3D4144',
    },
    background: {
      10: '#FBE8E2',
    },
    gray: {
      10: '#D6DEE5',
      20: '#EDEEF0',
    },
    red: {
      10: '#ef4444',
    },
  },
};
