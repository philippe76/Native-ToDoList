import React, { useState } from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

const Addtodo = props => {
    
    const [input, setInput] = useState('');

    const changHandler = val => {
        setInput(val);
    }
    
    return (
        <View style={styles.container}>
            <TextInput placeholder='new todo ...' onChangeText={changHandler}/>
            <Button title='Add' onPress={()=> {props.onAdd(input)}}/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Addtodo;