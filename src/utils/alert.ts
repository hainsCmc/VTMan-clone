import Toast from 'react-native-toast-message';

type AlertVariant = 'success' | 'error' | 'info' | 'warning';

export const showAlert = (message: string, variant: AlertVariant = 'error') => {
  Toast.show({
    type: variant,
    text1: message,
    autoHide: true,
  });
};
