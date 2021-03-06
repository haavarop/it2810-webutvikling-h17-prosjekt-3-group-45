import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import uuid from 'uuid';


class Notes extends Component{
  constructor(props){
    super(props);
    this.state={
      notes: [
        {id: uuid.v4(), title: 'Make todolist', description: 'Tødden Tøddvik has to make the todolist'},
        {id: uuid.v4(), title: "Make things great again", description : "Become president on day"},
        {id: uuid.v4(), title: "Make things great again", description : "Become president on day"},
        {id: uuid.v4(), title: "Make things great again", description : "Become president on day"}
      ]
    }
  }

  handleAddNote(note){
    let notes = this.state.notes;
    notes.push(note);
    this.setState({notes: notes});
  }

  handleDeleteNote(id){
    let notes = this.state.notes;
    let index = notes.findIndex(x => x.id === id);
    notes.splice(index, 1);
    this.setState({notes: notes});
  }

  render(){
    let noteItems;
    if(this.state.notes){
      noteItems = this.state.notes.map(note => {
        return(
          <NoteItem onDelete={this.handleDeleteNote.bind(this)} key={note.id} note={note}/>
        )
      });
    }

    return (
      <ScrollView style={styles.container}>
        <AddNote addNote={this.handleAddNote.bind(this)}/>
        {noteItems}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignSelf : 'flex-start',
    paddingLeft: 20,
    paddingRight : 20,
  },
});

export default Notes;
