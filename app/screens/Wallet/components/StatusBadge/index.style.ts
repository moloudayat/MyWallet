import { StyleSheet } from 'react-native';

export function useStyle() {
  return StyleSheet.create({
    status: {
      fontWeight: '600',
      color: '#fff',
      fontSize: 12,
    },

    success: {
      backgroundColor: '#4CAF50',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center',
    },

    pending: {
      backgroundColor: '#FFC107',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center',
    },

    failed: {
      backgroundColor: '#F44336',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
}
