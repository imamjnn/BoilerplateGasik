/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from '@components';
import colors from '@themes/colors';

const Example = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Example</Text>
      <View>
        <Button
          text="Add"
          iconRight="add-circle"
          iconLeft="add-circle"
          style={{borderRadius: 4, width: 140}}
          // type="outline"
          size="normal"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 12,
    backgroundColor: colors.grey100,
  },
});

export default Example;
