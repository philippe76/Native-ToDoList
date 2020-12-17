import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem'

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'drink coffee', key: '1' },
    { text: 'code an app', key: '2' },
    { text: 'read some book', key: '3' }
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* <View style={styles.list}> */}
          <FlatList
            data={todos}
            renderItem={({item}) => <TodoItem item={item.text}/>}
          />
        {/* </View> */}
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
