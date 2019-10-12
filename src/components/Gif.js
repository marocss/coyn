import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Gif({ gotAllData, coinStatus, gifURL }) {
  return (
    <View>
      {gotAllData && gifURL ? (
        <View style={styles.container}>
          <Image style={styles.g} source={{ uri: gifURL }} />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  g: {
    width: 390,
    height: 390,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
