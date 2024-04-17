import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { Box, CustomButton, PasswordInput, TextInput } from '@/components';

export function LoginScreen() {
  function handleLogin() {
    console.log('Login');
  }

  function handleCreateAccount() {
    console.log('Create Account');
  }

  return (
    <Box>
      <View className="mt-20 flex-1 items-center gap-y-2">
        <Text className="font-bold text-3xl text-white">Bem vindo de volta!</Text>
        <Text className="font-bold text-base text-gray-subtitle">Entre na sua conta</Text>
      </View>

      <View className="flex-grow">
        <TextInput placeholder="Digite seu email" />
        <PasswordInput placeholder="Digite sua senha" />
      </View>

      <View className="w-80 flex-grow self-center">
        <CustomButton title="Entrar" onPress={handleLogin} />

        <View className="mt-8 flex-row items-center gap-x-2 self-center">
          <Text className="font-bold text-base text-gray-subtitle">Não possui conta?</Text>

          <Pressable onPress={handleCreateAccount}>
            <Text className="text-red-line">Criar uma conta</Text>
          </Pressable>
        </View>
      </View>
    </Box>
  );
}
