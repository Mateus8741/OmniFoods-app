import React, { ReactElement, useRef } from 'react';
import {
  Platform,
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  Text,
  View,
} from 'react-native';

import { colors } from '@/theme/colors';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  rightComponent?: ReactElement;
  leftComponent?: ReactElement;
  errorMessage?: string;
  moreClassName?: string;
}

export function TextInput({
  label,
  rightComponent,
  leftComponent,
  errorMessage,
  moreClassName,
  ...rnTextInputProps
}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  const $HEIGHT = Platform.OS === 'ios' ? 'py-2' : '';

  return (
    <>
      <View className={`rounded-full border-2 border-gray-500 ${moreClassName}`}>
        <Pressable onPress={focusInput}>
          {label && <Text className="mb-2 text-white">{label}</Text>}
          <View className="w-full flex-row items-center rounded-3xl bg-gray-1000 py-2">
            {leftComponent && <View className="mx-2 justify-center">{leftComponent}</View>}
            <RNTextInput
              className={`px-5 ${$HEIGHT} text-white`}
              placeholderTextColor={colors.gray.subtitle}
              autoCapitalize="none"
              cursorColor="white"
              ref={inputRef}
              style={$TextInputStyle}
              {...rnTextInputProps}
            />
            {rightComponent && <View className="mx-4 justify-center">{rightComponent}</View>}
          </View>
        </Pressable>
      </View>

      {errorMessage && (
        <Text className="font-semiBold text-md text-center font-bold text-red-line">
          {errorMessage}
        </Text>
      )}
    </>
  );
}

const $TextInputStyle = {
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
};
