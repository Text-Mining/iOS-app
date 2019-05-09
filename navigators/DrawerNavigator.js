import React from 'react'
import { createAppContainer, createDrawerNavigator } from 'react-navigation'
import PageNavigator from './PageNavigator'
import { AboutScreen } from '../pages/AboutScreen'

const Menu = createDrawerNavigator(
  {
    'RootContainer': { screen: PageNavigator },
    'About': { screen: AboutScreen }
  },
  {
    drawerWidth: 300,
    drawerPosition: 'left',
    initialRouteName: 'RootContainer'
  }
)
export default createAppContainer(Menu)
