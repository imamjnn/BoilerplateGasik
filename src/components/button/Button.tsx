/* eslint-disable react-native/no-inline-styles */
import colors from '@themes/colors';
import React from 'react';
import {Pressable, View} from 'react-native';
import Text from '../text/Text';
import {ButtonProps} from './button.interfaces';
import {buttonDisable, buttonSize, buttonTypes} from './button.styles';
import Icon from 'react-native-vector-icons/Ionicons';

const Button = (props: ButtonProps) => {
  const {
    text = 'Button',
    type = 'primary',
    size = 'normal',
    style: styleOverride,
    textStyle: textStyleOverride,
    iconRight,
    iconLeft,
    ...rest
  } = props;

  const checkStyles = rest.disabled ? 'disable' : type;
  const viewStyles =
    checkStyles === 'disable' ? buttonDisable : buttonTypes[type];
  const textColor = rest.disabled
    ? colors.grey600
    : type === 'outline'
    ? colors.primary
    : colors.grey100;
  const textSize = size === 'small' ? 14 : 18;
  const iconSize = size === 'small' ? 18 : 24;

  return (
    <View style={[viewStyles, buttonSize[size], styleOverride]}>
      <Pressable
        style={{width: '100%', flexDirection: 'row', justifyContent: 'center'}}
        android_ripple={{
          color: colors.error,
          borderless: true,
        }}>
        {iconLeft && <Icon name={iconLeft} size={iconSize} color={textColor} />}
        <Text
          style={[
            {color: textColor, fontSize: textSize, marginHorizontal: 8},
            textStyleOverride,
          ]}
          weight="600"
          color={textColor}
          size={textSize}>
          {text}
        </Text>
        {iconRight && (
          <Icon name={iconRight} size={iconSize} color={textColor} />
        )}
      </Pressable>
    </View>
  );
};

export default Button;
