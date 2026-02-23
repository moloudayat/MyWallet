import React from 'react';
import { ScrollView } from 'react-native';
// Common Components
import { Input, Wrapper, Button } from 'app/components';
// Local Components
import UploadFile from './components/UploadFile';
// Assets
import { selfie, passport } from 'app/assets';
// Hooks
import { useSignUp } from './index.hooks';

export default function SignUp() {
  const {
    fullName,
    email,
    passportPhoto,
    selfiePhoto,
    setSelfiePhoto,
    setFullName,
    setEmail,
    setPassportPhoto,
    handleSubmit,
  } = useSignUp();

  return (
    <Wrapper>
      <ScrollView>
        <Input
          placeholder="Full Name"
          keyboardType="default"
          autoCapitalize="words"
          value={fullName}
          onChangeText={setFullName}
        />
        <Input
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <UploadFile
          title="Upload Password Photo"
          description="Please upload a clear photo of your passport."
          defaultImg={passport}
          imgStyle={{ width: 100, height: 100 }}
          imageUri={passportPhoto}
          setImageUri={setPassportPhoto}
        />
        <UploadFile
          title="Upload Selfie photo"
          description="Please upload a clear selfie holding your passport."
          defaultImg={selfie}
          imgStyle={{ width: 100, height: 100 }}
          imageUri={selfiePhoto}
          setImageUri={setSelfiePhoto}
        />
        <Button label="Sign Up" onPress={handleSubmit} />
      </ScrollView>
    </Wrapper>
  );
}
