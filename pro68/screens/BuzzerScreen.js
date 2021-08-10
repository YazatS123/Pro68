import * as React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import AppHeader from '../components/AppHeader'
export default class Screen2 extends React.Component {
  render(){
    return(
      <View>
        <AppHeader/>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{marginTop: 50}}>Instagram Screen</Text>
        </View>
      </View>
    )
  }
}
