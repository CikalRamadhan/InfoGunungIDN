import React from 'react';
import { View, Text, FlatList } from 'react-native';
import gunungData from '../services/gunungData';

const GunungDetailScreen = ({ route }) => {
  const { gunungId } = route.params;
  const gunung = gunungData.find(g => g.id === gunungId);

  return (
    <View>
      <Text>Name: {gunung.name}</Text>
      <Text>Height: {gunung.height}</Text>
      <Text>Location: {gunung.location}</Text>
      <Text>Description: {gunung.description}</Text>
      <Text>Routes:</Text>
      <FlatList
        data={gunung.routes}
        renderItem={({ item }) => (
          <View>
            <Text>Route: {item.name}</Text>
            <Text>Price: {item.price}</Text>
            <Text>Duration: {item.duration}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default GunungDetailScreen;
