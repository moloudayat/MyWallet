import * as React from 'react';
// Utilities
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import SignUp from './SignUp';

const RootStack = createNativeStackNavigator({
  screens: {
    SignUp: SignUp,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
