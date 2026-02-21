import React from 'react';
import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

export type InputProps = TextInputProps;

const Input = React.forwardRef<TextInput, InputProps>(
  ({ style, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        style={[styles.input, style]}
        {...props}
        placeholderTextColor="#000"
      />
    );
  },
);

Input.displayName = 'Input';

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default Input;
