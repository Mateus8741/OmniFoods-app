import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Image, ImageBackground, Text, View } from 'react-native';

import Background from '@/assets/Background.jpg';
import Omni from '@/assets/Logo.png';
import { CustomButton } from '@/components';
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

  return (
    <ImageBackground source={Background} className="flex-1">
      <View className="flex-1 rounded-2xl bg-black/60 bg-opacity-50 p-5">
        <Image source={Omni} className="-mx-5 mt-32 h-40 w-full self-center" resizeMode="contain" />

        <View className="mt-20 flex-1 items-center gap-y-2">
          <Text className="font-bold text-3xl text-white">Bem vindo de volta!</Text>
          <Text className="font-bold text-base text-gray-300">Entre na sua conta</Text>
        </View>

        <View className="flex-grow gap-5">
          <FormTextInput control={control} name="email" placeholder="Digite seu email" />
          <FormPasswordInput control={control} name="password" placeholder="Digite sua senha" />
        </View>

        <View className="w-80 flex-grow self-center">
          <CustomButton title="Entrar" onPress={handleSubmit(handleLogin)} />
        </View>
      </View>
    </ImageBackground>
  );
}
