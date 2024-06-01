import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Pressable, Text, View } from 'react-native';

import { Box, CustomButton } from '@/components';
import { FormPasswordInput } from '@/components/Form/FormPasswordInput';
import { FormTextInput } from '@/components/Form/FormTextInput';
import { AuthScreenProps } from '@/routes';
import { LoginScheema, loginScheema } from '@/schemas/LoginSchema';

export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {
  const { control, handleSubmit, reset } = useForm<LoginScheema>({
    resolver: zodResolver(loginScheema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function handleLogin(data: LoginScheema) {
    console.log(data);
    reset();
  }

  function handleCreateAccount() {
    navigation.navigate('RegisterScreen');
  }

  return (
    <Box>
      <View className="mt-20 flex-1 items-center gap-y-2">
        <Text className="font-bold text-3xl text-white">Bem vindo de volta!</Text>
        <Text className="font-bold text-base text-gray-subtitle">Entre na sua conta</Text>
      </View>

      <View className="flex-grow">
        <FormTextInput control={control} name="email" placeholder="Digite seu email" />
        <FormPasswordInput control={control} name="password" placeholder="Digite sua senha" />
      </View>

      <View className="w-80 flex-grow self-center">
        <CustomButton title="Entrar" onPress={handleSubmit(handleLogin)} />

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
