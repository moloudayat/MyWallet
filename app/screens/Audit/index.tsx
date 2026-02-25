import React from 'react';
// Common Components
import { Wrapper } from 'app/components';
// Local Components
import Card from './components/Card';

export default function Audit() {
  return (
    <Wrapper back toolbar="Audit">
      <Card />
    </Wrapper>
  );
}
