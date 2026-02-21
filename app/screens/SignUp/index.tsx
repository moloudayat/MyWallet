import React from 'react';
// Common Components
import { Input, Wrapper, Button } from 'app/components';
export default function SignUp() {
  return (
    <Wrapper>
      <Input
        placeholder="Full Name"
        keyboardType="default"
        autoCapitalize="words"
      />
      <Input
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button label="Sign Up" onPress={() => console.log('Sign Up Pressed')} />
    </Wrapper>
  );
}
