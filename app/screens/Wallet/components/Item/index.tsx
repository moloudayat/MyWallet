import React from 'react';
import { View, Text } from 'react-native';

interface ItemProps {
  label: string;
  name: string;
}

export default function Item(props: ItemProps) {
  return (
    <View>
      <Text>{props.label}</Text>
      <Text>{props.name}</Text>
    </View>
  );
}
