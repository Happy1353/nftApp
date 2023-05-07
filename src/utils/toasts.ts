import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

export const LoginInvalid = () => {
  Toast.show({
    type: 'error',
    text1: 'Error',
    text2: 'Your credentials invalid',
  });
};
