import colors from '@themes/colors';
import {ViewStyle} from 'react-native';
import {ButtonSizeName, ButtonTypeName} from './button.interfaces';

const BUTTON_NORMAL: ViewStyle = {
  height: 48,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  marginBottom: 10,
  width: '100%',
  elevation: 4,
};

const BUTTON_SMALL: ViewStyle = {
  height: 38,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  marginBottom: 10,
  elevation: 4,
};

export const buttonSize: Record<ButtonSizeName, ViewStyle> = {
  normal: {...BUTTON_NORMAL},
  small: {...BUTTON_SMALL},
};

export const buttonTypes: Record<ButtonTypeName, ViewStyle> = {
  primary: {...BUTTON_NORMAL, backgroundColor: colors.primary},
  outline: {
    ...BUTTON_NORMAL,
    backgroundColor: 'transparent',
    borderWidth: 1.8,
    borderColor: colors.primary,
  },
};

export const buttonDisable: ViewStyle = {
  backgroundColor: colors.grey400,
};
