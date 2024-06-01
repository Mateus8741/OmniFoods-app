import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';

import { Loading } from '@/components';
import { Routes } from '@/routes';
import './global.css';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <>
      <StatusBar barStyle="light-content" />
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          {fontsLoaded ? <Routes /> : <Loading />}
          <Toast />
        </GestureHandlerRootView>
      </QueryClientProvider>
    </>
  );
}
