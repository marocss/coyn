import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import MyApp from './src'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="ligth-content"/>
      <MyApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15202B",
  },
});
