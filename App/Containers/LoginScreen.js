import React, { Component } from 'react'
import { Button, Text } from 'native-base'
import { ScrollView, TextInput } from 'react-native'
import { connect } from 'react-redux'
// Styles
import styles from './Styles/LoginScreenStyle'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

class LoginScreen extends Component {
  state = {
    email: 'a@a.com',
    password: 'password'
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>ورود به سیستم</Text>
        <TextInput style={styles.textInputUser}
          onChangeText={(text) => this.setState({ email: text })}
          placeholder='Email'
          value={this.state.email}

        />
        <TextInput style={styles.textInputPassword}
          onChangeText={(text) => this.setState({ password: text })}
          placeholder='Password'
          value={this.state.password}
        />
        <Button block success style={styles.buttonLogin} onPress={this.login}>
          <Text>ورود</Text>
        </Button>
        <Text style={{ color: 'white' }}>
          fetching : {this.getFetching()}
          token : {this.getToken()}
        </Text>
      </ScrollView>
    )
  }

  constructor (props) {
    super(props)
    this.state = {}
    this.login = this.login.bind(this)
    this.getFetching = this.getFetching.bind(this)
  }

  login () {
    console.log(this.props)
    // this.props.store.dispatch({ type: 'USER_REQUEST' })
    this.props.login(this.state)
  }

  getFetching () {
    if (this.props.loginStore) { return this.props.loginStore.fetching }
    return 'its null'
  }

  getToken () {
    if (this.props.loginStore) { return this.props.loginStore.token }
    return 'its null'
  }
}

const mapStateToProps = (state) => {
  const { Login } = state
  return {
    loginStore: Login
  }
}

const mapDispatchToProps = (dispatch, state) => {
  console.log(this.state)
  return {
    login: (state) => dispatch({ type: 'USER_REQUEST', email: state.email, password: state.password })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
