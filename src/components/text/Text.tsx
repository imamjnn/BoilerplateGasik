/* eslint-disable react-native/no-inline-styles */
import colors from '@themes/colors';
import React from 'react';
import {Text as NativeText} from 'react-native';
import {TextProps} from './text.interfaces';

const Text = (props: TextProps) => {
  const {
    children,
    center = false,
    style: styleOverride,
    paddingVertical = 0,
    paddingHorizontal = 0,
    size = 16,
    color = colors.grey600,
    weight = 'normal',
    ...rest
  } = props;
  return (
    <NativeText
      style={[
        center && {textAlign: 'center'},
        {
          paddingVertical,
          paddingHorizontal,
          fontSize: size,
          color,
          fontWeight: weight,
        },
        styleOverride,
      ]}
      allowFontScaling={false}
      {...rest}>
      {children}
    </NativeText>
  );
};

export default Text;
