import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';

import { TextInput, TextInputProps } from '../components/TextInput';

import { colors } from '@/theme/colors';

export type PasswordInputProps = Omit<TextInputProps, 'rightComponent'>;

export function PasswordInput({ ...textInputProps }: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry((prev) => !prev);
  }

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...textInputProps}
      rightComponent={
        <MaterialCommunityIcons
          name={isSecureTextEntry ? 'eye' : 'eye-off'}
          onPress={toggleSecureTextEntry}
          color={colors.gray.subtitle}
          size={24}
        />
      }
    />
  );
}
