import React from 'react';
import { View, Text } from 'react-native';

export default function Card() {
  return (
    <View>
      <View>
        <Text>Credential Issuance Recorded</Text>
      </View>
      <Text>Log Hash (SHA-256):</Text>
      <Text>
        0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
      </Text>
      <Text>Apr 24 at 09:40</Text>
    </View>
  );
}
