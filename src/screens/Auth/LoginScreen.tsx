import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Image, ImageBackground, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

import { useLogin } from '@/api/useCases/Login/useLogin';
import Background from '@/assets/Background.jpg';
import Omni from '@/assets/Logo.png';
import { CustomButton } from '@/components';
import { FormPasswordInput } from '@/components/Form/FormPasswordInput';
import { FormTextInput } from '@/components/Form/FormTextInput';
import { useAppSafeArea } from '@/hooks';
import { AuthScreenProps } from '@/routes';
import { LoginScheema, loginScheema } from '@/schemas/LoginSchema';

export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {
  const { mutate, isPending } = useLogin(() =>
    Toast.show({
      type: 'success',
      text1: 'Login efetuado com sucesso!',
      position: 'top',
    })
  );

  const { top } = useAppSafeArea();

  const { control, handleSubmit, reset } = useForm<LoginScheema>({
    resolver: zodResolver(loginScheema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  function handleLogin(data: LoginScheema) {
    mutate(data);

    reset();
  }

  return (
    <ImageBackground source={Background} className="flex-1">
      <View className="flex-1 bg-black/60 bg-opacity-50 p-5" style={{ paddingTop: top }}>
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
          <CustomButton title="Entrar" onPress={handleSubmit(handleLogin)} isDisabled={isPending} />
        </View>
      </View>
    </ImageBackground>
  );
}
