import { Pressable, Text, View } from 'react-native';

import { Box, CustomButton, PasswordInput, TextInput } from '@/components';
import { AuthScreenProps } from '@/routes';

export function RegisterScreen({ navigation }: AuthScreenProps<'RegisterScreen'>) {
  function handleCreateAccount() {
    console.log('Login');
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
        <TextInput placeholder="Nome completo" />
        <TextInput placeholder="Digite seu email" />
        <TextInput placeholder="Celular" />
        <PasswordInput placeholder="Digite sua senha" />
      </View>

      <View className="w-80 flex-grow self-center">
        <CustomButton title="Criar conta" onPress={handleCreateAccount} />

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
