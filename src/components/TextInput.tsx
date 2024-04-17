import React, { ReactElement, useRef } from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  Text,
  View,
} from 'react-native';

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

  return (
    <View className={`mb-3 ${moreClassName}`}>
      <Pressable onPress={focusInput}>
        {label && <Text className="mb-2 text-white">{label}</Text>}
        <View className="w-full flex-row items-center rounded-3xl bg-gray-1000 py-2">
          {leftComponent && <View className="mx-2 justify-center">{leftComponent}</View>}
          <RNTextInput
            className="px-5 py-2 text-white"
            placeholderTextColor="white"
            autoCapitalize="none"
            cursorColor="white"
            ref={inputRef}
            style={$TextInputStyle}
            {...rnTextInputProps}
          />
          {rightComponent && <View className="mx-4 justify-center">{rightComponent}</View>}
        </View>
        {errorMessage && (
          <Text className="text-danger-400 font-semiBold mt-1 text-xs">{errorMessage}</Text>
        )}
      </Pressable>
    </View>
  );
}

const $TextInputStyle = {
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
};
