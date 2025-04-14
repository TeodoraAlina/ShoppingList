import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem'
import uuid from 'react-native-uuid'

const App = () => {
  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Milk'},
    {id: uuid.v4(), text: 'Eggs'},
    {id: uuid.v4(), text: 'Bread'},
    {id: uuid.v4(), text: 'Juice'},
  ]);

  const deleteItem = (id: string) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };  

  return (
    <View style={styles.container}>
      <Header title="Shopping List"/>
      <FlatList 
        data={items} 
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;