import React from 'react';
// Hooks
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
// Types
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'app/screens';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import {
  clearRegisterError,
  registerUser,
  selectRegisterError,
  selectRegisterStatus,
} from 'app/store/slices/walletSlice';
import { fetchAuditLogs } from 'app/store/slices/auditSlice';

export function useSignUp() {
  // hooks
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const registerStatus = useAppSelector(selectRegisterStatus);
  const registerError = useAppSelector(selectRegisterError);
  // local state
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [passportPhoto, setPassportPhoto] = React.useState<string | null>(null);
  const [selfiePhoto, setSelfiePhoto] = React.useState<string | null>(null);

  React.useEffect(() => {
    return () => {
      dispatch(clearRegisterError());
    };
  }, [dispatch]);

  const handleSubmit = async () => {
    if (!fullName || !email || !passportPhoto || !selfiePhoto) {
      Alert.alert(
        'Missing fields',
        'Please complete all fields and upload both photos.',
      );
      return;
    }

    try {
      const authResult = await dispatch(
        registerUser({
          fullName,
          email,
          passportPhoto,
          selfiePhoto,
        }),
      ).unwrap();

      if (!authResult.token || !authResult.refreshToken) {
        throw new Error('Login succeeded without valid tokens.');
      }

      dispatch(fetchAuditLogs());
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
    registerStatus,
    registerError,
    handleSubmit,
  };
}
