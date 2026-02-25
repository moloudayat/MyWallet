import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
// Common Components
import { CheckIcon, FaultIcon, RefreshIcon } from 'app/assets';
// Hooks
import { useNavigation } from '@react-navigation/native';
// Types
import type { Status } from '../../index.type';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'app/screens';
// Styles
import { useStyle } from './index.style';

interface StatusBadgeProps {
  status: Status;
}

export default function StatusBadge(props: StatusBadgeProps) {
  const styles = useStyle();
  // hooks
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handlePress = () => navigation.navigate('Audit');

  switch (props.status) {
    case 'Success':
      return (
        <TouchableOpacity style={styles.success} onPress={handlePress}>
          <Text style={styles.status}>Verified</Text>
          <CheckIcon color="#fff" />
        </TouchableOpacity>
      );
    case 'Pending':
      return (
        <TouchableOpacity style={styles.pending} onPress={handlePress}>
          <Text style={styles.status}>Pending</Text>
          <RefreshIcon color="#fff" />
        </TouchableOpacity>
      );
    case 'Failed':
      return (
        <TouchableOpacity style={styles.failed} onPress={handlePress}>
          <Text style={styles.status}>Failed</Text>
          <FaultIcon color="#fff" />
        </TouchableOpacity>
      );
    default:
      null;
  }
}
