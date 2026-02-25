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

    divider: {
      height: 1,
      backgroundColor: colors.devider,
      marginVertical: 8,
    },
  });
}
