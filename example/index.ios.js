/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Toggle from 'react-native-toggler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class example extends Component {
  constructor () {
    super ()
    this.toggleStates = [
     {
       onToggle: () => console.log(''),
       label: 'Sign up for free offers?',
       component: <MaterialIcons name='check-box-outline-blank' size={35} color='green'/>
     },
     {
       onToggle: () => console.log(''),
       label: 'Yes, I want me some more spam!!!!',
       component: <MaterialIcons name='check-circle' size={35} color='green'/>
     }
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Toggle toggleStates={this.toggleStates} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('example', () => example);
