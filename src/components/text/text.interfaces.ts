import {StyleProp, TextProps as NativeTextProps, TextStyle} from 'react-native';

export interface TextProps extends NativeTextProps {
  children?: string | number | string[];
  center?: boolean;
  color?: string;
  size?: number;
  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  paddingVertical?: number;
  paddingHorizontal?: number;
  style?: StyleProp<TextStyle>;
}
