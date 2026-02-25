import React from 'react';
import { View, Text } from 'react-native';
// Common Components
import { Button, Wrapper } from 'app/components';
// Local Components
import DIDCard from './components/DIDCard';
import VCCard from './components/VCCard';
// Styles
import { useStyle } from './index.style';

export default function Wallet() {
  const styles = useStyle();
  return (
    <Wrapper toolbar="Wallet">
      <DIDCard status="Success" did="did:key:z6MkiJ8Yp7QxFakeDID123456789" />
      <View style={styles.divider} />
      <Text style={styles.label}>VC (Verifiable Credential)</Text>
      <VCCard
        fullName="Moloud Ayat"
        email="moloud.ayat@gmail.com"
        status="Success"
      />
      <Button label="OR Code" />
    </Wrapper>
  );
}
