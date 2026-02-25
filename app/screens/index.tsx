import * as React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider, useTheme } from 'app/theme';
import { Provider } from 'react-redux';
import { store } from 'app/store';
// Utilities
import {
  createStaticNavigation,
  type StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import SignUp from './SignUp';
import Wallet from './Wallet';
import Audit from './Audit';
import QRCode from './QRCode';

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    SignUp,
    Wallet,
    Audit,
    QRCode,
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
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppShell />
      </ThemeProvider>
    </Provider>
  );
}

function AppShell() {
  const { isDark, colors } = useTheme();

  return (
    <>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <Navigation />
    </>
  );
}
