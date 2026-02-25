import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Assets
import { SunIcon, MoonIcon } from 'app/assets';
// Styles
import { useStyle } from './index.style';
import { useTheme } from 'app/theme';

export type WrapperProps = {
  children: React.ReactNode;
  back?: boolean;
  toolbar?: string;
};

export default function Wrapper({ toolbar, back, children }: WrapperProps) {
  const styles = useStyle();
  const { colors, isDark, changeMode } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.toolbarContainer}>
        {back ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Back</Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <Text style={styles.toolbar}>{toolbar}</Text>
        <TouchableOpacity onPress={changeMode}>
          {isDark ? (
            <SunIcon color="#e8d04b" />
          ) : (
            <MoonIcon color={colors.secondary} />
          )}
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
}
