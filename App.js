import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomList from './components/listComponent';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  const [ListData1, setListData1] = useState([
    { name: 'Burger', imageUri: 'https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg' },
    { name: 'Kebab', imageUri: 'https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg' },
    { name: 'Burger', imageUri: 'https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg' },
    { name: 'Kebab', imageUri: 'https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg' },
  ]);

  const [ListData2, setListData2] = useState([
    { name: 'Monsterra Patty', imageUri: 'https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg' },
    { name: 'Hukl Burger', imageUri: 'https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg' },
    { name: 'Monsterra Patty', imageUri: 'https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg' },
    { name: 'Hukl Burger', imageUri: 'https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg' },
  ]);

  const [ListData3, setListData3] = useState([
    { name: 'Vege Burger', imageUri: 'https://healthfulblondie.com/wp-content/uploads/2021/06/best-no-bean-veggie-burgers-TN.jpg' },
    { name: 'Vege Burger', imageUri: 'https://healthfulblondie.com/wp-content/uploads/2021/06/best-no-bean-veggie-burgers-TN.jpg' },
    { name: 'Vege Burger', imageUri: 'https://healthfulblondie.com/wp-content/uploads/2021/06/best-no-bean-veggie-burgers-TN.jpg' },
    { name: 'Vege Burger', imageUri: 'https://healthfulblondie.com/wp-content/uploads/2021/06/best-no-bean-veggie-burgers-TN.jpg' },
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
