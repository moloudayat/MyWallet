import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
// Styles
import { useStyle } from './index.style';

export type ButtonProps = {
  label: string;
  onPress?: () => void;
};

export default function Button({ label, onPress }: ButtonProps) {
  const styles = useStyle();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}
