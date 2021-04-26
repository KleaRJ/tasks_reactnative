import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
    return(
    <View style={styles.header}>
        <Text style={styles.title}>My Tasks App</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 120,
        paddingTop: 50,
        backgroundColor: 'rgba(160,143,148,.86)',
        
    },

    title:{
        color: '#3f2e2e',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});