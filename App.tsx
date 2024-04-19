import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';

import { Loading } from '@/components';
import { Routes } from '@/routes';
import './global.css';

import 'react-native-gesture-handler';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <>
      <StatusBar barStyle="light-content" />
      {fontsLoaded ? <Routes /> : <Loading />}
      <Toast />
    </>
  );
}
