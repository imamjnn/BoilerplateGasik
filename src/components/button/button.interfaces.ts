import {PressableProps, StyleProp, TextStyle, ViewStyle} from 'react-native';

export type ButtonTypeName = 'primary' | 'outline';
export type ButtonSizeName = 'normal' | 'small';

export interface ButtonProps extends PressableProps {
  text?: string;
  color?: string | undefined;
  type?: ButtonTypeName;
  size?: ButtonSizeName;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconRight?: string;
  iconLeft?: string;
}
