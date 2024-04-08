import React, { useState } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import CustomList from './components/listComponent';



export default function App() {
  const [ListData1, setListData1] = useState([
    { name: 'Burger', img: require("./assets/burger1.webp")},
    { name: 'Kebab', img: require("./assets/kebab.jpg") },
    { name: 'Burger', img:require("./assets/burger1.webp") },
    { name: 'Kebab', img: require("./assets/kebab.jpg")}
  ]);

  const [ListData2, setListData2] = useState([
    { name: 'Monsterra Patty', img: require("./assets/burger2.webp") },
    { name: 'Hukl Burger', img: require("./assets/burger2.webp") },
    { name: 'Monsterra Patty', img: require("./assets/burger2.webp") },
    { name: 'Hukl Burger', img: require("./assets/burger2.webp") },
  ]);

  const [ListData3, setListData3] = useState([
    { name: 'Vege Burger', img: require("./assets/burger3.jpg") },
    { name: 'Vege Burger', img: require("./assets/burger3.jpg") },
    { name: 'Vege Burger', img: require("./assets/burger3.jpg") },
    { name: 'Vege Burger', img: require("./assets/burger3.jpg") },
  ]);

  return (
    <View style={styles.List}>
      <Text style={styles.text}>Food Category</Text>
      <CustomList data={ListData1} horizontal={true} />
      <Text style={styles.text}>Popular Food</Text>
      <CustomList data={ListData2} horizontal={true} />
      <Text style={styles.text}>Best Seller</Text>
      <CustomList data={ListData3} horizontal={false} /> 
    </View>

  );
}

const styles = StyleSheet.create({
  List: {
    padding: 10,
  },
  text: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  
});
