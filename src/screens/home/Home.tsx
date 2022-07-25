import React from 'react';
import {Button, View} from 'react-native';
import {Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '@navigation/AppNavigation';

const Home = () => {
  const navigation = useNavigation<AppNavigationProps>();
  return (
    <View>
      <Text center>Boilerplate Gasik by Imam Jinani</Text>
      <Button title="Example" onPress={() => navigation.navigate('Example')} />
    </View>
  );
};

export default Home;
