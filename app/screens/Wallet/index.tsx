import React from 'react';
import { View, Text } from 'react-native';
// Common Components
import { Button, Wrapper } from 'app/components';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppSelector } from 'app/store/hooks';
import {
  selectRegisterError,
  selectRegisterStatus,
  selectWalletDid,
  selectWalletEmail,
  selectWalletFullName,
} from 'app/store/slices/walletSlice';
// Local Components
import DIDCard from './components/DIDCard';
import VCCard from './components/VCCard';
// Styles
import { useStyle } from './index.style';
import type { Status } from './index.type';
import type { RootStackParamList } from 'app/screens';

export default function Wallet() {
  const styles = useStyle();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const did = useAppSelector(selectWalletDid);
  const fullName = useAppSelector(selectWalletFullName);
  const email = useAppSelector(selectWalletEmail);
  const registerStatus = useAppSelector(selectRegisterStatus);
  const registerError = useAppSelector(selectRegisterError);

  let status: Status = 'Pending';
  if (registerStatus === 'succeeded') {
    status = 'Success';
  }
  if (registerStatus === 'failed' || registerError) {
    status = 'Failed';
  }

  return (
    <Wrapper toolbar="Wallet">
      <DIDCard status={status} did={did ?? 'did:example:pending'} />
      <View style={styles.divider} />
      <Text style={styles.label}>VC (Verifiable Credential)</Text>
      <VCCard
        fullName={fullName ?? 'Unknown'}
        email={email ?? 'Unknown'}
        status={status}
      />
      <Button label="QR Code" onPress={() => navigation.navigate('QRCode')} />
    </Wrapper>
  );
}
