import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import App from '../App'
import { HomeScreen } from '../pages/Home'

const AppNavigator = createStackNavigator({
  Login: {
    screen: App
  },
  Home: {
    screen: HomeScreen
  }
})

export default createAppContainer(AppNavigator)
