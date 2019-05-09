/**
 * @format
 */

import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import DrawerNavigator from './navigators/DrawerNavigator'

AppRegistry.registerComponent(appName, () => DrawerNavigator)
