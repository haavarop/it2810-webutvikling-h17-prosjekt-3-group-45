import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import uuid from 'uuid';


class Todos extends React.Component{


  constructor(props){
    super(props);
    this.state={
      todos: [
      {id: uuid.v4(), title: 'Make todolist', description: 'Tødden Tøddvik has to make the todolist'},
      {id: uuid.v4(), title: 'Handle contacts', description: 'Ugle McUglesen \'boutta hook us up with contact info'},
      {id: uuid.v4(), title: 'Hans Vette', description: 'Slap him in the 4Head'}
      ]
    }
  }

  handleAddTodo(todo){
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({todos: todos});
  }

  handleDeleteTodo(id){
    let todos = this.state.todos;
    let index = todos.findIndex(x => x.id === id);
    todos.splice(index, 1);
    this.setState({todos: todos});
  }

  render(){

    let todoItems;
    if(this.state.todos){
      todoItems = this.state.todos.map(todo => {
        return(
          <TodoItem onDelete={this.handleDeleteTodo.bind(this)} key={todo.id} todo={todo}/>
        )
      });
    }

    return (
      <ScrollView style={styles.container}>
        <AddTodo addTodo={this.handleAddTodo.bind(this)}/>
        {todoItems}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignSelf : 'flex-start',
    flexWrap : 'wrap',
    paddingLeft: 20,
    paddingRight : 20,
  },
});

export default Todos;
