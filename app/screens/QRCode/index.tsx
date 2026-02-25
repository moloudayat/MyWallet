import React from 'react';
import { Image, Text, View } from 'react-native';
import { Button, Wrapper } from 'app/components';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import {
  generateWalletQRCode,
  selectQRCodeError,
  selectQRCodeExpiresAt,
  selectQRCodeImageUrl,
  selectQRCodeStatus,
  selectQRCodeValue,
} from 'app/store/slices/walletSlice';
import { useStyle } from './index.style';

export default function QRCode() {
  const dispatch = useAppDispatch();
  const styles = useStyle();

  const qrStatus = useAppSelector(selectQRCodeStatus);
  const qrError = useAppSelector(selectQRCodeError);
  const qrImageUrl = useAppSelector(selectQRCodeImageUrl);
  const qrValue = useAppSelector(selectQRCodeValue);
  const qrExpiresAt = useAppSelector(selectQRCodeExpiresAt);

  React.useEffect(() => {
    dispatch(generateWalletQRCode());
  }, [dispatch]);

  return (
    <Wrapper back toolbar="QR Code">
      <Text style={styles.description}>
        Share this QR code for wallet verification.
      </Text>
      <View style={styles.qrCard}>
        {qrImageUrl ? (
          <Image source={{ uri: qrImageUrl }} style={styles.qrImage} />
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>
              {qrStatus === 'loading' ? 'Generating QR code...' : 'No QR code generated yet.'}
            </Text>
          </View>
        )}
        <Text style={styles.valueLabel}>Encoded Data</Text>
        <Text style={styles.value}>{qrValue ?? '-'}</Text>
        <Text style={styles.expiresAt}>
          Expires:{' '}
          {qrExpiresAt ? new Date(qrExpiresAt).toLocaleString() : 'Not available'}
        </Text>
      </View>
      {qrError ? <Text style={styles.errorText}>{qrError}</Text> : null}
      <Button
        label={qrStatus === 'loading' ? 'Generating...' : 'Regenerate QR Code'}
        disabled={qrStatus === 'loading'}
        onPress={() => dispatch(generateWalletQRCode())}
      />
    </Wrapper>
  );
}
