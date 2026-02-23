/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './app/screens';
import { name as appName } from './app.json';
import Reactotron, { networking } from 'reactotron-react-native';

if (__DEV__) {
  Reactotron.configure() // controls connection & communication settings
    .useReactNative({ errors: false }) // add all built-in react native plugins
    .use(
      networking({
        ignoreContentTypes: /^(console.error:)\/.*$/i,
        ignoreUrls: /\/(logs|symbolicate|generate_204)$/,
      }),
    )
    .connect(); // let's connect!
}

AppRegistry.registerComponent(appName, () => App);
