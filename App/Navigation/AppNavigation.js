import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomePage from '../Containers/HomePage'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  HomePage: { screen: HomePage },
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomePage',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
