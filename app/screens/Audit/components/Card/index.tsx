import React from 'react';
import { View, Text } from 'react-native';
// Assets
import { DocumentIcon } from 'app/assets';
// Styles
import { useStyle } from './index.style';

export default function Card() {
  const styles = useStyle();

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <DocumentIcon />
        <Text style={styles.title}>Credential Issuance Recorded</Text>
      </View>
      <Text style={styles.label}>Log Hash (SHA-256):</Text>
      <Text style={styles.hash}>
        0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
      </Text>
      <Text style={styles.time}>Apr 24 at 09:40</Text>
    </View>
  );
}
