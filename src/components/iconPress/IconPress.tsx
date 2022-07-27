import colors from '@themes/colors';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {IconButtonProps} from 'react-native-vector-icons/Icon';
import IonIcon from 'react-native-vector-icons/Ionicons';

interface IconPressProps extends IconButtonProps {
  size?: number;
  color?: string;
  onPress?: () => void;
}

const IconPress = ({
  name = 'heart',
  size = 20,
  color = colors.black,
  onPress,
  ...rest
}: IconPressProps) => {
  return (
    <View
      style={[styles.container, {height: size + 6, width: size + 6, borderRadius: size + 6 / 2}]}>
      <Pressable
        android_ripple={{color: colors.grey400, borderless: true}}
        onPress={onPress}
        style={[styles.container]}>
        <IonIcon {...rest} name={name} size={size} color={color} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 0.2,
  },
});

export default IconPress;
