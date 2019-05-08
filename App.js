/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Button, Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import { loginCall } from './rest/LoginRest'
import { TM_PASSWORD, TM_USERNAME } from './AppConfig'
import { getLoginService, getToken } from './database/services/LoginService'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

type Props = {};
export default class App extends Component<Props> {
  state = {
    email: 'a@a.com',
    password: 'a@a.com',
  }

  componentDidMount (): void {
    this.setState({
      email: TM_USERNAME,
      password: TM_PASSWORD
    })
    this.login = this.login.bind(this)
    this.logedIn = this.logedIn.bind(this)
    getLoginService().then((realm) => {
      if (realm.objects('LoginModel').length) {
        let Length = realm.objects('LoginModel').length
        let lastItem = realm.objects('LoginModel')[Length-1].token
        this.logedIn()
      }
    })
  }

  logedIn () {
    this.props.navigation.navigate('Home')
  }

  login () {
    loginCall(this.state.email, this.state.password).then((data) => {
      getLoginService().then((realm) => {
        realm.write(() => {
          realm.create('LoginModel', {
            token: data.data.token
          })
          alert('welcome')
        })
      })
    }).catch(() => {

    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Login To Text-Mining</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ email: text })}
          value={this.state.email}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
        />

        <Button
          onPress={this.login}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />


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
})
