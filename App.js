import { Navigation } from 'react-native-navigation';
import Auth from './src/screens/Auth';
import SharePlace  from "./src/screens/SharePlace/SharePlace";
import FindPlace  from "./src/screens/FindPlace/FindPlace";
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';

const store = configureStore();

//Register screens
Navigation.registerComponentWithRedux('reactNativeDemo.AuthScreen', () => Auth, Provider, store );
Navigation.registerComponentWithRedux('reactNativeDemo.SharePlaceScreen', () => SharePlace, Provider, store );
Navigation.registerComponentWithRedux('reactNativeDemo.FindPlaceScreen', () => FindPlace, Provider, store );

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [{
            component: {
              name: 'reactNativeDemo.AuthScreen',
              passProps: {
                text: 'stack with one child'
              }
            }
          }],
          options: {
            topBar: {
              title: {
                text: 'Welcome screen'
              }
            }
          }
        }
      }
    });
  });