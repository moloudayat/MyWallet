import React from 'react';
import { ScrollView } from 'react-native';
// Common Components
import { Input, Wrapper, Button } from 'app/components';
// Local Components
import UploadFile from './components/UploadFile';
// Assets
import { selfie, passport } from 'app/assets';
// Hooks
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'app/screens';

export default function SignUp() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleSubmit = () => navigation.navigate('Wallet');
  return (
    <Wrapper>
      <ScrollView>
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
        <UploadFile
          title="Upload Password Photo"
          description="Please upload a clear photo of your passport."
          defaultImg={passport}
          imgStyle={{ width: 100, height: 100 }}
        />
        <UploadFile
          title="Upload Selfie photo"
          description="Please upload a clear selfie holding your passport."
          defaultImg={selfie}
          imgStyle={{ width: 100, height: 100 }}
        />
        <Button label="Sign Up" onPress={handleSubmit} />
      </ScrollView>
    </Wrapper>
  );
}
