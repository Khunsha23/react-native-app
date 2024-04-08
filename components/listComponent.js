import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

export default function CustomList({ data, horizontal }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.imageUri }} style={styles.image} />
          <Text style={styles.item}>{item.name}</Text>
        </View>
      )}
      horizontal={horizontal}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 70, 
    height: 70, 
    marginRight: 10,
    borderRadius: 35,
  },
  item: {
    fontSize: 15,
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  popularFood:
  {
    
  }
});
