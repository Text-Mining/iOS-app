/**
 * @format
 */

import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import RootNavigator from './navigators/RootNavigator'

AppRegistry.registerComponent(appName, () => RootNavigator)
