import { StyleSheet } from 'react-native';
import { useTheme } from 'app/theme';

export function useStyle() {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      marginBottom: 16,
      borderTopWidth: 1,
      borderTopColor: colors.devider,
    },

    title: {
      fontWeight: '600',
      marginBottom: 4,
      color: colors.text,
      marginTop: 20,
    },

    description: {
      marginBottom: 8,
      color: colors.secondaryText,
    },

    row: {
      flexDirection: 'row',
      backgroundColor: colors.surface,
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    image: {
      borderRadius: 6,
    },

    button: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 6,
      marginLeft: 12,
      backgroundColor: colors.card,
      borderWidth: 1,
      borderColor: colors.border,
    },

    buttonText: {
      fontWeight: '600',
      color: colors.primary,
    },
  });
}
