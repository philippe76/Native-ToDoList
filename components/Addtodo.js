import React, { useState } from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';


const Addtodo = ({onAdd}) => {
    
    const [input, setInput] = useState('');

    const changeHandler = val => {
        setInput(val);
    }
    
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder='new todo ...' 
                onChangeText={changeHandler}
                value={input}
            />
            <Button title='ADD TODO' color='coral' onPress={()=> {
                {onAdd(input)};
                setInput('');
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

export default Addtodo;