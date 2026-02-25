import { StyleSheet } from 'react-native';
import { useTheme } from 'app/theme';

export function useStyle() {
  const { colors } = useTheme();

  return StyleSheet.create({
    card: {
      padding: 12,
      borderRadius: 8,
      borderWidth: 1,
      marginBottom: 12,
      backgroundColor: colors.card,
      borderColor: colors.border,
    },

    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },

    label: {
      fontWeight: '600',
      color: colors.text,
    },

    status: {
      fontWeight: '600',
      color: colors.primary,
    },

    value: {
      fontSize: 12,
      color: colors.text,
    },
  });
}
