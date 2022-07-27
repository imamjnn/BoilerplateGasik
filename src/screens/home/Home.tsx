import React from 'react';
import {View} from 'react-native';
import {Button, Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '@navigation/AppNavigation';
import homeStyles from './home.styles';
import colors from '@themes/colors';

const Home = () => {
  const navigation = useNavigation<AppNavigationProps>();
  return (
    <View style={homeStyles.container}>
      <Text center>Boilerplate Gasik by Imam Jinani</Text>
      <Button
        text="Example"
        onPress={() => navigation.navigate('Example')}
        style={{backgroundColor: colors.grey100}}
        textStyle={{color: colors.black}}
      />
    </View>
  );
};

export default Home;
