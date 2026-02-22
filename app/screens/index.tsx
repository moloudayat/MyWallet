import * as React from 'react';
// Utilities
import {
  createStaticNavigation,
  type StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import SignUp from './SignUp';
import Wallet from './Wallet';

const RootStack = createNativeStackNavigator({
  screens: {
    SignUp,
    Wallet,
  },
});

const Navigation = createStaticNavigation(RootStack);

export type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function App() {
  return <Navigation />;
}
