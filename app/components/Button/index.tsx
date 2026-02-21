import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export type ButtonProps = {
  label: string;
  onPress?: () => void;
};

export default function Button({ label, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});
