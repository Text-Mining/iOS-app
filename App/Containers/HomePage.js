import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Styles
import styles from './Styles/HomePageStyle'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

class HomePage extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>{this.props.loginStore.token}</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  const { Login } = state
  const { Tags } = state
  return {
    loginStore: Login,
    tagsStore: Tags
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(this.state)
  return {
    login: (state) => dispatch({ type: 'USER_REQUEST', email: state.email, password: state.password })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
