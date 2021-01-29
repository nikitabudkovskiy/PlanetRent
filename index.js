/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { WebComponent } from './src/module/main/view/WebComponent'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => WebComponent);
