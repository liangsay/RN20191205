/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Test from "./pages/Test";
import FlatListApp from './pages/demo1/AppRoot';

AppRegistry.registerComponent(appName, () => FlatListApp);
