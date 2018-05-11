import React, { Component } from 'react'
import { Text, View, Button, TextInput, Alert } from 'react-native'
import { Container, Content } from 'native-base'
import firebase from 'firebase'
import Card from '../components/Card'
import CardItem from '../components/CardItem'

export default class LoginScreen extends Component {
  state = {
    mode: 0,
    primaryButtonText: 'Login',
    secondaryButtonText: 'New User? Signup here',
    email: '',
    password: '',
    confirmedPassword: '',
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        Alert.alert(user.email)
      } else {
        Alert.alert('Not signed in')
      }
    })
  }

  onPrimaryButtonClick = () => {
    if (this.state.mode === 0) {
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(error => {
              Alert.alert(error.message)
            })
        })
    }
  }

  onSecondaryButtonClick = () => {
    if (this.state.mode === 0) {
      this.setState({
        mode: 1,
        primaryButtonText: 'SignUp',
        secondaryButtonText: 'Have an account? Login',
      })
    } else {
      this.setState({
        mode: 0,
        primaryButtonText: 'Login',
        secondaryButtonText: 'New User? Signup here',
      })
    }
  }

  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: '#1464FF' }}>
        <Content contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 48 }}>Chatter</Text>
          </View>
          <View style={{ flex: 4, padding: 20 }}>
            <Card>
              <CardItem>
                <View style={{ flex: 1, padding: 10, justifyContent: 'space-between' }}>
                  <TextInput
                    style={{ height: 40 }}
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                  />
                  <TextInput
                    style={{ height: 40 }}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={password => this.setState({ password })}
                  />
                  {/* Sign up mode */}
                  {this.state.mode === 1 && (
                    <TextInput
                      style={{ height: 40 }}
                      placeholder="Confirm Password"
                      secureTextEntry
                      onChangeText={confirmedPassword => this.setState({ confirmedPassword })}
                    />
                  )}
                </View>
              </CardItem>
            </Card>
            <View
              style={{
                flex: 1,
                marginTop: 20,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Button
                title={this.state.primaryButtonText}
                color="white"
                onPress={this.onPrimaryButtonClick}
              />
              <Text
                style={{ color: 'white', textDecorationLine: 'underline', marginTop: 10 }}
                onPress={this.onSecondaryButtonClick}
              >
                {this.state.secondaryButtonText}
              </Text>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}
