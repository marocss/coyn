import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import * as Font from 'expo-font';

import Routes from '~/routes';

import VT323 from '~/assets/fonts/VT323-Regular.ttf';

export default function MyApp() {
  /* Loads font */
  useEffect(() => {
    Font.loadAsync({ VT323 });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#15202b" />
      <Routes />
    </>
  );
}
