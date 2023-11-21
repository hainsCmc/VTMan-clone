import React from 'react';
import {Keyboard, Platform} from 'react-native';

export const useKeyboardBottomInset = () => {
  const [bottom, setBottom] = React.useState(0);
  const subscriptions = React.useRef([]);
  const [keyboardIsShow, setKeyBoardIsShow] = React.useState(false);

  React.useEffect(() => {
    subscriptions.current = [
      Keyboard.addListener('keyboardDidHide', e => {
        setKeyBoardIsShow(false);
        setBottom(0);
      }),
      Keyboard.addListener('keyboardDidShow', e => {
        setKeyBoardIsShow(true);
        if (Platform.OS === 'android') {
          setBottom(e.endCoordinates.height);
        } else {
          setBottom(
            Math.max(e.startCoordinates.height, e.endCoordinates.height),
          );
        }
      }),
    ];

    return () => {
      subscriptions.current.forEach(subscription => {
        subscription.remove();
      });
    };
  }, [setBottom, subscriptions]);

  return {bottom, keyboardIsShow};
};
