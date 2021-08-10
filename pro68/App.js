import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import db from './Config';
import { createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import HomeScreen from './screens/HomeScreen';
import Screen2 from './screens/BuzzerScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppContainer />
      </View>
    );
  }
}

var TabNavigator = createBottomTabNavigator({
  Facebook: {screen: HomeScreen},
  Instagram: {screen: Screen2},
});

const AppContainer = createAppContainer(TabNavigator);
