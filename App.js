import React, { useState } from 'react';
import { FlatList, StyleSheet,  View, } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';


export default function App() {
  
  const [todos, setTodos] = useState([
    {id: '1', task: 'Make breakfast'},
    {id: '2', task: 'Cook'},
    {id: '3', task: 'Take out trash'},
    {id: '4', task: 'Dentist appointment'},
    {id: '5', task: 'Pick up the jacket from dry cleaning'},
    {id: '6', task: 'Do laundry'},
  ]);

 
  const deleteHandler = (id) =>{
    setTodos((prevTodos) => {
      return prevTodos.filter( todo => todo.id != id)
    })
  }

  const submitHandler = (task) => {
    if(task.length > 3){
    setTodos((prevTodos) => {
      return[
        { task: task, id: Math.random().toString()},
        ...prevTodos, 
      ]
    });
  }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} deleteHandler={deleteHandler}/>
            )}
          />
        </View>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },

  content:{
    padding:40,
    
  },

  list:{
    marginTop: 10,

  },

  item:{
    padding:30,
    backgroundColor: '#569',
    marginTop: 10,
  },

});
