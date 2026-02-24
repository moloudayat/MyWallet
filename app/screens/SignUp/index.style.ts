import { StyleSheet } from 'react-native';
import { useTheme } from 'app/theme';

export function useStyle() {
  const { colors } = useTheme();

  return StyleSheet.create({
    desContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginBottom: 20,
    },

    title: {
      color: colors.text,
      fontSize: 16,
      fontWeight: '700',
    },

    description: {
      color: colors.helperText,
      fontSize: 14,
      fontWeight: '400',
    },

    passport: { width: 250, height: 150 },

    selfie: { width: 100, height: 100 },
  });
}
