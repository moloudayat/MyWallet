import { StyleSheet } from 'react-native';
import { useTheme } from 'app/theme';

export function useStyle() {
  const { colors } = useTheme();

  return StyleSheet.create({
    description: {
      color: colors.helperText,
      marginBottom: 12,
    },
    qrCard: {
      backgroundColor: colors.card,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 8,
      alignItems: 'center',
      padding: 16,
      marginBottom: 12,
    },
    qrImage: {
      width: 280,
      height: 280,
      borderRadius: 8,
      backgroundColor: '#fff',
    },
    placeholder: {
      width: 280,
      height: 280,
      borderRadius: 8,
      backgroundColor: colors.surface,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 12,
    },
    placeholderText: {
      color: colors.helperText,
      textAlign: 'center',
    },
    valueLabel: {
      marginTop: 12,
      marginBottom: 4,
      fontWeight: '600',
      color: colors.text,
      alignSelf: 'flex-start',
    },
    value: {
      color: colors.text,
      backgroundColor: colors.surface,
      borderRadius: 6,
      padding: 10,
      width: '100%',
    },
    expiresAt: {
      marginTop: 10,
      fontSize: 12,
      color: colors.helperText,
      alignSelf: 'flex-start',
    },
    errorText: {
      color: '#B91C1C',
      marginBottom: 10,
    },
  });
}
