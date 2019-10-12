import React, { useState, useEffect } from 'react';

import coinAPI from '~/services/coinAPI';
import gifAPI from '~/services/gifAPI';
import GIF_API_KEY from '~/services/apiKey';

import Gif from '~/components/Gif';
import CoinCard from '~/components/CoinCard';

import { Container } from './styles';

export default function Main() {
  const [ticker, setTicker] = useState('BTC');
  const [coinValue, setCoinValue] = useState(0);
  const [variation, setVariation] = useState(0);
  const [coinStatus, setCoinStatus] = useState(null);
  const [gifURL, setGifURL] = useState(null);
  const [gotAllData, setGotAllData] = useState(false);

  function getYesterdayDate() {
    /* 
      Gets date information required to 
      fetch yesterday's closing value
    */
    const date = new Date();
    const today = date.getDate();
    const month = date.getMonth() + 1;
    const ystd = today - 1;

    return [month, ystd];
  }

  function calculateVariation(cValue, ystdCloseValue) {
    /* 
      Calculates the variation from the past 24h 
    */
    let percentage = ((cValue - ystdCloseValue) * 100) / ystdCloseValue;
    percentage = percentage.toFixed(3);

    setVariation(percentage);

    // if variation is up coin status == true
    if (percentage > 0) {
      setCoinStatus(true);
    } else {
      setCoinStatus(false);
    }

    return percentage;
  }

  useEffect(() => {
    /* 
      Gets coin and gif data 
    */
    (async () => {
      /* 
        Getting cryptocurrency data 
      */
      let yesterdayCoinValue;
      let formattedCoinValue;
      try {
        // get yesterday's coin value
        const [month, ystd] = getYesterdayDate();
        const response = await coinAPI.get(
          `/${ticker}/day-summary/2019/${month}/${ystd}`
        );
        yesterdayCoinValue = Number(response.data.closing).toFixed(2);

        //
        // get today's coin value
        const responseCurrent = await coinAPI.get(`${ticker}/ticker/`);
        formattedCoinValue = Number(responseCurrent.data.ticker.buy).toFixed(2);

        setCoinValue(formattedCoinValue);
      } catch (err) {
        console.log(err);
      }

      /* 
        Calculating variation 
      */
      const percentage = calculateVariation(
        formattedCoinValue,
        yesterdayCoinValue
      );

      /* 
        Getting gif based on last 24h variation 
      */
      try {
        // randomize gif selection
        const offset = Math.floor(Math.random() * 1000 + 1);

        // if variation positive get happy gif, if negative get sad gif
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
      } catch (err) {
        console.log(err);
      }

      /* 
        Confirming all required data was fetched 
      */
      setGotAllData(true);
    })();
  }, []);

  return (
    <Container>
      <CoinCard
        coinValue={coinValue}
        coinStatus={coinStatus}
        gotAllData={gotAllData}
        ticker={ticker}
        variation={variation}
      />
      <Gif gotAllData={gotAllData} coinStatus={coinStatus} gifURL={gifURL} />
    </Container>
  );
}
