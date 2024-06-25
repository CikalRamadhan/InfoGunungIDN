import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to InfoGunungIDN</Text>
      <Button
        title="Go to Gunung List"
        onPress={() => navigation.navigate('Gunung List')}
      />
    </View>
  );
};

export default HomeScreen;
