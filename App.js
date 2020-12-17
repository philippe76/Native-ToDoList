import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Addtodo from './components/Addtodo';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'drink coffee', key: '1' },
    { text: 'code an app', key: '2' },
    { text: 'read some book', key: '3' }
  ]);

  const deleteItem = key => {
    setTodos(prevState => {
      return prevState.filter(item => item.key !== key)
    })
  }

  const addItem = input => {
    console.log(input);
    setTodos(prevState => {
      return [...prevState, {text: input, key: input}]
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
          <FlatList
            data={todos}
            renderItem={({item}) => <TodoItem item={item.text} onDelete={()=>deleteItem(item.key)}/>}
          />
          <Addtodo onAdd={addItem}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 40,
    marginTop: 20
  }
});
