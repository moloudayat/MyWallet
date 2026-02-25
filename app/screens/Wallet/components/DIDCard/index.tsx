import React from 'react';
import { View, Text } from 'react-native';
// Local Components
import StatusBadge from '../StatusBadge';
// Types
import type { Status } from '../../index.type';
// Styles
import { useStyle } from './index.style';

interface DIDCardProps {
  status: Status;
  did: string;
}

export default function DIDCard(props: DIDCardProps) {
  const styles = useStyle();

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.label}>DID</Text>
        <StatusBadge status={props.status} />
      </View>
      <Text style={styles.value}>{props.did}</Text>
    </View>
  );
}
