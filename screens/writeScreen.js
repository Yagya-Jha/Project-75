import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, ToastAndroid, Alert } from 'react-native'
import * as firebase from 'firebase'
import db from '../config';

export default class WriteScreen extends React.Component {
  constructor(){
    super();
    this.state = {author: '', tittle: '', story: ''};
  }

  submitStory = async () =>{
    db.collection("stories").add({
      'Author': this.state.author,
      'Date':  firebase.firestore.Timestamp.now().toDate(),
      'Story': this.state.story,
      'Tittle': this.state.tittle,
    });
    ToastAndroid.show("Story Successfully Submitted", ToastAndroid.SHORT);
    this.setState({
      author: '',
      tittle: '',
      story: '',
    })
  }

  render(){
    return (
        <View style={styles.container}>
          <View>
         <Text 
         style = {{textAlign:"center",
                   marginTop:-15,
                   alignSelf:"center",
                   fontSize:50, 
                   fontWeight:"bold",
                   width:400, 
                   backgroundColor:"pink"}}>
                     Bed Time Stories</Text>
        </View>
        <KeyboardAvoidingView>
          <View style = {styles.inputView}>
            <TextInput style = {styles.inputBox} 
                       placeholder = "Story Tittle" 
                       multiline = {false} 
                       onChangeText = {(text)=>{
                         this.setState({tittle: text})
                       }}></TextInput>
          </View>
          <View style = {styles.inputView}>
            <TextInput 
                      style = {styles.inputBox} 
                      placeholder = "Author" 
                      multiline = {false}
                      onChangeText = {(text)=>{
                        this.setState({author: text})
                      }}></TextInput>
          </View>
          <View style = {styles.inputBox} style = {styles.inputView}>
            <TextInput 
                      style = {styles.storyinputBox} 
                      placeholder = "Write your story here" 
                      multiline = {true}
                      onChangeText = {(text)=>{
                        this.setState({story: text})
                      }}></TextInput>
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity 
        style = {styles.submit}
        onPress = {this.submitStory}>
      <Text style = {{marginTop: 10}}>
        Submit
      </Text>
    </TouchableOpacity>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    padding: 8,
    alignItems: "center"
  },
  inputView: {
    flexDirection: "row",
    marginTop:20,
  },
  inputBox: {
    width:"100%",
    height: 40,
    borderWidth:4,
    fontSize: 25,
  },
  storyinputBox: {
    width:"100%",
    height: 350,
    borderWidth:4,
    fontSize: 25,
  },
  submit: {
    borderRadius: 10,
    width:100,
    height:55,
    alignSelf:"center",
    alignItems:"center",
    backgroundColor:"pink",
  }
});
