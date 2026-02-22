import React from 'react';
// Common Components
import { Button, Wrapper } from 'app/components';
// Local Components
import DIDCard from './components/DIDCard';
import VCCard from './components/VCCard';
export default function Wallet() {
  return (
    <Wrapper>
      <DIDCard status="Success" did="did:key:z6MkiJ8Yp7QxFakeDID123456789" />
      <VCCard
        fullName="Moloud Ayat"
        email="moloud.ayat@gmail.com"
        status="Success"
      />
      <Button label="OR Code" />
    </Wrapper>
  );
}
