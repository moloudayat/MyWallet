import { StyleSheet } from 'react-native';
import { useTheme } from 'app/theme';

export function useStyle() {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: colors.background,
    },

    toolbarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginVertical: 20,
      justifyContent: 'space-between',
      height: 50,
      borderBottomWidth: 1,
      borderBottomColor: colors.devider,
    },

    toolbar: { color: colors.text, fontSize: 24, fontWeight: 'bold' },
  });
}
