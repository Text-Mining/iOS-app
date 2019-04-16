import React, { Component } from 'react'
import { FlatList, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Styles
import styles from './Styles/HomePageStyle'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

class HomePage extends Component {
  constructor (props) {
    super(props)

    this.state = {}
    console.log('before')
    this.props.tag_request(this.state)
    console.log('after')
  }

  words () {
    if (this.props.tagsStore.payload) {
      return (
        <FlatList
          data={this.props.tagsStore.payload.words}
          renderItem={({ item }) => <Text>{item.Word}</Text>}
        />

      )
    } else {
      return (
        <Text>
          Empty
        </Text>
      )
    }
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        {this.words()}
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
  return {
    tag_request: () => dispatch({ type: 'TAGS_REQUEST' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
