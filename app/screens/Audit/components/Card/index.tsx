import React from 'react';
import { View, Text } from 'react-native';
// Assets
import { DocumentIcon } from 'app/assets';
import { useAppSelector } from 'app/store/hooks';
import {
  selectAuditError,
  selectAuditStatus,
  selectLatestAuditLog,
} from 'app/store/slices/auditSlice';
// Styles
import { useStyle } from './index.style';

export default function Card() {
  const styles = useStyle();
  const latestLog = useAppSelector(selectLatestAuditLog);
  const auditStatus = useAppSelector(selectAuditStatus);
  const auditError = useAppSelector(selectAuditError);

  const formattedTime = latestLog?.timestamp
    ? new Date(latestLog.timestamp).toLocaleString()
    : 'No logs yet';

  const cardTitle =
    auditStatus === 'loading'
      ? 'Loading audit records...'
      : auditStatus === 'failed'
        ? 'Failed to load audit records'
        : 'Credential Issuance Recorded';

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <DocumentIcon />
        <Text style={styles.title}>{cardTitle}</Text>
      </View>
      <Text style={styles.label}>Log Hash (SHA-256):</Text>
      <Text style={styles.hash}>
        {latestLog?.hash ? `0x${latestLog.hash}` : auditError ?? 'No hash available'}
      </Text>
      <Text style={styles.time}>{formattedTime}</Text>
    </View>
  );
}
