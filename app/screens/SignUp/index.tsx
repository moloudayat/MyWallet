import React from 'react';
import { ScrollView, View, Text } from 'react-native';
// Common Components
import { Input, Wrapper, Button } from 'app/components';
// Local Components
import UploadFile from './components/UploadFile';
// Assets
import { selfie, passport, UserIcon, EmailIcon } from 'app/assets';
// Hooks
import { useSignUp } from './index.hooks';
// Styles
import { useStyle } from './index.style';
import { useTheme } from 'app/theme';

export default function SignUp() {
  const { colors } = useTheme();
  const styles = useStyle();
  const {
    fullName,
    email,
    passportPhoto,
    selfiePhoto,
    setSelfiePhoto,
    setFullName,
    setEmail,
    setPassportPhoto,
    registerStatus,
    registerError,
    handleSubmit,
  } = useSignUp();

  return (
    <Wrapper toolbar="Sign Up">
      <ScrollView>
        <View style={styles.desContainer}>
          <Text style={styles.title}>Create Your Account</Text>
          <Text style={styles.description}>Get started with your wallet</Text>
        </View>
        <Input
          placeholder="Full Name"
          keyboardType="default"
          autoCapitalize="words"
          value={fullName}
          onChangeText={setFullName}
          icon={<UserIcon color={colors.secondary} />}
        />
        <Input
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          icon={<EmailIcon color={colors.secondary} />}
        />
        <UploadFile
          title="Upload Password Photo"
          description="Please upload a clear photo of your passport."
          defaultImg={passport}
          imgStyle={styles.passport}
          imageUri={passportPhoto}
          setImageUri={setPassportPhoto}
        />
        <UploadFile
          title="Upload Selfie photo"
          description="Please upload a clear selfie holding your passport."
          defaultImg={selfie}
          imgStyle={styles.selfie}
          imageUri={selfiePhoto}
          setImageUri={setSelfiePhoto}
        />
        {registerError ? (
          <Text style={styles.errorText}>{registerError}</Text>
        ) : null}
        <Button
          label={registerStatus === 'loading' ? 'Signing Up...' : 'Sign Up'}
          onPress={handleSubmit}
          disabled={registerStatus === 'loading'}
        />
      </ScrollView>
    </Wrapper>
  );
}
