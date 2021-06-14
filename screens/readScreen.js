import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList, TextInput } from 'react-native';
import db from '../config';

export default class SearchScreen extends React.Component {
  constructor(){
    super();
    this.state = {allstories : [], laststories: null, search: ''};
  }

  fetchMorestories = async () =>{
    var text = this.state.search;
    const transcation = await db.collection("stories").where('tittle', '==', text).get();
    transcation.docs.map((doc) =>{
    this.setState({allstories: [this.state.allstories,doc.data()], lasttransaction: doc});
      });    
  }

  searchTransaction =  async (text) =>{
    var text = text;
      const transcation = await db.collection("stories").where('Tittle', '==', text).get();
  
      transcation.docs.map((doc) =>{
        this.setState({allstories: [this.state.allstories,doc.data()], lasttransaction: doc});
      });
}

  render(){
    return(
      <View style = {styles.container}>
        <View>
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
          <TextInput
                    style = {styles.input}
                     placeholder = "Search Here..."
                     onChangeText = {(text)=>{
                       this.setState({search: text});
                     }}></TextInput>
                     <TouchableOpacity style = {styles.button} onPress = {()=>{this.searchTransaction(this.state.search)}}>
                       <Text style = {styles.buttonText}>Search</Text>
                     </TouchableOpacity>
        </View>
      <FlatList
      data = {this.state.allstories}
      renderItem = {({item})=>(          
      <View>
        <Text style = {{marginTop:50}}>{"Title: "+item.Tittle}</Text>
        <Text>{"Story: "+ item.Story}</Text>
        <Text>{"Date: "+ item.Date}</Text>
       <Text>{"Author: "+ item.Author}</Text>
      </View>
      )}
      keyExtractor = {(item, index)=> index.toString()}
      onEndReached = {this.fetchMorestories}
      onEndReachedThreshold = {0.7}
        />
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
  buttonText: {
    fontSize:25,
    alignSelf:"center",
    fontWeight:"bold",
    color:"black",
  },
  button: {
    marginTop:50,
    borderRadius: 50,
    width:200,
    alignSelf:"center",
    alignItems:"center",
    backgroundColor:"orange",
  },
  input: {
    marginTop:100,
    borderWidth: 5
  }
});