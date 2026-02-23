import React from 'react';
// Hooks
import { useNavigation } from '@react-navigation/native';
// Utilities
import { API_BASE_URL } from '@env';
// Types
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'app/screens';

export function useSignUp() {
  // hooks
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  // local state
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [passportPhoto, setPassportPhoto] = React.useState<string | null>(null);
  const [selfiePhoto, setSelfiePhoto] = React.useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          passportImage: { fileName: 'passport.jpg', uri: passportPhoto },
          selfieImage: { fileName: 'selfie.jpg', uri: selfiePhoto },
        }),
      });

      if (!response.ok) {
        const errorPayload = await response.text();
        throw new Error(
          `Request failed (${response.status}): ${
            errorPayload || 'Unknown error'
          }`,
        );
      }

      const data = await response.json();
      console.log('Success:', data);
      navigation.navigate('Wallet');
    } catch (error) {
      console.error('Sign up failed:', error);
    }
  };

  return {
    fullName,
    email,
    passportPhoto,
    selfiePhoto,
    setFullName,
    setEmail,
    setPassportPhoto,
    setSelfiePhoto,
    handleSubmit,
  };
}
