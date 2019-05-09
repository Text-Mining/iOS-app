import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import App from '../App'
import { HomeScreen } from '../pages/Home'

const PageNavigator = createStackNavigator({
  Login: {
    screen: App
  },
  Home: {
    screen: HomeScreen
  },
}, {
  initialRouteName: 'Login'
})

export default createAppContainer(PageNavigator)
