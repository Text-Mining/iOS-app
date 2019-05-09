import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import PageNavigator from './PageNavigator'

const RootNavigator = createStackNavigator({
  PageNavigator: {
    screen: PageNavigator
  }
}, {
  headerMode: 'none',
  initialRouteName: 'DrawerStack'
})

export default createAppContainer(RootNavigator)
