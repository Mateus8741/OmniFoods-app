import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useLayoutEffect } from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import { api } from '@/api/apiConfig';
import { Loading } from '@/components';
import { useUserStorage } from '@/contexts/userStore';
import { Routes } from '@/routes';
import './global.css';

const queryClient = new QueryClient();

export default function App() {
  const { user } = useUserStorage();

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  useLayoutEffect(() => {
    const authInterceptor = api.interceptors.request.use((config) => {
      config.headers.Authorization = user?.token
        ? `Bearer ${user.token}`
        : config.headers.Authorization;

      return config;
    });

    return () => api.interceptors.request.eject(authInterceptor);
  }, [user?.token]);

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
