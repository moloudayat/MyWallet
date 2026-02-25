import { StyleSheet } from 'react-native';
import { useTheme } from 'app/theme';

export function useStyle() {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      marginBottom: 10,
      flexDirection: 'row',
      gap: 12,
    },

    label: {
      fontSize: 16,
      marginBottom: 2,
      color: colors.text,
      fontWeight: '500',
    },

    value: {
      fontWeight: '400',
      color: colors.helperText,
      fontSize: 16,
    },
  });
}
