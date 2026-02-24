import { StyleSheet } from 'react-native';
import { useTheme } from 'app/theme';

export function useStyle() {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      backgroundColor: colors.primary,
    },

    label: {
      fontWeight: '600',
      color: '#fff',
      fontSize: 16,
    },
  });
}
