import {Dimensions} from 'react-native';
import {scale} from 'react-native-size-matters';

export const MY_WIDTH = Dimensions.get('window').width;
export const MY_HEIGHT = Dimensions.get('window').height;

export default {
  myWidth: MY_WIDTH,
  myHeight: MY_HEIGHT,
  font: {
    tiny: scale(10),
    small: scale(12),
    normal: scale(14),
    medium: scale(16),
    large: scale(18),
    xLarge: scale(20),
  },
  metric: {
    tiny: scale(4),
    small: scale(10),
    medium: scale(16),
    large: scale(20),
    xLarge: scale(24),
    xxLarge: scale(32),
  },
};
