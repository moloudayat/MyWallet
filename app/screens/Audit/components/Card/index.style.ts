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

    header: {
      marginBottom: 8,
      flexDirection: 'row',
      gap: 8,
      borderBottomWidth: 1,
      borderBottomColor: colors.devider,
      paddingBottom: 8,
    },

    title: {
      fontWeight: '600',
      color: colors.text,
      fontSize: 16,
    },

    label: {
      fontSize: 16,
      color: colors.text,
      fontWeight: '400',
    },

    hash: {
      color: colors.text,
      backgroundColor: colors.surface,
      padding: 8,
      borderRadius: 4,
      marginVertical: 8,
    },

    time: {
      fontSize: 12,
      color: colors.helperText,
    },
  });
}
