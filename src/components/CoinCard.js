import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const coins = {
  BTC: 'Bitcoin',
};

export default function CoinCard({
  coinValue,
  coinStatus,
  gotAllData,
  ticker,
  variation,
}) {
  return (
    <SafeAreaView style={styles.container}>
      {gotAllData ? (
        <View style={coinStatus ? styles.contentGreen : styles.contentRed}>
          <Text style={styles.fon}>{coins[ticker]}</Text>
          <Text style={styles.fon}>R$ {coinValue}</Text>
          <Text style={coinStatus ? styles.variationUp : styles.variationDown}>
            {variation}%
          </Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  contentGreen: {
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 3,
    borderRadius: 10,
    width: 205,
    height: 125,
    justifyContent: 'center',
  },
  contentRed: {
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 3,
    borderRadius: 10,
    width: 205,
    height: 125,
    justifyContent: 'center',
  },
  fon: {
    alignItems: 'center',
    color: '#FFE2E2',
    fontSize: 30,
    paddingBottom: 10,
    fontFamily: 'VT323',
    marginTop: -5,
  },
  variationUp: {
    alignItems: 'center',
    color: 'green',
    fontFamily: 'VT323',
    fontSize: 23,
  },
  variationDown: {
    alignItems: 'center',
    color: '#FFADAD',
    fontFamily: 'VT323',
    fontSize: 23,
  },
});
