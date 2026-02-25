import React from 'react';
import { View } from 'react-native';
// Local Components
import Item from '../Item';
// Assets
import { UserIcon, EmailIcon, RefreshIcon } from 'app/assets';
// Types
import { Status } from '../../index.type';
// Styles
import { useStyle } from './index.style';
import { useTheme } from 'app/theme';

interface VCCardProps {
  fullName: string;
  email: string;
  status: Status;
}

export default function VCCard(props: VCCardProps) {
  const { colors } = useTheme();
  const styles = useStyle();

  return (
    <View style={styles.card}>
      <Item
        label="Full Name"
        name={props.fullName}
        icon={<UserIcon color={colors.secondary} />}
      />
      <View style={styles.divider} />
      <Item
        label="Email"
        name={props.email}
        icon={<EmailIcon color={colors.secondary} />}
      />
      <View style={styles.divider} />
      <Item
        label="Status"
        name={props.status}
        icon={<RefreshIcon color={colors.secondary} />}
      />
    </View>
  );
}
