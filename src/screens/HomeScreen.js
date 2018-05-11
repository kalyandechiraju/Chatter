import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Container, Header, Body, Title, Content } from 'native-base'

export default class HomeScreen extends Component {
  state = {
    username: '',
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user)
        this.setState({ username: user.email })
      }
    })
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#1464FF' }}>
          <Body>
            <Title style={{ color: 'white' }}>Chatter</Title>
          </Body>
        </Header>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: '#1464FF' }}> Welcome {this.state.username}</Text>
        </View>
      </Container>
    )
  }
}
