import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
// Styles
import { useStyle } from './index.style';

export type ButtonProps = {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
};

export default function Button({ label, onPress, disabled }: ButtonProps) {
  const styles = useStyle();

  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.containerDisabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}
