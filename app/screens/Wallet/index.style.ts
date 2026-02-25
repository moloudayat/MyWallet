import { StyleSheet } from 'react-native';
import { useTheme } from 'app/theme';

export function useStyle() {
  const { colors } = useTheme();

  return StyleSheet.create({
    label: {
      fontWeight: '600',
      color: colors.text,
      fontSize: 16,
      marginVertical: 12,
    },

    divider: {
      height: 1,
      backgroundColor: colors.devider,
      marginVertical: 8,
    },
  });
}
