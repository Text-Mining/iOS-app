import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import Login from '../Login'
import { HomeScreen } from '../pages/Home'

const PageNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Home: {
    screen: HomeScreen
  },
}, {
  initialRouteName: 'Login'
})

export default createAppContainer(PageNavigator)
