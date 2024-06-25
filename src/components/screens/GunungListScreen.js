import React from 'react';
import { View, FlatList } from 'react-native';
import GunungItem from '../components/GunungItem';
import gunungData from '../services/gunungData';

const GunungListScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={gunungData}
        renderItem={({ item }) => (
          <GunungItem
            gunung={item}
            onPress={() => navigation.navigate('Gunung Detail', { gunungId: item.id })}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default GunungListScreen;
