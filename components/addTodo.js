import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

export default function AddTodo({submitHandler}) {
    const[text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='Enter another task...'
                onChangeText={changeHandler}
            />
            <Button 
                style={styles.button}
                onPress={() => submitHandler(text)} 
                title='Add the task' 
                color='rgba(86,56,90,.8)'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#2c5223',

        fontSize: 20,
        
    },
    button:{
        fontSize: 20,
    }
});