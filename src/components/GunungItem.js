import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const GunungItem = ({ gunung, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{gunung.name}</Text>
      <Text>{gunung.height}</Text>
      <Text>{gunung.location}</Text>
    </TouchableOpacity>
  );
};

export default GunungItem;
