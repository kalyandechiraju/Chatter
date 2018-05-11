import React, { Component } from 'react'
import { Text, View, Button, TextInput, Alert } from 'react-native'
import { Container } from 'native-base'
import Card from '../components/Card'
import CardItem from '../components/CardItem'

export default class LoginScreen extends Component {
  state = {}

  onLoginClick = () => {
    Alert.alert('Logged in')
  }

  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: 'green' }}>
        <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 48 }}>Chatter</Text>
        </View>
        <View style={{ flex: 5, padding: 20 }}>
          <Card>
            <CardItem>
              <View style={{ flex: 1, padding: 10, justifyContent: 'space-between' }}>
                <TextInput style={{ height: 40 }} placeholder="Username" />
                <TextInput style={{ height: 40 }} placeholder="Password" secureTextEntry />
              </View>
            </CardItem>
          </Card>
          <View style={{ flex: 1, marginTop: 20 }}>
            <Button title="Login" color="white" onPress={this.onLoginClick} />
          </View>
        </View>
      </Container>
    )
  }
}
