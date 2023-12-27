import React from 'react';
import {
  Dimensions,
  Image,
  ImageProps as ImagePropsRN,
  ImageStyle,
} from 'react-native';

export interface ImageProps extends ImageStyle {
  _props: ImagePropsRN;
  source: any;
  fullScreen: boolean;
}

export const ScaleImage = (props: Partial<ImageProps>) => {
  const {_props, source, fullScreen, ...rest} = props;

  const {width: widthScreen} = Dimensions.get('window');
  const {width, height} = Image.resolveAssetSource(source);
  if (!fullScreen) {
    return (
      <Image
        source={source}
        {..._props}
        style={[{width: width, height: height}, {...rest}]}
      />
    );
  } else {
    const scale = widthScreen / width;
    return (
      <Image
        source={source}
        style={[{width: widthScreen, height: height * scale}, {...rest}]}
      />
    );
  }
};
