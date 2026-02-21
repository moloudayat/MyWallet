import React from 'react';
import { View, StyleSheet } from 'react-native';

export type WrapperProps = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
