import { StyleSheet } from 'react-native';
import { useTheme } from 'app/theme';

export function useStyle() {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      height: 40,
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 10,
      borderColor: colors.border,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: colors.card,
    },

    input: {
      color: colors.text,
      paddingHorizontal: 8,
    },
  });
}
