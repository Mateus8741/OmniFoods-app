import { Routes } from '@/routes';
import './global.css';

import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

// import RootStack from './assets';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Routes />
    </>
  );
}
