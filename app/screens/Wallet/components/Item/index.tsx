import React from 'react';
import { View, Text } from 'react-native';
// Styles
import { useStyle } from './index.style';

interface ItemProps {
  label: string;
  name: string;
  icon: React.ReactNode;
}

export default function Item(props: ItemProps) {
  const styles = useStyle();

  return (
    <View style={styles.container}>
      {props.icon}
      <View>
        <Text style={styles.label}>{props.label}</Text>
        <Text style={styles.value}>{props.name}</Text>
      </View>
    </View>
  );
}
