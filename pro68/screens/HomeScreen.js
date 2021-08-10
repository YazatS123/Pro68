import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
export default class HomeScreen extends React.Component {
  render() {
    return(
      <View>
        <AppHeader/>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{marginTop: 50}}>Facebook Screen</Text>
        </View>
      </View>
    )
  }
}