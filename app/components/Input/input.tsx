import React from 'react';
import { View, TextInput, type TextInputProps } from 'react-native';
// Styles
import { useStyle } from './index.style';
import { useTheme } from 'app/theme';

export interface InputProps extends TextInputProps {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<TextInput, InputProps>(
  ({ style, ...props }, ref) => {
    const styles = useStyle();
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
        {props.icon}
        <TextInput
          ref={ref}
          style={[styles.input, style]}
          {...props}
          placeholderTextColor={colors.placeholder}
        />
      </View>
    );
  },
);

Input.displayName = 'Input';

export default Input;
