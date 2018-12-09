import { Navigation } from 'react-native-navigation';
import Auth from './src/screens/Auth';
import SharePlace  from "./src/screens/SharePlace/SharePlace";
import FindPlace  from "./src/screens/FindPlace/FindPlace";

//Register screens
Navigation.registerComponent('reactNativeDemo.AuthScreen', () => Auth );
Navigation.registerComponent('reactNativeDemo.SharePlaceScreen', () => SharePlace);
Navigation.registerComponent('reactNativeDemo.FindPlaceScreen', () => FindPlace);

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