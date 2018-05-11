import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'
import { Container } from 'native-base'
import { config } from './firebaseConfig'
import LoginScreen from './src/screens/LoginScreen'

firebase.initializeApp(config)

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu',
// })

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
})

// type Props = {};
export default class App extends Component {
  componentDidMount() {}

  isUserLoggedIn = () => {
    if (firebase.auth().currentUser) {
      return true
    }
    return false
  }

  render() {
    if (this.isUserLoggedIn) {
      return <Container>{!this.isUserLoggedIn() && <LoginScreen />}</Container>
    }
    return (
      <View>
        <Text>Welcome</Text>
      </View>
    )
  }
}
