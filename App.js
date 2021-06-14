import * as React from 'react';
import { Image } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteScreen from './screens/writeScreen';
import ReadScreen from './screens/readScreen';
import LoginScreen from './screens/loginScreen';

export default class App extends React.Component {
  render(){
  return (
      <AppContainer />
  );
}
}

const TabNavigator = createBottomTabNavigator({
  Write: WriteScreen,
  Read: ReadScreen,
},

{
  defaultNavigationOptions: ({navigation})=>({
  tabBarIcon: ({})=>{
    const routeName = navigation.state.routeName
    if(routeName==="Write"){
      return(
        <Image source = {require('./assets/write.png')} style = {{width:32, height:32}}/>
        );
      }
      else if(routeName==="Read"){
        return(
          <Image source = {require('./assets/read.png')} style = {{width:32, height:32}}/>
        );
      }
    },
  })
});

const switchNavigator = createSwitchNavigator({
  LoginScreen: LoginScreen,
  TabNavigator: TabNavigator,
});

const AppContainer = createAppContainer(switchNavigator);