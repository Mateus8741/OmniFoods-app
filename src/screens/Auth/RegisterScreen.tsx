import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Pressable, Text, View } from 'react-native';

import { Box, CustomButton, FormPasswordInput, FormTextInput } from '@/components';
import { AuthScreenProps } from '@/routes';
import { RegisterScheema, registerScheema } from '@/schemas/RegisterSchema';

export function RegisterScreen({ navigation }: AuthScreenProps<'RegisterScreen'>) {
  const { control, handleSubmit, reset } = useForm<RegisterScheema>({
    resolver: zodResolver(registerScheema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
    },
    mode: 'onChange',
  });

  function handleCreateAccount(data: RegisterScheema) {
    console.log(data);
    reset();
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Box>
      <View className="mt-20 flex-1 items-center gap-y-2">
        <Text className="font-bold text-3xl text-white">Crie uma nova conta</Text>
        <Text className="font-bold text-base text-gray-subtitle">Preencha o formulário abaixo</Text>
      </View>

      <View className="flex-grow">
        <FormTextInput control={control} name="name" placeholder="Nome completo" />
        <FormTextInput control={control} name="email" placeholder="Digite seu email" />
        <FormTextInput control={control} name="phone" placeholder="Celular" />
        <FormPasswordInput control={control} name="password" placeholder="Digite sua senha" />
      </View>

      <View className="w-80 flex-grow self-center">
        <CustomButton title="Criar conta" onPress={handleSubmit(handleCreateAccount)} />

        <View className="mt-8 flex-row items-center gap-x-2 self-center">
          <Text className="font-bold text-base text-gray-subtitle">já tem uma conta?</Text>

          <Pressable onPress={handleGoBack}>
            <Text className="text-red-line">Faça o Login</Text>
          </Pressable>
        </View>
      </View>
    </Box>
  );
}
