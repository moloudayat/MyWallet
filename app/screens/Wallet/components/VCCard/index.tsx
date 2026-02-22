import React from 'react';
import { View } from 'react-native';
// Local Components
import Item from '../Item';
// Types
import { Status } from '../DIDCard';

interface VCCardProps {
  fullName: string;
  email: string;
  status: Status;
}

export default function VCCard(props: VCCardProps) {
  return (
    <View>
      <Item label="Full Name" name={props.fullName} />
      <Item label="Email" name={props.email} />
      <Item label="Status" name={props.status} />
    </View>
  );
}
