import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

import coinAPI from '../../services/coinAPI';
import gifAPI from '../../services/gifAPI';
import GIF_API_KEY from '../../services/apiKey';

import Gif from '../../components/Gif';
import CoinCard from '../../components/CoinCard';

import VT323 from '../../../assets/fonts/VT323-Regular.ttf';
// import { Container } from './styles';

export default function Main() {
  const [ticker, setTicker] = useState('BTC');
  const [coinValue, setCoinValue] = useState(0);
  const [variation, setVariation] = useState(0);
  const [coinStatus, setCoinStatus] = useState(null);
  const [gifURL, setGifURL] = useState(null);
  const [gotAllData, setGotAllData] = useState(false);

  function getYesterdayDate() {
    /* gets the date info required to get yesterday's closing value */
    const date = new Date();
    const today = date.getDate();
    const month = date.getMonth() + 1;
    const ystd = today - 1;

    return [month, ystd];
  }

  function calculateVariation(coinValue, ystdCloseValue) {
    let percentage = ((coinValue - ystdCloseValue) * 100) / ystdCloseValue;
    percentage = percentage.toFixed(3);
    setVariation(percentage);

    percentage > 0 ? setCoinStatus(true) : setCoinStatus(false);

    return percentage;
  }

  /* 
    Loads font; Gets coin and gif data */
  useEffect(() => {
    (async () => {
      // load font
      Font.loadAsync({ VT323 });

      // get yesterday's coin value
      const [month, ystd] = getYesterdayDate();
      const response = await coinAPI.get(
        `/${ticker}/day-summary/2019/${month}/${ystd}`
      );
      const yesterdayCoinValue = Number(response.data.closing).toFixed(2);

      // get today's coin value
      const responseCurrent = await coinAPI.get(`${ticker}/ticker/`);
      const formattedCoinValue = Number(
        responseCurrent.data.ticker.buy
      ).toFixed(2);
      setCoinValue(formattedCoinValue);

      // calculate variation
      const percentage = calculateVariation(
        formattedCoinValue,
        yesterdayCoinValue
      );

      // randomize gif
      const offset = Math.floor(Math.random() * 1000 + 1);

      // if variation positive get a happy gif, if negative get a sad gif
      if (percentage > 0) {
        const res = await gifAPI.get(
          `search?api_key=${GIF_API_KEY}q=happy&limit=1&offset=${offset}&rating=G&lang=en`
        );
        const resultGif = res.data.data[0].images.downsized.url;
        setGifURL(resultGif);
      } else {
        const res = await gifAPI.get(
          `search?api_key=${GIF_API_KEY}q=sad&limit=1&offset=${offset}&rating=G&lang=en`
        );
        const resultGif = res.data.data[0].images.downsized.url;
        setGifURL(resultGif);
      }

      // confirms all required data was fetched
      setGotAllData(true);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <CoinCard
        coinValue={coinValue}
        coinStatus={coinStatus}
        gotAllData={gotAllData}
        ticker={ticker}
        variation={variation}
      />
      <Gif gotAllData={gotAllData} coinStatus={coinStatus} gifURL={gifURL} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
