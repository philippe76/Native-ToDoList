import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'


const TodoItem = ({ item, onDelete }) => {

    return (

            <View style={styles.item}>
                <Text>{item}</Text>
                <MaterialIcons name="delete" size={24} color="#aaa"  onPress={() => onDelete()}/>
            </View>         

    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})


export default TodoItem;

