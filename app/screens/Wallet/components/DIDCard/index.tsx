import React from 'react';
import { View, Text } from 'react-native';

export type Status = 'Success' | 'Pending' | 'Failed';

interface DIDCardProps {
  status: Status;
  did: string;
}

export default function DIDCard(props: DIDCardProps) {
  return (
    <View>
      <View>
        <Text>DID</Text>
        <Text>{props.status}</Text>
      </View>
      <Text>{props.did}</Text>
    </View>
  );
}
