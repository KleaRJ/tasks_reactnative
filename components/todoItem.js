import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity} from 'react-native';


export default function TodoItem({item, deleteHandler}) {
    return(
    <TouchableOpacity style={styles.item}>
        <Text style={styles.title}>{item.task}</Text>
        <Button
            style={styles.button}
            onPress={() => deleteHandler(item.id)} 
            title='DELETE' 
            color='black'
        />
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding: 10,
        marginTop: 16,
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'dashed',
        borderRadius: 10,
        backgroundColor: 'rgba(155,122,130,.4)',
       
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    title:{
        color: '#000',
        fontSize: 25,
    },

    button: {
        backgroundColor: 'rgba(155,122,130,1)',
    }
});